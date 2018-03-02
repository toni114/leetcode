/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const TYPE = 3

  if (TYPE === 1) {

    // 偷懒啦……
    return x + '' === x.toString().split('').reverse().join('')

  }
  else if (TYPE === 2) {

    // 这方法是头尾两个指针同时向中间逼近，
    // 优势是无须反转，比较次数也少，
    // 实现上跟一趟快排有点儿像；
    // 本来应该适用于数据源类型是字符串的情况
    // 这里就勉为其难地转换伪装一下吧……

    x += ''

    if (x[0] === '-') {
      return false
    }

    let start = -1
    let end = x.length

    for (;++start < --end && x[start] === x[end];) {}

    return start >= end

  }
  else if (TYPE === 3) {

    // 由于数据源是数字，看样子还是 signed int 的人设
    // 纯数字处理看来才是题目原本的正解……
    // 相关的可以参考 Problem 7 (007.js) 这个数字处理更复杂

    if (x < 10) {
      return x >= 0
    }

    if (x % 10 === 0) {
      return false
    }

    let y = 0
    let remainder

    while (y < x) {
      remainder = x % 10
      y = y * 10 + remainder
      x = (x - remainder) / 10 // === parseInt
    }

    return x === y || x === (y - remainder) / 10
  }
};
