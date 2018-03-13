/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let i

  // 直接看是不是 9 然后看要不要变成 0 就行了…… 感觉有点 HACK 但是性能好啊又简洁
  // 如果是 C/C++，甚至还可以直接找到第一个是/不是 9 的位置，然后 memset
  for (i = digits.length - 1; digits[i] === 9; i--) {
    digits[i] = 0
  }

  if (i < 0) {
    // 如果是 C/C++，这一位可以预留，最终返回的时候调整指针位置即可，无需 memcpy / memmove
    digits.unshift(1)
  }
  else {
    digits[i]++
  }

  return digits
};
