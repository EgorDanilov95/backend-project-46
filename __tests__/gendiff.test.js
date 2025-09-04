import genDiff from '../src/gendiff'
import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)
const readFile = filename => fs.readFileSync(getFixturePath(filename), 'utf-8')

test('flat-files-json compairison', () => {
  const file1 = getFixturePath('file1.json')
  const file2 = getFixturePath('file2.json')
  const result = genDiff(file1, file2)
  const expected = readFile('expected-Compair.txt')
  expect(result.trim()).toEqual(expected.trim())
})

test('flat-files-yaml compairison', () => {
  const file1 = getFixturePath('file1.yaml')
  const file2 = getFixturePath('file2.yaml')
  const result = genDiff(file1, file2)
  const expected = readFile('expected-Compair.txt')
  expect(result.trim()).toEqual(expected.trim())
})
