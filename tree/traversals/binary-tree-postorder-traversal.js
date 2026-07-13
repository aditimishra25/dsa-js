/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    let res = [];
    dfs(root, res);
    return res;
};

var dfs = (root, res) => {
    if (!root) return null;

    dfs(root.left, res);
    dfs(root.right, res);
    res.push(root.val);
}

// ----------------revision-1---------------
var postorderTraversal = function (root) {
  let result = [];
  dfs(root, result);
  return result;
};

dfs = (node, res) => {
  if (!node) return;

  dfs(node.left, res);
  dfs(node.right, res);
  res.push(node.val);
};