/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  // TODO 递归版本
  // BFS
  // 如果是数组存储，就按照 2 的倍数分段

  const result = []
  let currentNodes = []
  let targetNodes = []

  for (
    root && currentNodes.push(root);
    currentNodes.length;
    [currentNodes, targetNodes] = [targetNodes, []]
  ) {
    currentNodes.forEach((node, index) => {
      node.left && targetNodes.push(node.left)
      node.right && targetNodes.push(node.right)

      currentNodes[index] = node.val
    })

    result.push(currentNodes)
  }

  return result.reverse()
};
