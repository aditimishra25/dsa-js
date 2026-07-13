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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // Base case: if the current node is null, there is nothing to invert, so return null.
  if (!root) return null;

  // Swap: perform a simultaneous swap of the left and right child nodes.
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  // Recursively call the function on the left child, which is now the original right child.
  invertTree(root.left);
  // Recursively call the function on the right child, which is now the original left child.
  invertTree(root.right);

  // Return the inverted root node.
  return root;
};

// ---------------------revision-1---------------------------------
var invertTree = function (root) {
  if (!root) return null;

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};

// ----------------------revision-2--------------------------------
var invertTree = function (root) {
  if (!root) return null;

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);
  return root;
};
