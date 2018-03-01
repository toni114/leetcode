/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const MIN_INT = 1 << 31
  const MAX_INT = -MIN_INT - 1
  // 偷懒啦……
  const num = +(
    (x < 0 ? '-' : '')
    + x.toString()
      .replace(/^-|0+$/, '')
      .split('')
      .reverse()
      .join('')
  )
  return num >= MIN_INT && num <= MAX_INT
    ? num : 0
};
