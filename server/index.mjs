import { fromMarkdown } from 'mdast-util-from-markdown'
import { existsSync, readFileSync, writeFileSync, rmSync } from 'fs'
import glob from 'glob'
// import chokidar from 'chokidar'
import pkg from 'fs-extra'
import path from 'path'
import url from 'url'
import { getMenuData, ToUpperCase, getBlockIndexTsxTemplate, getRouterTemplate } from './utils/index.mjs'

const { copySync } = pkg
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const transform = () => {
  const highlightCodeData = {}
  const codeBlockNames = []
  glob(path.join(__dirname, '../src/pages/**/*.md'), (err, files) => {
    files.forEach((file) => {
      const fileName = file.split('/').reverse()[0].split('.')[0]
      const parentFileName = file.split('/').reverse()[1]
      const codeBlockFolderName = file.split('/').reverse()[2]
      if (parentFileName === 'demo') {
        // 正常运行
        const componentName = `${codeBlockFolderName}${ToUpperCase(fileName)}`
        const mdString = readFileSync(file, { encoding: 'utf-8' })
        const mdAst = fromMarkdown(mdString)
        const jsxCode = mdAst.children.find((item) => item.type === 'code').value
        if (fileName === 'index') {
          writeFileSync(path.join(__dirname, `../src/pages/${codeBlockFolderName}/demo/demo.tsx`), jsxCode)
        }
        highlightCodeData[componentName] = jsxCode
        // 获取 [block]/README.md 信息 start
        let introductionMdStr = ''
        if (existsSync(path.join(__dirname, `../docs/${codeBlockFolderName}/README.md`))) {
          introductionMdStr = readFileSync(path.join(__dirname, `../docs/${codeBlockFolderName}/README.md`), {
            encoding: 'utf-8',
          })
          // 转义
          introductionMdStr = introductionMdStr.replace(/`/g, '\\`').replace(/{/g, '\\{')
        }
        // 获取 [block]/README.md 信息 end

        const tsxCode = getBlockIndexTsxTemplate(
          introductionMdStr,
          `import ${ToUpperCase(componentName)} from './demo/demo'; \n`,
          `<Template code={codes['${componentName}']} >
            <${ToUpperCase(componentName)} />
          </Template>`
        )
        writeFileSync(path.join(__dirname, `../src/pages/${codeBlockFolderName}/index.tsx`), tsxCode)

        const blockName = file.split('/').reverse()[2]
        const mdAst2 = fromMarkdown(introductionMdStr)
        const res = mdAst2.children.find((item) => item.type === 'heading' && item.depth === 1)
        codeBlockNames.push({
          blockName,
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
//   // TODO 监听这里有点问题,后续更改
//   // const watcher = chokidar.watch(path.join(__dirname, '../docs'), {
//   //     ignoreInitial: true,
//   // });
//   // watcher.on('change', () => {
//   //     console.log('update');
//   //     transform()
//   // });
//   transform()
// })
