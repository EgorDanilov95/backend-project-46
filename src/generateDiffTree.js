import _ from 'lodash'

const generateDiffTree = (obj1, obj2) => {
  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)
  const allKeys = _.union(keys1, keys2)
  const sortedKeys = _.sortBy(allKeys)
  const diff = sortedKeys.map((key) => {
    if (Object.hasOwn(obj1, key) && !Object.hasOwn(obj2, key)) {
      return { keyName: key, type: 'removed', value: obj1[key] }
    }

    if (!Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
      return { keyName: key, type: 'added', value: obj2[key] }
    }

    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      const children = generateDiffTree(obj1[key], obj2[key])
      return {
        keyName: key,
        type: 'nested',
        children: children,
      }
    }
    if (obj1[key] !== obj2[key]) {
      return {
        keyName: key,
        type: 'updated',
        oldValue: obj1[key],
        newValue: obj2[key],
      }
    }
    return { keyName: key, type: 'unchanged', value: obj1[key] }
  })
  return diff
}
export default generateDiffTree
