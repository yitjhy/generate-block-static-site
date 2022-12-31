import { fromMarkdown } from 'mdast-util-from-markdown'
import { readFileSync, rmSync, writeFileSync, lstatSync } from 'fs'
import glob from 'glob'
// import chokidar from 'chokidar'
import pkg from 'fs-extra'
import path from 'path'
import url from 'url'
import {
  getBlockIndexTsxTemplate,
  getIntroductionMdStr,
  getMenuData,
  getRouterTemplate,
  rm,
  ToUpperCase,
} from './utils/index.mjs'

const { copySync } = pkg
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

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

const transform = () => {
  const highlightCodeData = {}
  const codeBlockNames = []
  glob(path.join(__dirname, '../src/pages/**'), (err, files) => {
    files.forEach((file) => {
      const fileName = file.split('/').reverse()[0].split('.')[0]
      const parentFileName = file.split('/').reverse()[1]
      const blockName = file.split('/').reverse()[2]
      if (parentFileName === 'demo' && fileName === 'demo') {
        const baseDemoPath = file.split('/').reverse().slice(1).reverse().join('/')
        const demoPath = baseDemoPath + '/**'
        glob(demoPath, (err, demoFiles) => {
          const parameters = {
            files: {
              'index.tsx': indexTsxCode,
              'index.html': htmlCode,
              'package.json': {
                content: {
                  dependencies: {
                    react: 'latest',
                    'react-dom': 'latest',
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
          const dependencies = []
          demoFiles.forEach((demoFile) => {
            const stat = lstatSync(demoFile)
            if (stat.isFile()) {
              const codesandboxFileName = demoFile.replace(`${baseDemoPath}/`, '')
              readFileSync(demoFile, { encoding: 'utf-8' })
              let isBinary = true
              if (codesandboxFileName.includes('/')) isBinary = false
              const extensionName = demoFile.split('/').reverse()[0].split('.').reverse()[0]
              const parseExtensionNames = ['jsx', 'tsx', 'js', 'ts']
              if (parseExtensionNames.includes(extensionName)) {
                // TODO 收集依赖
                const getDependencies = () => {
                  console.log(extensionName)
                  console.log(dependencies)
                }
                getDependencies()
              }
              parameters.files[codesandboxFileName] = {
                content: readFileSync(demoFile, { encoding: 'utf-8' }),
                isBinary,
              }
            }
          })
          console.log(parameters)
        })

        const componentName = `${blockName}${ToUpperCase(fileName)}`
        const demoTsxPath = path.join(__dirname, `../src/pages/${blockName}/demo/demo.tsx`)
        highlightCodeData[componentName] = readFileSync(demoTsxPath, { encoding: 'utf-8' })

        const introductionMdStr = getIntroductionMdStr(blockName)
        const tsxCode = getBlockIndexTsxTemplate(
          introductionMdStr,
          `import ${ToUpperCase(componentName)} from './demo/demo'; \n`,
          `<Template code={codes['${componentName}']} >
            <${ToUpperCase(componentName)} />
          </Template>`
        )
        writeFileSync(path.join(__dirname, `../src/pages/${blockName}/index.tsx`), tsxCode)

        const introductionAst = fromMarkdown(introductionMdStr)
        const res = introductionAst.children.find((item) => item.type === 'heading' && item.depth === 1)
        codeBlockNames.push({
          blockName: blockName,
          menuName: res?.children[0]?.value || blockName,
        })
      }
    })
    writeFileSync(path.join(__dirname, '../src/codes.json'), JSON.stringify(highlightCodeData))
    writeFileSync(path.join(__dirname, '../src/router.tsx'), getRouterTemplate(codeBlockNames), 'utf-8')
    const menuData = getMenuData(codeBlockNames)
    writeFileSync(
      path.join(__dirname, '../src/menu.ts'),
      `const menuData = ${JSON.stringify(menuData)}; export default menuData`,
      'utf-8'
    )
  })
}

rm()
glob(path.join(__dirname, '../docs/'), (err, files) => {
  files.forEach((source) => {
    copySync(source, path.join(__dirname, `../src/pages`), {
      overwrite: true,
    })
  })
  transform()
  glob(path.join(__dirname, '../src/pages/**/*.md'), (err, files) => {
    files.forEach((source) => {
      rmSync(source)
    })
  })
})

// glob(path.join(__dirname, '../docs/**/demo/'), (err, files) => {
//   files.forEach((source) => {
//     const folderName = source.split('/').reverse()[2]
//     copySync(source, path.join(__dirname, `../src/pages/${folderName}/demo`), {
//       overwrite: true,
//     })
//   })
// // TODO 监听这里有点问题,后续更改
// const watcher = chokidar.watch(path.join(__dirname, '../docs'), {
//     ignoreInitial: true,
// });
// watcher.on('change', () => {
//     console.log('update');
//     transform()
// });
// transform()
// })
