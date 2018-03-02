/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  // 这其实是一道数学题
  // 数根 / 位数根 / 数字根 / Digital root
  // https://en.wikipedia.org/wiki/Digital_root

  if (num < 10) {
      return num;
  }
  const result = num % 9;
  return result || 9;
};
