/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  if (num < 10) {
      return num;
  }
  const result = num % 9;
  return result || 9;
};
