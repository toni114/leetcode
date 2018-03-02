/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // 又偷懒啦…… 正常应该是在比较的过程中 skip 掉无效字符
  // 太无聊了不想做…… 可以参考 Problem 9 (009.js)
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  return s === s.split('').reverse().join('')
};
