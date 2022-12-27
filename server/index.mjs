import { fromMarkdown } from 'mdast-util-from-markdown'
import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'fs'
import $ from 'gogocode'
import glob from 'glob'
import chokidar from 'chokidar'
import pkg from 'fs-extra'
import path from 'path'
import url from 'url'
import { getMenuData, ToUpperCase, getRouteCom, getTemplate } from './utils/index.mjs'

const { copySync } = pkg

const getPath = (url2) => {
  const __filename = url.fileURLToPath(url2)
  const __dirname = path.dirname(__filename)
  return { __filename, __dirname }
}
const { __filename, __dirname } = getPath(import.meta.url)

const transform = () => {
  const codeJson = {}
  const componentNames = []
  const codeBlockNames = []
  const codeTemplate = {}
  glob(path.join(__dirname, '../docs/**/*.md'), (err, files) => {
    files.forEach((file) => {
      const fileName = file.split('/').reverse()[0].split('.')[0]
      const parentFileName = file.split('/').reverse()[1]
      const codeBlockFolderName = file.split('/').reverse()[2]
      if (!codeTemplate[codeBlockFolderName]) {
        let introductionMdStr = ''
        if (existsSync(path.join(__dirname, `../docs/${codeBlockFolderName}/README.md`))) {
          introductionMdStr = readFileSync(path.join(__dirname, `../docs/${codeBlockFolderName}/README.md`), {
            encoding: 'utf-8',
          })
          // 转义
          introductionMdStr = introductionMdStr.replace(/`/g, '\\`').replace(/{/g, '\\{')
        }
        codeTemplate[codeBlockFolderName] = $(getTemplate(introductionMdStr))
      }
      if (parentFileName === 'demo') {
        // 正常运行
        const componentName = `${codeBlockFolderName}${ToUpperCase(fileName)}`
        componentNames.push(componentName)
        // if (!codeBlockNames.includes(codeBlockFolderName)) codeBlockNames.push(codeBlockFolderName);
        const mdString = readFileSync(file, { encoding: 'utf-8' })
        const mdAst = fromMarkdown(mdString)
        const jsxCode = mdAst.children.find((item) => item.type === 'code').value
        const mdFileName = file.split('/').reverse()[0].split('.')[0]
        if (mdFileName === 'index') {
          writeFileSync(path.join(__dirname, `../docs/${codeBlockFolderName}/demo/index.tsx`), jsxCode)
        }

        // 获取框内标题信息,描述信息
        const titleRes = mdAst.children.find((item) => item.type === 'heading' && item.depth === 1)
        const title = titleRes?.children[0]?.value
        const desRes = mdAst.children.find((item) => item.type === 'heading' && item.depth === 2)
        const describe = `generateblock ${codeBlockFolderName} 下载使用`

        codeJson[componentName] = jsxCode

        if (!existsSync(path.join(__dirname, `../src/pages/${codeBlockFolderName}`))) {
          mkdirSync(path.join(__dirname, `../src/pages/${codeBlockFolderName}`))
        }

        if (!existsSync(path.join(__dirname, `../src/pages/${codeBlockFolderName}/demo`))) {
          mkdirSync(path.join(__dirname, `../src/pages/${codeBlockFolderName}/demo`))
        }

        // writeFileSync(path.join(__dirname, `../src/pages/${codeBlockFolderName}/demo/${componentName}.tsx`), jsxCode)

        const ast = codeTemplate[codeBlockFolderName].find(`import '$_$source'`)
        ast.each((importNode, index) => {
          if (ast.length - 1 === index) {
            importNode.after(`import ${ToUpperCase(componentName)} from './demo/index'; \n`)
          }
        })

        codeTemplate[codeBlockFolderName].replace(
          `<div $$$1>$$$2</div>`,
          `<div $$$1>
                            $$$2
                            <Template code={codes['${componentName}']} describe={"${describe || '默认'}"} title={"${
            title || '基本用法'
          }"}>
                                <${ToUpperCase(componentName)} />
                            </Template>
                        </div>`
        )
        writeFileSync(
          path.join(__dirname, `../src/pages/${codeBlockFolderName}/index.tsx`),
          codeTemplate[codeBlockFolderName].root().generate()
        )
      } else {
        // 获取代码块描述信息
        const codeBlockFolderName2 = file.split('/').reverse()[1]
        const mdString = readFileSync(file, { encoding: 'utf-8' })
        const mdAst = fromMarkdown(mdString)
        const res = mdAst.children.find((item) => item.type === 'heading' && item.depth === 1)
        codeBlockNames.push({
          codeBlockName: codeBlockFolderName2,
          menuName: res?.children[0]?.value || codeBlockFolderName2,
        })
      }
    })
    writeFileSync(path.join(__dirname, '../src/codes/codes.json'), JSON.stringify(codeJson))

    const getRouterImport = () => {
      return codeBlockNames.reduce((pre, cur) => {
        pre += `const ${ToUpperCase(cur.codeBlockName)} =  lazy(() => import('./pages/${cur.codeBlockName}')); \n`
        return pre
      }, '')
    }

    const routerTemplate = `import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
${getRouterImport()}
const Router = () => {
    return <Switch >
    <div>
        <Suspense fallback={<div />}>
            ${getRouteCom(codeBlockNames)}
        </Suspense>
    </div> 
    </Switch>;
}

export default Router`
    writeFileSync(path.join(__dirname, '../src/router.tsx'), routerTemplate, 'utf-8')
    const menuData = getMenuData(codeBlockNames)
    writeFileSync(
      path.join(__dirname, '../src/constant/index.ts'),
      `export default ${JSON.stringify(menuData)}`,
      'utf-8'
    )
  })
}

glob(path.join(__dirname, '../docs/**/demo/'), (err, files) => {
  files.forEach((source) => {
    const folderName = source.split('/').reverse()[2]
    copySync(source, path.join(__dirname, `../src/pages/${folderName}/demo`), {
      overwrite: true,
    })
  })

  // TODO 监听这里有点问题,后续更改
  // const watcher = chokidar.watch(path.join(__dirname, '../docs'), {
  //     ignoreInitial: true,
  // });
  // watcher.on('change', () => {
  //     console.log('update');
  //     transform()
  // });
  transform()
})
