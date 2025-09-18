import _ from 'lodash'

/* const plain = (objects) => {
  const getAnswer = (value) => {
    if (_.isObject(value)) {
      return '[complex value]'
    }
    if (_.isString(value)) {
      return `'${value}'`
    }
    return value
  }

  const iter = (currentValue, pathArray) => {
    const currentPathArray = [...pathArray, currentValue.keyName]
    const path = currentPathArray.join('.')

    switch (currentValue.type) {
      case 'added': return [`Property '${path}' was ${currentValue.type} with value: ${getAnswer(currentValue.value)}`]
      case 'removed': return [`Property '${path}' was ${currentValue.type}`]
      case 'updated': return [`Property '${path}' was ${currentValue.type}. From ${getAnswer(currentValue.oldValue)} to ${getAnswer(currentValue.newValue)}`]
      case 'unchanged': return []
      case 'nested': return currentValue.children.flatMap(child => iter(child, currentPathArray))
      default: throw Error('unknown type')
    }
  }
  const resultArray = objects.flatMap(object => iter(object, []))
  return resultArray.join('\n')
}

export default plain */

const plain = (objects) => {
  const getAnswer = (value) => {
    if (_.isObject(value)) {
      return '[complex value]'
    }
    if (_.isString(value)) {
      return `'${value}'`
    }
    return value
  }

  const actionMap = {
    added: (currentValue, path) =>
      [`Property '${path}' was added with value: ${getAnswer(currentValue.value)}`],

    removed: (currentValue, path) =>
      [`Property '${path}' was removed`],

    updated: (currentValue, path) =>
      [`Property '${path}' was updated. From ${getAnswer(currentValue.oldValue)} to ${getAnswer(currentValue.newValue)}`],

    unchanged: () => [],

    nested: (currentValue, path, currentPathArray) =>
      currentValue.children.flatMap(child => iter(child, currentPathArray)),
  }

  const iter = (currentValue, pathArray) => {
    const currentPathArray = [...pathArray, currentValue.keyName]
    const path = currentPathArray.join('.')

    const action = actionMap[currentValue.type]
    if (!action) {
      throw Error(`Unknown type: ${currentValue.type}`)
    }

    return action(currentValue, path, currentPathArray)
  }

  const resultArray = objects.flatMap(object => iter(object, []))
  return resultArray.join('\n')
}

export default plain
