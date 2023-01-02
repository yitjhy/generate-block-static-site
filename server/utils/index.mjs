import glob from 'glob'
import path from 'path'
import url from 'url'
import LZString from 'lz-string'
import { rmdirSync, rmSync, existsSync, readFileSync, lstatSync } from 'fs'
import getDependenciesFromFile from './getDependenciesFromFile/index.mjs'
import getProjectDependencies from './getProjectDependencies/index.mjs'
import { indexTsxCode, htmlCode } from '../constant.mjs'
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const projectDependencies = getProjectDependencies()

const compress = (string) => {
  return LZString.compressToBase64(string)
    .replace(/\+/g, `-`) // Convert '+' to '-'
    .replace(/\//g, `_`) // Convert '/' to '_'
    .replace(/=+$/, ``) // Remove ending '='
}

const getCodeSandBoxDependencies = (demoPath) => {
  let res = ['@types/react-dom', '@types/react', 'react-dom', 'react']
  glob.sync(demoPath).map((demoFilePath) => {
    const stat = lstatSync(demoFilePath)
    if (stat.isFile()) {
      const extensionName = demoFilePath.split('/').reverse()[0].split('.').reverse()[0]
      const parseExtensionNames = ['jsx', 'tsx', 'js', 'ts']
      if (parseExtensionNames.includes(extensionName)) {
        const dependenciesFromFile = getDependenciesFromFile(demoFilePath)
        res = [...res, ...dependenciesFromFile]
      }
    }
  })
  const dependenciesFromDemoPath = Array.from(new Set(res))
  const codeSandBoxDependencies = Object.keys(projectDependencies).reduce((pre, cur) => {
    if (cur.includes('@types')) {
      if (dependenciesFromDemoPath.includes(cur.split('/').slice(1).join('/'))) {
        const dependenciesVersion = projectDependencies[cur].replace('^', '')
        pre[cur] = dependenciesVersion
      }
    }
    dependenciesFromDemoPath.map((item) => {
      const dependenciesFromFilePrefix = item.split('/')[0]
      const projectDependenciesPrefix = cur.split('/')[0]
      if (projectDependenciesPrefix === dependenciesFromFilePrefix && projectDependenciesPrefix !== '@types') {
        const dependenciesVersion = projectDependencies[cur].replace('^', '')
        pre[cur] = dependenciesVersion
      }
    })
    return pre
  }, {})
  return codeSandBoxDependencies
}

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
  glob.sync(path.join(__dirname, '../../src/pages/')).map((source) => {
    rmdirSync(source, { recursive: true })
  })
  const codesJsonPath = path.join(__dirname, '../../src/codes.json')
  const menuTsPath = path.join(__dirname, '../../src/menu.ts')
  const routerTsxPath = path.join(__dirname, '../../src/router.tsx')
  if (existsSync(codesJsonPath)) rmSync(codesJsonPath)
  if (existsSync(menuTsPath)) rmSync(menuTsPath)
  if (existsSync(routerTsxPath)) rmSync(routerTsxPath)
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

export const getCodeSandBoxParameters = (baseDemoPath) => {
  const demoPath = baseDemoPath + '/**'
  let codesandboxParameters = {
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
          dependencies: {},
        },
      },
    },
  }
  glob.sync(demoPath).map((demoFilePath) => {
    const stat = lstatSync(demoFilePath)
    if (stat.isFile()) {
      const codesandboxFileName = demoFilePath.replace(`${baseDemoPath}/`, '')
      let isBinary = true
      if (codesandboxFileName.includes('/')) isBinary = false
      const codeSandBoxDependencies = getCodeSandBoxDependencies(demoPath)
      codesandboxParameters.files['package.json'].content.dependencies = {
        ...codeSandBoxDependencies,
        'prop-types': 'latest',
      }
      const content = readFileSync(demoFilePath, { encoding: 'utf-8' })
      codesandboxParameters.files[codesandboxFileName] = {
        content: content,
        isBinary,
      }
    }
  })
  codesandboxParameters = compress(JSON.stringify(codesandboxParameters))
  return `https://codesandbox.io/api/v1/sandboxes/define?parameters=${codesandboxParameters}`
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
