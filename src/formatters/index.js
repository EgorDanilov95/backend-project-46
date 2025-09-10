import stylish from './stylish.js'
import plain from './plain.js'

const format = (data, formatName) => {
  switch (formatName) {
    case 'stylish': return stylish(data)
    case 'plain' : return plain(data)
    default: throw new Error('Unknown format')
  }
}

export default format
