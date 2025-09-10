import genDiff from '../src/gendiff'
import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)
const readFile = filename => fs.readFileSync(getFixturePath(filename), 'utf-8')

describe('gendiff', () => {
  const testCases = [
    {
      name: 'json files with stylish format',
      file1: 'file1.json',
      file2: 'file2.json',
      format: 'stylish',
      expected: 'expected-Stylish.txt',
    },
    {
      name: 'yaml files with stylish format',
      file1: 'file1.yaml',
      file2: 'file2.yaml',
      format: 'stylish',
      expected: 'expected-Stylish.txt',
    },
    {
      name: 'yaml files with plain format',
      file1: 'file1.yaml',
      file2: 'file2.yaml',
      format: 'plain',
      expected: 'expected-plain.txt',
    },
    {
      name: 'json files with plain format',
      file1: 'file1.json',
      file2: 'file2.json',
      format: 'plain',
      expected: 'expected-plain.txt',
    },
    {
      name: 'json files with json format',
      file1: 'file1.json',
      file2: 'file2.json',
      format: 'json',
      expected: 'expected-json.txt',
    },
    {
      name: 'yaml files with json format',
      file1: 'file1.yaml',
      file2: 'file2.yaml',
      format: 'json',
      expected: 'expected-json.txt',
    },
  ]

  test.each(testCases)('$name', ({ file1, file2, format, expected }) => {
    const filePath1 = getFixturePath(file1)
    const filePath2 = getFixturePath(file2)
    const result = genDiff(filePath1, filePath2, format)
    const expectedContent = readFile(expected)
    expect(result.trim()).toEqual(expectedContent.trim())
  })
})
