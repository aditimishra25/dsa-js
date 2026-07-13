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
var inorderTraversal = function (root) {
  let result = [];
  dfs(root, result);
  return result;
};

function dfs(node, res) {
  if (!node) return;

  dfs(node.left, res); //visit left subtree
  res.push(node.val); // process root node
  dfs(node.right, res); // visit right subtree
}

// -----------------revision-1--------------------------
var inorderTraversal = function (root) {
  let result = [];
  dfs(root, result);
  return result;
};

dfs = (node, res) => {
  if (!node) return;

  dfs(node.left, res);
  res.push(node.val);
  dfs(node.right, res);
};
