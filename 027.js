/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  // 有点儿像快排的一趟排序…

  const TYPE = 2

  if (TYPE === 1) {

    let i = 0
    let n = nums.length

    while (i < n) {
      // 这种解法虽然简洁，但是有个小“瑕疵”
      // 就是这里可能会有多次无效交换，因为有可能 nums[--n] 也 === val
      if (nums[i] === val) {
        nums[i] = nums[--n]
      }
      else {
        i++
      }
    }

    return n

  }
  else if (TYPE === 2) {

    let p = 0
    let q = nums.length - 1

    while (p < q) {
      while (nums[p] !== val && p < q) {
        p++
      }
      while (nums[q] === val && p < q) {
        q--
      }
      ;[nums[p], nums[q]] = [nums[q], nums[p]]
    }

    return nums[p] === val ? p : p + 1

  }
};
