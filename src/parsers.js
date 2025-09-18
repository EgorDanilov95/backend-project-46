import yaml from 'js-yaml'

/* const parser = (data, format) => {
  if (format === '.yaml' || format === '.yml') {
    return yaml.load(data, 'utf-8')
  }
  return JSON.parse(data)
}
export default parser */

const mapping = {
  yml: yaml.load,
  yaml: yaml.load,
  json: JSON.parse,
}
const parser = (data, format) => {
  return mapping[format](data)
}

export default parser
