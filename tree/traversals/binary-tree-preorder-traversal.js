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
var preorderTraversal = function (root) {
  let res = [];
  dfs(root, res);
  return res;
};

var dfs = (root, res) => {
  if (!root) return null;

  res.push(root.val);
  dfs(root.left, res);
  dfs(root.right, res);
};

// -------------------revision-1----------------------------
var preorderTraversal = function (root) {
  let res = [];
  dfs(root, res);
  return res;
};

dfs = (node, res) => {
  if (!node) return;

  res.push(node.val);
  dfs(node.left, res);
  dfs(node.right, res);
};
