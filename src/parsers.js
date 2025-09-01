import yaml from 'js-yaml'

const parser = (data, format) => {
  if (format === '.yaml' || format === '.yml') {
    return yaml.load(data, 'utf-8')
  }
  return JSON.parse(data)
}

export default parser
