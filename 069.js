/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  // TODO 这算是做了吗……
  // 使用 magic number 快速开方…… or 针对只有一位有效数字用二分法逼近 or 简单牛顿插值？
  return Math.trunc(Math.sqrt(x))
};
