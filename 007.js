/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const IS_AS_STRING = false

  const MIN_INT = 1 << 31
  const MAX_INT = -MIN_INT - 1

  if (IS_AS_STRING) {

    // 偷懒啦…… 直接按字符串处理，用原生接口，还搞类型转换……
    // 题目无聊怪我咯 = =!
    // 单纯的字符串翻转可以参考 Problem 9 (009.js) 反转跟判断回文的方法没啥区别

    // 关于 C/C++
    // 如果是 scanf printf 的话，其实也是能 HACK 的。。。
    // 开个 10 位长度的 buffer 当作 stack，逐字符 push 然后 pop 就好了……
    // 当然 pop 的时候还是有可能要逐字符判断溢出的，
    // 先存个类似 char[] = "2147483647" 啥的就行了……
    // 这里就不实现了

    const num = +(
      (x < 0 ? '-' : '')
      + x.toString()
        .replace(/^-|0+$/g, '')
        .split('')
        .reverse()
        .join('')
    )
    return num >= MIN_INT && num <= MAX_INT
      ? num : 0

  }
  else {

    // 正常的 32 位 signed int 考虑溢出处理方法…… 啰嗦的要死
    // 如果是二进制就可以直接位运算不用管溢出不溢出什么的了……
    // 以下实现兼顾 C/C++ && 性能，迁移成本不大……

    // let length = (num + '').length
    // let length = Math.floor(Math.log10(num) + 1) // unsigned int
    // let length = for 循环……
    //
    // let weight = 1 // 权重

    const isNegative = x < 0

    const MAGIC_GUARD_NUM = Math.floor(MAX_INT / 10)
    const MAGIC_GUARD_DIGIT = MAX_INT % 10 + +isNegative

    if (isNegative) {
      x = -x // 不要一上来就想着 Math.abs...
    }

    let result = 0 // 假设是 signed int

    // 迭代算法；不要一上来就想着，每次从 x 取出第 n 位然后加上去……
    while (x >= 10) {
      const remainder = x % 10 // 负数别乱 mod

      result = result * 10 + remainder

      // x = Math.floor(x / 10) // 正整数取整；别一上来就想着 parseInt(, 10)...
      // 一般来说 减法 + 整除 比 浮点数除法 + 取整 好一点
      // 然而这是 JS，这么干其实没啥意义……
      x = (x - remainder) / 10 // 10 进制右移一位

      // 如果有类似下面这些东西，可能说明你的方法也许可以优化……
      // length++
      // weight *= 10
    }

    // 别一上来就想着逐数字比对…… 纯算术运算可以 O(1) 解决
    if (result > MAGIC_GUARD_NUM
      || result === MAGIC_GUARD_NUM && x > MAGIC_GUARD_DIGIT
    ) {
      return 0
    }

    result = result * 10 + x
    if (isNegative) {
      result = -result
    }

    return result

  }

};
