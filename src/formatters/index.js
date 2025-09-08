import stylish from './stylish.js'

const format = (data, formatName) => {
  switch (formatName) {
    case 'stylish': return stylish(data)
    default: throw new Error('Unknown format')
  }
}

export default format
