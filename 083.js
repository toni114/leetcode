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
  const USE_MAYBE_BETTER_VERSION = false

  if (USE_MAYBE_BETTER_VERSION) {

    // 两层循环虽然略显啰嗦，但是重复率高的话也许有些许性能优势。。？

    let node = head

    while (node) {
      const start = node
      const value = node.val

      do {
        node = node.next
      }
      while (node && node.val === value)

      start.next = node
    }

    return head

  }
  else {

    // 最简单的方法

    let node = head

    while (node) {
      const next = node.next
      if (next && next.val === node.val) {
        node.next = next.next
      }
      else {
        node = node.next
      }
    }

    return head

  }
};
