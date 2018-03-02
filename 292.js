/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
  // 这其实是一道数学题
  // Nim 是一个源于 China 的系列问题……
  // https://en.wikipedia.org/wiki/Nim

  return n % 4 !== 0
};
