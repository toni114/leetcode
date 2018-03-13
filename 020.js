/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // 重要性能优化点
  if (s.length % 2) {
    return false
  }

  const MAP = {
    ')': '(',
    ']': '[',
    '}': '{'
  }

  const stack = []

  for (let char of s) {
    let c = MAP[char]

    // 不考虑非法字符，相当于 !!~'([{'.indexOf(char)
    if (!c) {
      stack.push(char)
      continue
    }

    // 包括 stack.length === 0 和 非法字符
    if (c !== stack.pop()) {
      return false
    }
  }

  return !stack.length
};
