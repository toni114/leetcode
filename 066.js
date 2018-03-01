/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let i

  for (i = digits.length - 1; digits[i] === 9; i--) {
    digits[i] = 0
  }

  if (i < 0) {
    digits.unshift(1)
  }
  else {
    digits[i]++
  }

  return digits
};
