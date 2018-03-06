/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  // 想多了。。。做高精度大数计算。。。切片？ TODO
  return (+`0b${a}` + +`0b${b}`).toString(2)
};
