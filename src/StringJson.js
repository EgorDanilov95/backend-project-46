

const formatLine = (item) => {
    
  const prefix = {
    deleted: '-',
    added: '+', 
    unchanged: ' '
  }[item.type];
  
  return `  ${prefix} ${item.keyName}: ${item.value}`;
}


const formatDiffString = (diff) => {
    const lines = diff.map(item => formatLine(item))
    return ['{', ...lines, '}'].join('\n')
}

export default formatDiffString