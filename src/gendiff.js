import fs from 'fs'
import path from 'path'
import parser from './parsers.js'
import generateDiffTree from './generateDiffTree.js'
import formatDiffString from './StringJson.js'

const genDiff = (filepath1, filepath2) => {
  const data1 = fs.readFileSync(filepath1, 'utf-8')
  const data2 = fs.readFileSync(filepath2, 'utf-8')
  const format1 = path.extname(filepath1)
  const format2 = path.extname(filepath2)

  const obj1 = parser(data1, format1)
  const obj2 = parser(data2, format2)

  const diffTree = generateDiffTree(obj1, obj2)
  return formatDiffString(diffTree)
}

export default genDiff
