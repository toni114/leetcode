// 源文件已丢失…… 有空再补 = =
//
// TODO ListNode Link Tree 与 ListNode[] 之间的转换
// TODO etc
//

// N = a^x  /  N === Math.pow(a, x)
// x = logaN  /  x === log(N) / log(a)
//
// const getA = (x, N) => Math.pow(Math.E, Math.log(N) / x)
// const getA = (x, N) => Math.pow(10, Math.log10(N) / x)
const getA = (x, N) => Math.pow(2, Math.log2(N) / x)
