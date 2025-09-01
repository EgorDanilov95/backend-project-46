import _ from "lodash";

const generateDiffTree = (obj1, obj2) => {
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)
    const allKeys = _.union(keys1,keys2)
    const sortedKeys = _.sortBy(allKeys)
    const diff = []
    for (const key of sortedKeys) {
        if (Object.hasOwn(obj1, key) && !Object.hasOwn(obj2, key)) {
            diff.push({keyName: key, type: 'deleted', value: obj1[key]})
        }
        else if (!Object.hasOwn(obj1, key) && Object.hasOwn(obj2,key)) {
            diff.push({keyName: key , type: 'added', value: obj2[key]})
        }
        else if (obj1[key] === obj2[key]) {
            diff.push({keyName: key, type: 'unchanged', value: obj1[key]})
        }
        else {
            diff.push({keyName: key, type: 'deleted', value: obj1[key]})
            diff.push({keyName: key, type: 'added', value: obj2[key]})
        }
    }
return diff
    
    }

    export default generateDiffTree


