import glob from 'glob'
import path from 'path'
import url from 'url'
import LZString from 'lz-string'
import { rmdirSync, rmSync, existsSync, readFileSync, lstatSync, writeFileSync } from 'fs'
import getDependenciesFromFile from './getDependenciesFromFile/index.mjs'
import getProjectDependencies from './getProjectDependencies/index.mjs'
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectDependencies = getProjectDependencies()

export const getMenuData = (componentNames) => {
  return componentNames.map((item) => {
    return {
      title: item.menuName,
      path: `/${item.blockName}`,
    }
  })
}

export const ToUpperCase = (str) => {
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

export const getRouteCom = (componentNames) => {
  return componentNames.reduce((pre, cur) => {
    pre += `<Route path="/${cur.blockName}" component={${ToUpperCase(cur.blockName)}} /> \n`
    return pre
  }, `<Route path="/" exact render={() => <Redirect to="/${componentNames[0]?.blockName}" />} />`)
}

export const getBlockIndexTsxTemplate = (mdStr, importStr, templateStr) => `
  import React from 'react';
  import { marked } from "marked";
  import Template from './../../components/template';
  import codes from './../../codes.json';
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

export const rm = () => {
  glob(path.join(__dirname, '../../src/pages/'), (err, files) => {
    files.forEach((source) => {
      rmdirSync(source, { recursive: true })
    })
  })
  // rmSync(path.join(__dirname, '../../src/codes.json'))
  // rmSync(path.join(__dirname, '../../src/menu.ts'))
  // rmSync(path.join(__dirname, '../../src/router.tsx'))
}

// 获取 [block]/README.md 信息
export const getIntroductionMdStr = (blockName) => {
  let introductionMdStr = ''
  const readmePath = path.join(__dirname, `../../src/pages/${blockName}/README.md`)
  if (existsSync(readmePath)) {
    introductionMdStr = readFileSync(readmePath, { encoding: 'utf-8' })
    // 转义
    introductionMdStr = introductionMdStr.replace(/`/g, '\\`').replace(/{/g, '\\{')
  }
  return introductionMdStr
}

const indexTsxCode = `import React from 'react';
import { createRoot } from 'react-dom/client';
import Demo from './demo';

createRoot(document.getElementById('root')).render(<Demo />);`

const htmlCode = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
  </head>
  <body>
    <div id="root" style="padding: 24px" />
  </body>
</html>`

const compress = (string) => {
  return LZString.compressToBase64(string)
    .replace(/\+/g, `-`) // Convert '+' to '-'
    .replace(/\//g, `_`) // Convert '/' to '_'
    .replace(/=+$/, ``) // Remove ending '='
}

export const getCodeSandBoxParameters = (baseDemoPath) => {
  const demoPath = baseDemoPath + '/**'
  let parameters = {
    files: {
      'index.tsx': {
        content: indexTsxCode,
        isBinary: true,
      },
      'index.html': {
        content: htmlCode,
        isBinary: true,
      },
      'package.json': {
        content: {
          dependencies: {
            react: 'latest',
            'react-dom': 'latest',
            ahooks: 'latest',
            'react-contextmenu': 'latest',
            'styled-components': 'latest',
            '@types/react': 'latest',
            '@types/react-dom': 'latest',
            '@types/styled-components': 'latest',
          },
        },
      },
    },
  }
  glob.sync(demoPath).map((demoFilePath) => {
    const stat = lstatSync(demoFilePath)
    if (stat.isFile()) {
      const codesandboxFileName = demoFilePath.replace(`${baseDemoPath}/`, '')
      readFileSync(demoFilePath, { encoding: 'utf-8' })
      let isBinary = true
      if (codesandboxFileName.includes('/')) isBinary = false
      const extensionName = demoFilePath.split('/').reverse()[0].split('.').reverse()[0]
      const parseExtensionNames = ['jsx', 'tsx', 'js', 'ts']
      if (parseExtensionNames.includes(extensionName)) {
        // TODO 收集依赖
        const dependenciesFromFile = getDependenciesFromFile(demoFilePath)

        const installDependencies = Object.keys(projectDependencies).reduce((pre, cur) => {
          if (dependenciesFromFile.includes(cur)) {
            const dependenciesVersion = projectDependencies[cur].replace('^', '')
            pre[cur] = dependenciesVersion
          }
          if (cur.includes('@types')) {
            if (dependenciesFromFile.includes(cur.split('/').slice(1).join('/'))) {
              const dependenciesVersion = projectDependencies[cur].replace('^', '')
              pre[cur] = dependenciesVersion
            }
          }
          return pre
        }, {})
        installDependencies['react-dom'] = 'latest'
        installDependencies['react'] = 'latest'
        installDependencies['@types/react'] = 'latest'
        installDependencies['@types/react-dom'] = 'latest'
        installDependencies['prop-types'] = 'latest'
        parameters.files['package.json'].content.dependencies = installDependencies
        // console.log(installDependencies)
      }
      const content = readFileSync(demoFilePath, { encoding: 'utf-8' })
      // .replace(/`/g, '\\`')
      // .replace(/{/g, '\\{')
      // .replace(/}/g, '\\}')
      // .replace(/$/g, '\\$')
      parameters.files[codesandboxFileName] = {
        content: content,
        isBinary,
      }
    }
  })
  parameters = compress(JSON.stringify(parameters))
  return `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}`
}

export const getRouterTemplate = (codeBlockNames) => {
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
