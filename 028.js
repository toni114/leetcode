/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  const USE_NATIVE = true

  if (USE_NATIVE) {
    // 我又偷懒了……
    return haystack.indexOf(needle)
  }
  else {

    // 这才是正解…… KMP
    // 思路是提前生成当前字符串的特征并缓存起来
    // 每趟匹配结束时根据当前已匹配的字符数通过查表获得当前指针可以往后移动的最大步长
    // 由于每次不只移一步，该算法没有浪费匹配过程中携带的信息
    // 从而避免了每次匹配失败只往后移一步的低效
    //
    // KMP 算法有很多变种貌似？
    //
    // 相关的还有 LCS (这里指 substring!! not subsequence!!)

    // TODO

  }
};
