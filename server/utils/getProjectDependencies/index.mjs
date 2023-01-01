import path from 'path'
import fs from 'fs'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

const getProjectDependencies = () => {
  let relPath = 'package.json'
  let sourcePackageJson = {}
  let findNumber = 0
  const getPath = (rPath) => path.resolve(process.cwd(), rPath)
  while (!fs.existsSync(getPath(relPath))) {
    findNumber++
    relPath = `../${relPath}`
    if (findNumber === 10) {
      break
    }
  }
  const packageJsonPath = getPath(relPath)
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = require(packageJsonPath)
    sourcePackageJson = { ...packageJson.dependencies, ...packageJson.devDependencies }
  }
  return sourcePackageJson
}

export default getProjectDependencies
