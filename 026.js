/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  // 其实就是去除相邻重复元素，跟 sorted 没直接关系

  const length = nums.length

  if (length <= 1) {
    return nums
  }

  let index = 0
  let value = nums[index]

  for (let i = 1; i < length; i++) {
    const val = nums[i]
    // 如果是 C/C++，这里应该先攒一波
    // 遇到重复/结尾的时候，才把当前累计区间 memmove 到上一个重复的起始点处
    if (val !== value) {
      value = nums[++index] = val
    }
  }

  return index + 1
};
