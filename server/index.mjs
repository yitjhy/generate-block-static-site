import { fromMarkdown } from 'mdast-util-from-markdown';
import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'fs';
import $ from 'gogocode';
import glob from 'glob';
import chokidar from 'chokidar';
import pkg from 'fs-extra';
const { copySync } = pkg;


const getMenuData = componentNames => {
    return componentNames.map((item, index) => {
        return {
            key: index,
            title: item.menuName,
            path: `/${item.codeBlockName}`
        }
    })
}

const ToUpperCase = str => {
    let res;
    if (str.indexOf('-') !== -1) {
        const arr = str.split('-');
        res = arr.reduce((pre, cur) => {
            pre += cur.slice(0,1).toUpperCase() +cur.slice(1);
            return pre
        }, '');
    } else {
        res = str.slice(0,1).toUpperCase() +str.slice(1);
    }
    return res
}

const haveImport = (ast, targetBlock) => {
    let flag = false
    ast
        .find(`import "$_$source"`)
        .each(item => {
            if(item.match['source'][0].value === `./pages/${targetBlock}`) {
                flag = true
            }
        })
    return flag
}

const insertImport = (rootAst, fileName) => {
    let newContent = '';
    if (haveImport(rootAst, fileName)) {
        newContent = rootAst.generate();
    } else {
        const importAst = rootAst.find(`import '$_$source'`);
        importAst.each((importNode, index) => {
            if (importAst.length - 1  === index) {
                newContent = importNode.after(`import ${ToUpperCase(fileName)} from './pages/${fileName}'; \n`).root().generate();
            }
        })
    }
}

const getRouteCom = componentNames => {
    return componentNames.reduce((pre, cur) => {
        pre += `<Route path="/${cur.codeBlockName}" component={${ToUpperCase(cur.codeBlockName)}} /> \n`;
        return pre
    }, `<Route path="/" exact render={() => <Redirect to="/${componentNames[0].codeBlockName}" />} />`)
}

const getTemplate = str => {
    return `import React from 'react';
import { marked } from "marked";
import Template from './../../components/template';
import codes from './../../codes/codes.json';

let introductionStr = \`${str}\`;
let html = marked(introductionStr, {
    renderer: new marked.Renderer(),
    gfm: true,
    breaks: false,
});

const TemplateWrapper = () => {
    return <div className="template">
    <div dangerouslySetInnerHTML={{__html: html}} />
    <h2>
            代码演示
        </h2>
</div>
}
export default TemplateWrapper`
}

