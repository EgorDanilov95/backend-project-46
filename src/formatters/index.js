import stylish from './stylish.js'
import plain from './plain.js'
import json from './json.js'

/* const format = (data, formatName) => {
  switch (formatName) {
    case 'stylish': return stylish(data)
    case 'plain' : return plain(data)
    case 'json' : return json(data)
    default: throw new Error('Unknown format')
  }
} */

const formatters = {
  stylish,
  plain,
  json,
}

const format = (data, formatName) => {
  const formatter = formatters[formatName]
  if (!formatter) {
    throw new Error(`Unknown format: ${formatName}`)
  }
  return formatter(data)
}
export default format
