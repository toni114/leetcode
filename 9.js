/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // 偷懒啦…… 正常应该头尾两个指针同时向中间逼近
  return x + '' === x.toString().split('').reverse().join('')
};
