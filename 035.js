/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  // 经典的二分查找，还顺带解决了插入位置的问题

  let low = 0
  let high = nums.length - 1 // high 可能是 -1

  // 进入前 / 更新 mid 后，先验边界合法性再求值，防止越界
  // mid 不仅用于确认收缩方向，还用于确认最终值，所以这里必须要有 = 以验证更新后的值
  while (low <= high) {
    // mid 要么在中间，要么偏前（区间距离的奇偶数决定）
    // === Math.floor(x / 2)
    const mid = (low + high) >> 1

    const value = nums[mid]

    if (target === value) {
      // 命中者的索引 / 匹配者前面的位置
      return mid
    }

    // 确保每趟查询后区间必定收缩（因而不会陷入死循环）；
    // 若有解，因每次收缩都在正确方向上并且不会越界，最终一定会重合、命中；
    // 若无解，最后一趟边界条件为 low === mid === high / high - 1，
    // 这时候 high 不重要，重要的是目标值如果偏小则 low 不变，否则 +1，恰好对应所需位置
    if (target < value) {
      high = mid - 1 // 404: `<=`  ->  `-1`
    }
    else {
      low = mid + 1 // 404: (`<`  ->)  `=`  ->  `-1`
    }
  }

  return low
};
