/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const IS_SLOW_VERSION = false

  if (IS_SLOW_VERSION) {

    // 这算偷懒？可是题目就是这么无聊…… 可惜性能不行啊
    const str = /[\w]+(?=\s*$)/.exec(s)
    return str ? str[0].length : 0

  }
  else {

    // C/C++ 倒是可以每次 getch，然后记住最后两段连续空白符/末尾的位置作差即可
    // 那样有点麻烦，不实现了

    let pos

    for (pos = s.length; pos-- && s[pos] === ' ';);

    if (pos < 0) {
      return 0
    }

    const end = pos

    for (; pos-- && s[pos] !== ' ';);

    return pos < 0 ? end + 1 : end - pos

  }
};
