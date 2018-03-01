/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const length = nums.length

  if (length <= 1) {
    return nums
  }

  let index = 0
  let value = nums[index]

  for (let i = 1; i < length; i++) {
    const val = nums[i]
    if (val !== value) {
      value = nums[++index] = val
    }
  }

  return index + 1
};
