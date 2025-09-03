import genDiff from '../src/gendiff'
import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import { dirname } from 'path'


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename)
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('flat-files compairison', () => {
    const file1 = getFixturePath('file1.json')
    const file2 = getFixturePath('file2.json')
    const result = genDiff(file1, file2)
    const expected = readFile('expected-jsonCompair.txt')
    expect(result.trim()).toEqual(expected.trim())
})
