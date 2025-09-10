#!/usr/bin/env node
import { Command } from 'commander'
import gendiff from '../src/gendiff.js'
const program = new Command()
program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format <type>', 'output format(stylish, json, plain)', 'stylish')
  .action((filepath1, filepath2) => {
    const option = program.opts()
    const result = gendiff(filepath1, filepath2, option.format)
    console.log(result)
  })
program.parse()
