/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
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

    if (!c) {
      stack.push(char)
      continue
    }

    if (!stack.length) {
      return false
    }

    if (c !== stack.pop()) {
      return false
    }
  }

  return !stack.length
};
