/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function getDepth(node) {
  return node
    ? Math.max(getDepth(node.left), getDepth(node.right)) + 1
    : 0
};
