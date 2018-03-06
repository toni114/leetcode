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
    // 相关的还有 LCS (这里指 substring!! not subsequence!!)
    // TODO

  }
};
