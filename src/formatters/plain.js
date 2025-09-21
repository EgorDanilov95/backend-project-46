import _ from 'lodash'

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
      `Property '${path}' was added with value: ${getAnswer(currentValue.value)}`,
    removed: (currentValue, path) =>
      `Property '${path}' was removed`,
    updated: (currentValue, path) =>
      `Property '${path}' was updated. From ${getAnswer(currentValue.oldValue)} to ${getAnswer(currentValue.newValue)}`,
    unchanged: () => null,
    nested: (currentValue, path, currentPathArray) => {
      const childrenResults = currentValue.children
        .map(child => iter(child, currentPathArray))
        .filter(Boolean)
      return childrenResults.join('\n')
    },
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

  const resultArray = objects
    .map(object => iter(object, []))
    .filter(Boolean)
  return resultArray.join('\n')
}

export default plain
