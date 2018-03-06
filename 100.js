/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function f(p, q) {
  return p && q
    ? p.val === q.val && f(p.left, q.left) && f(p.right, q.right)
    : !p && !q
};
