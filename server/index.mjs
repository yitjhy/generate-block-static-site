import { fromMarkdown } from 'mdast-util-from-markdown'
import { readFileSync, rmSync, writeFileSync } from 'fs'
import glob from 'glob'
// import chokidar from 'chokidar'
import pkg from 'fs-extra'
import path from 'path'
import url from 'url'
import ora from 'ora'
import child_process from 'child_process'
import {
  getBlockIndexTsxTemplate,
  getIntroductionMdStr,
  getMenuData,
  getRouterTemplate,
  rm,
  ToUpperCase,
  getCodeSandBoxParameters,
  getAllDemoCodes,
} from './utils/index.mjs'

const { copySync } = pkg
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const transform = () => {
  const highlightCodeData = {}
  const codeBlockNames = []
  const codeSandBoxParameters = {}
  const allDemoCodes = {}
  glob.sync(path.join(__dirname, '../src/pages/**')).map((file) => {
    const fileName = file.split('/').reverse()[0].split('.')[0]
    const parentFileName = file.split('/').reverse()[1]
    const blockName = file.split('/').reverse()[2]
    if (parentFileName === 'demo' && fileName === 'demo') {
      const baseDemoPath = file.split('/').reverse().slice(1).reverse().join('/')
      if (!codeSandBoxParameters[blockName]) {
        codeSandBoxParameters[blockName] = getCodeSandBoxParameters(baseDemoPath)
      }
      if (!allDemoCodes[blockName]) {
        allDemoCodes[blockName] = getAllDemoCodes(baseDemoPath)
      }
      const componentName = `${blockName}${ToUpperCase(fileName)}`
      const demoTsxPath = path.join(__dirname, `../src/pages/${blockName}/demo/demo.tsx`)
      highlightCodeData[componentName] = readFileSync(demoTsxPath, { encoding: 'utf-8' })
      const introductionMdStr = getIntroductionMdStr(blockName)
      const tsxCode = getBlockIndexTsxTemplate(
        introductionMdStr,
        `import ${ToUpperCase(componentName)} from './demo/demo';`,
        `<Template codeSandBoxParameter={'${codeSandBoxParameters[blockName]}'} 
                                allCodes={allDemoCodes['${blockName}']}
                      >
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
  // writeFileSync(path.join(__dirname, '../src/codes.json'), JSON.stringify(highlightCodeData))
  writeFileSync(path.join(__dirname, '../src/allDemoCodes.json'), JSON.stringify(allDemoCodes))
  writeFileSync(path.join(__dirname, '../src/router.tsx'), getRouterTemplate(codeBlockNames), 'utf-8')
  const menuData = getMenuData(codeBlockNames)
  writeFileSync(
    path.join(__dirname, '../src/menu.ts'),
    `const menuData = ${JSON.stringify(menuData)}; export default menuData`,
    'utf-8'
  )
}

const start = () => {
  let transformSpinner = ora({ text: `转换中...`, color: 'red', isEnabled: true }).start()
  rm()
  copySync(path.join(__dirname, '../docs/'), path.join(__dirname, `../src/pages`), {
    overwrite: true,
  })
  transform()
  glob.sync(path.join(__dirname, '../src/pages/**/*.md')).map((source) => {
    rmSync(source)
  })
  transformSpinner.succeed('转换完成')
  let codeFormatSpinner = ora({ text: `代码格式化中...`, color: 'red', isEnabled: true }).start()
  child_process.execSync('prettier --write ./**/**/*.{mjs,css,js,json,ts,tsx} ./**/*.{mjs,css,js,json,ts,tsx}')
  codeFormatSpinner.succeed('格式化完成')
}

start()

// const watcher = chokidar.watch(path.join(__dirname, '../docs'), {
//   ignoreInitial: true,
// })
// watcher.on('change', () => {
//   console.log('update')
//   start()
// })
