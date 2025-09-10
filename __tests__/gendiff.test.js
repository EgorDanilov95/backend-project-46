import genDiff from '../src/gendiff'
import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)
const readFile = filename => fs.readFileSync(getFixturePath(filename), 'utf-8')

test('json compairison stylish', () => {
  const file1 = getFixturePath('file1.json')
  const file2 = getFixturePath('file2.json')
  const result = genDiff(file1, file2)
  const expected = readFile('expected-Stylish.txt')
  expect(result.trim()).toEqual(expected.trim())
})

test('yaml compairison stylish', () => {
  const file1 = getFixturePath('file1.yaml')
  const file2 = getFixturePath('file2.yaml')
  const result = genDiff(file1, file2)
  const expected = readFile('expected-Stylish.txt')
  expect(result.trim()).toEqual(expected.trim())
})

test('yaml compairison plain', () => {
  const file1 = getFixturePath('file1.yaml')
  const file2 = getFixturePath('file2.yaml')
  const result = genDiff(file1, file2, 'plain')
  const expected = readFile('expected-plain.txt')
  expect(result.trim()).toEqual(expected.trim())
})

test('json compairison plain', () => {
  const file1 = getFixturePath('file1.json')
  const file2 = getFixturePath('file2.json')
  const result = genDiff(file1, file2, 'plain')
  const expected = readFile('expected-plain.txt')
  expect(result.trim()).toEqual(expected.trim())
})
