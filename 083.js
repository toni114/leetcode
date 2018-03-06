/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let node = head

  while (node) {
    const start = node
    const value = node.val

    // 两层循环虽然略显啰嗦，但是重复率高的话也许有些许性能优势。。？
    do {
      node = node.next
    }
    while (node && node.val === value)

    start.next = node
  }

  return head
};
