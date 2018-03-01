/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function f(node, sum, rest = node && sum - node.val) {
  return node
    ? (node.left || node.right
      ? (!!node.left && f(node.left, rest)
        || !!node.right && f(node.right, rest)
      )
      : rest === 0
    )
    : false
};
