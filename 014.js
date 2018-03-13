/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // TODO 是不是一开始把长度较短的字符串找出来作为比较基准性能会好些？
  //      或者用随机数做优化
  // TODO k-common substring problem

  const length = strs.length

  if (length < 2) {
    return strs[0] || ''
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

    // 提前结束
    if (j === 0) {
      return ''
    }

    // reduce，优化关键
    current = current.slice(0, j)
  }

  return current
};
