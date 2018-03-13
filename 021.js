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
var mergeTwoLists = function(l1, l2) {
  // 题目有歧义，没说 merge 后的依然是 sorted
  const TYPE = 5

  // 错误 1：蜘蛛 M 形
  if (TYPE === 1) {

    const root = l1 || l2

    while (l1 || l2) {
      if (l1) {
        ;[l1.next, l1] = [l2, l1.next]
      }
      if (l2) {
        ;[l2.next, l2] = [l1, l2.next]
      }
    }

    return root

  }

  // 错误 2：示波器形
  else if (TYPE === 2) {

    if (!(l1 && l2)) {
      return l2 || l1
    }

    const root = l2

    let current = root
    let head = l1

    while (head && current) {
      ;[current.next, head] = [head, current.next]
      current = current.next.next
    }

    return root

  }

  // 正确 1：链表互切，啰嗦繁琐
  else if (TYPE === 3) {

    if (!(l1 && l2)) {
      return l1 || l2
    }

    let [small, big] = l1.val < l2.val ? [l1, l2] : [l2, l1]
    const root = small

    do {
      while (small.next && small.next.val < big.val) {
        small = small.next
      }
      ;[small.next, small, big] = [big, big, small.next]
    }
    while (big)

    return root

  }

  // 正确 2：新链表，简洁明了
  // TODO 性能优化：类似上面解法 1，找到下一个大小交换点之后再作操作，以减少链表结点的调整数量
  else if (TYPE === 4) {

    const dummy = new ListNode(0)
    let node = dummy

    while (l1 && l2) {
      if (l1.val < l2.val) {
        node.next = l1
        l1 = l1.next
      }
      else {
        node.next = l2
        l2 = l2.next
      }
      node = node.next
    }

    node.next = l1 || l2

    return dummy.next

  }

  // 正确 3：递归。。。
  // TODO 性能优化：类似上面解法 1，找到下一个大小交换点之后再作操作，以减少链表结点的调整数量
  else if (TYPE === 5) {

    const merge = (l1, l2) => {
      if (!(l1 && l2)) {
        return l1 || l2
      }

      if (l1.val < l2.val) {
        l1.next = merge(l1.next, l2)
        return l1
      }
      else {
        l2.next = merge(l2.next, l1)
        return l2
      }
    }

    return merge(l1, l2)

  }

};
