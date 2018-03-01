/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const USE_SLOW_VERSION = false

  // for 循环版本就不写了……

  if (USE_SLOW_VERSION) {

    const sort = (x, y) => x - y
    const arr = nums.slice().sort(sort)

    let i = 0
    let j = arr.length - 1
    let x = arr[i]
    let y = arr[j]
    let sum

    while (i < j) {
      let sum = x + y

      if (sum === target) {
        return [nums.indexOf(x), nums.lastIndexOf(y)].sort(sort)
      }

      if (sum < target) {
        x = arr[++i]
      }
      else {
        y = arr[--j]
      }
    }

  }
  else {

    const map = {}
    for (let index = nums.length; index--;) {
      const value = nums[index]
      const minus = target - value
      if (map.hasOwnProperty(minus)) {
        return [index, map[minus]]
      }
      map[value] = index
    }

  }
};
