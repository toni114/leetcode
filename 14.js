/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const length = strs.length

  if (length === 0) {
    return ''
  }

  if (length === 1) {
    return strs[0]
  }

  let current = strs[0]

  for (let i = 1; i < length; i++) {
    const target = strs[i]
    const len = Math.min(current.length, target.length)
    let j

    for (j = 0; j < len; j++) {
      if (current[j] !== target[j]) {
        break
      }
    }

    if (j === 0) {
      return ''
    }

    current = current.slice(0, j)
  }

  return current
};
