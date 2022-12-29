export type TCodeBlockNamesItem = {
  menuName: string
  blockName: string
}
export const getMenuData = (componentNames: TCodeBlockNamesItem[]) => {
  return componentNames.map((item) => {
    return {
      title: item.menuName,
      path: `/${item.blockName}`,
    }
  })
}

export const ToUpperCase = (str: string) => {
  let res
  if (str.indexOf('-') !== -1) {
    const arr = str.split('-')
    res = arr.reduce((pre, cur) => {
      pre += cur.slice(0, 1).toUpperCase() + cur.slice(1)
      return pre
    }, '')
  } else {
    res = str.slice(0, 1).toUpperCase() + str.slice(1)
  }
  return res
}

export const getRouteCom = (componentNames: TCodeBlockNamesItem[]) => {
  return componentNames.reduce((pre, cur) => {
    pre += `<Route path="/${cur.blockName}" component={${ToUpperCase(cur.blockName)}} /> \n`
    return pre
  }, `<Route path="/" exact render={() => <Redirect to="/${componentNames[0].blockName}" />} />`)
}

export const getBlockIndexTsxTemplate = (mdStr: string, importStr: string, templateStr: string) => `
  import React from 'react';
  import { marked } from "marked";
  import Template from './../../components/template';
  import codes from './../../codes/codes.json';
  ${importStr}
  
  const introductionMdStr = \`${mdStr}\`;
  let html = marked(introductionMdStr, {
     renderer: new marked.Renderer(),
     gfm: true,
     breaks: false
  });
  
  const TemplateWrapper = () => {
     return <div className="template">
       <div dangerouslySetInnerHTML={{__html: html}} />
       <h2>代码演示</h2>
       ${templateStr}
     </div>
  }
export default TemplateWrapper
`

export const getRouterTemplate = (codeBlockNames: TCodeBlockNamesItem[]) => {
  const routerImport = codeBlockNames.reduce((pre, cur) => {
    pre += `const ${ToUpperCase(cur.blockName)} =  lazy(() => import('./pages/${cur.blockName}')); \n`
    return pre
  }, '')
  return `
      import React, { lazy, Suspense } from 'react';
      import { Switch, Route, Redirect } from 'react-router-dom';
      ${routerImport}
      const Router = () => {
        return <Switch >
          <Suspense fallback={<div />}>
            ${getRouteCom(codeBlockNames)}
          </Suspense>
        </Switch>;
      }
      export default Router
    `
}
