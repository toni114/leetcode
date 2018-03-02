/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const USE_SLOW_VERSION = false

  // for 循环版本就不写了…… 唯一的注意点就是只需遍历矩阵倒三角并且不包括对角线

  if (USE_SLOW_VERSION) {

    const sort = (x, y) => x - y
    const arr = nums.slice().sort(sort)

    // 用递归写可能会比较清晰，反正是尾递归
    // 有点儿像快排的一趟排序……

    let i = 0
    let j = arr.length - 1
    let x = arr[i]
    let y = arr[j]
    let sum

    while (i < j) {
      let sum = x + y

      if (sum === target) {
        // lastIndexOf：万一两个数恰好相等……
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

    // 这其实算是经典的背包问题的简单特例吧…… 请查《背包九讲》
    //
    // 按背包来，可以这样
    // f(pos, count, sum) =
    //   f(pos - 1, count - 1, sum - nums[pos])
    //   || f(pos - 1, count, sum)
    // 然后求 f(nums.length, 2, target)
    //
    // 然后从双向搜索的角度考虑：
    // count <= 2，因此两个方向的步长都是 1，
    // 每遍历一个结点，都可以同时得到两边的搜索结果，
    // 这时候只需要存其中一边（一个方向）的结果，另外一边（另一个方向）直接计算出来即可，
    // 这是只有“两个东西”的时候才能做的特殊优化。
    //
    // 具体的说就是：
    // 其中一边是中间结果，可以抛弃，目的只是为了产生另外一边的结果；
    // 这个结果可以用集合存起来，以供快速查询所需边；
    // 每遍历到一个结点，可以 O(1) 地产生另外一边的结果，
    // 并且 O(1) 地检验该边是否已在所需边集合里，
    // 如果不在还可以 O(1) 地添加到边集里（如果在就结束了），
    // 也就是退化成如下的简单的递推算法：

    const map = {}
    for (let index = nums.length; index--;) {
      const value = nums[index] // O(1) 产生边 1/2
      const minus = target - value // O(1) 产生边 2/2
      if (map.hasOwnProperty(minus)) { // O(1) 检验
        return [index, map[minus]]
      }
      map[value] = index // O(1) 更新边集合
    }

  }
};
