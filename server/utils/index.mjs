export const getMenuData = componentNames => {
    return componentNames.map((item, index) => {
        return {
            key: index,
            title: item.menuName,
            path: `/${item.codeBlockName}`
        }
    })
}

export const ToUpperCase = str => {
    let res;
    if (str.indexOf('-') !== -1) {
        const arr = str.split('-');
        res = arr.reduce((pre, cur) => {
            pre += cur.slice(0, 1).toUpperCase() + cur.slice(1);
            return pre
        }, '');
    } else {
        res = str.slice(0, 1).toUpperCase() + str.slice(1);
    }
    return res
}

export const getRouteCom = componentNames => {
    return componentNames.reduce((pre, cur) => {
        pre += `<Route path="/${cur.codeBlockName}" component={${ToUpperCase(cur.codeBlockName)}} /> \n`;
        return pre
    }, `<Route path="/" exact render={() => <Redirect to="/${componentNames[0].codeBlockName}" />} />`)
}

export const getTemplate = str => {
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



