/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  // 高精度加法

  let result = []
  let index = 0
  let carry = 0

  let node1 = l1
  let node2 = l2

  do {
    let val1 = node1 ? node1.val : 0
    let val2 = node2 ? node2.val : 0

    let sum = val1 + val2 + carry
    let value

    if (sum < 10) {
      value = sum
      carry = 0
    }
    else {
      value = sum - 10
      carry = 1
    }

    result.push(value)

    node1 = node1 && node1.next
    node2 = node2 && node2.next
  }
  while (node1 || node2)

  if (carry) {
    result.push(carry)
  }

  return result
};