const transform = () => {
    const codeJson = {};
    const componentNames = [];
    const codeBlockNames = [];
    // const rootAst = $.loadFile('./../src/router.jsx', {});
    const codeTemplate = {

    };
    glob('./../docs/**/*.md', (err, files) => {
        files.forEach((file) => {
            const fileName = file.split('/').reverse()[0].split('.')[0];
            const parentFileName = file.split('/').reverse()[1];
            const codeBlockFolderName = file.split('/').reverse()[2];
            if (!codeTemplate[codeBlockFolderName]) {
                let introductionMdStr = '';
                if (existsSync(`./../docs/${codeBlockFolderName}/README.md`)) {
                    introductionMdStr = readFileSync(`./../docs/${codeBlockFolderName}/README.md`, {encoding: 'utf-8'});
                    // 转义
                    introductionMdStr = introductionMdStr.replace(/`/g, '\\`');
                }
                codeTemplate[codeBlockFolderName] = $(getTemplate(introductionMdStr));
            }
            if (parentFileName === 'demo') {
                // 正常运行
                const componentName = `${codeBlockFolderName}${fileName}`;
                componentNames.push(componentName);
                // if (!codeBlockNames.includes(codeBlockFolderName)) codeBlockNames.push(codeBlockFolderName);
                const mdString = readFileSync(file, {encoding: 'utf-8'});
                const mdAst = fromMarkdown(mdString);
                const jsxCode = mdAst.children[mdAst.children.length - 1].value;



                const mdFileName = file.split('/').reverse()[0].split('.')[0];
                if (mdFileName === 'index') {
                    writeFileSync(`./../docs/${codeBlockFolderName}/demo/index.jsx`, jsxCode);
                }




                const titleRes = mdAst.children.find(item => item.type === 'heading' && item.depth === 1);
                const title = titleRes?.children[0]?.value;
                const desRes = mdAst.children.find(item => item.type === 'heading' && item.depth === 2);
                const describe = desRes?.children[0]?.value;


                codeJson[componentName] = jsxCode;



                if (!existsSync(`./../src/pages/${codeBlockFolderName}`)) {
                    mkdirSync(`./../src/pages/${codeBlockFolderName}`);
                }

                if (!existsSync(`./../src/pages/${codeBlockFolderName}/demo`)) {
                    mkdirSync(`./../src/pages/${codeBlockFolderName}/demo`);
                }

                writeFileSync(`./../src/pages/${codeBlockFolderName}/demo/${componentName}.jsx`, jsxCode);

                const ast = codeTemplate[codeBlockFolderName].find(`import '$_$source'`);
                ast.each((importNode, index) => {
                    if (ast.length - 1  === index) {
                        importNode.after(`import ${ToUpperCase(componentName)} from './demo/${componentName}'; \n`)
                    }
                })

                codeTemplate[codeBlockFolderName].replace(
                    `<div $$$1>$$$2</div>`,
                    `<div $$$1>
                            $$$2
                            <Template code={codes['${componentName}']} describe={"${describe || '默认'}"} title={"${title || '基本用法'}"}>
                                <${ToUpperCase(componentName)} />
                            </Template>
                        </div>`
                );
                writeFileSync(`./../src/pages/${codeBlockFolderName}/index.jsx`, codeTemplate[codeBlockFolderName].root().generate());
            } else {
                // 获取代码块描述信息
                const codeBlockFolderName2 = file.split('/').reverse()[1];
                const mdString = readFileSync(file, {encoding: 'utf-8'});
                const mdAst = fromMarkdown(mdString);
                const res = mdAst.children.find(item => item.type === 'heading' && item.depth === 1);
                codeBlockNames.push({
                    codeBlockName: codeBlockFolderName2,
                    menuName: res?.children[0]?.value || codeBlockFolderName2
                })
            }
        })
        writeFileSync('./../src/codes/codes.json', JSON.stringify(codeJson));


        const getRouterImport = () => {
            return codeBlockNames.reduce((pre, cur) => {
                pre += `import ${ToUpperCase(cur.codeBlockName)} from './pages/${cur.codeBlockName}'; \n`
                return pre
            }, '')
        }


        const routerTemplate = `import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
${getRouterImport()}
const Router = () => {
    return <Switch >
        ${getRouteCom(codeBlockNames)}
    </Switch>;
}

export default Router`



        // `import ${ToUpperCase(fileName)} from './pages/${fileName}'; \n`

        // rootAst.replace(
        //     `<Switch $$$1>$$$2</Switch>`,
        //     `<Switch $$$1>${getRouteCom(codeBlockNames)}</Switch>`
        // );
        // codeBlockNames.forEach(item => {
        //     insertImport(rootAst, item.codeBlockName)
        // })
        // writeFileSync('./../src/router.jsx', rootAst.generate(), 'utf-8');
        writeFileSync('./../src/router.jsx', routerTemplate, 'utf-8');
        const menuData = getMenuData(codeBlockNames);
        writeFileSync('./../src/constant/index.js', `export default ${JSON.stringify(menuData)}`, 'utf-8');

    })
}



glob('./../docs/**/demo/', (err, files) => {
    files.forEach(source => {
        const folderName = source.split('/').reverse()[2];
        copySync(source, `./../src/pages/${folderName}/demo`, {
            overwrite: true,
        })
    })

    // const watcher = chokidar.watch('./../docs', {
    //     ignoreInitial: true,
    // });
    // watcher.on('change', () => {
    //     console.log('update');
    //     transform()
    // });
    transform();
})



