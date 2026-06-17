/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 **/

// Preorder:
// Root Left Right

// Read root first

// Build:
// Left first
// Right second

let preIndex = 0;
let map = new Map();

var buildTree = function (preorder, inorder) {
  // reset for safety (important if reused)
  preIndex = 0;
  map.clear();

  // build hashmap (value → index in inorder)
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  return dfs(preorder, 0, inorder.length - 1);
};

function dfs(preorder, left, right) {
  // base case
  if (left > right) return null;

  // pick root from preorder
  let rootVal = preorder[preIndex++];
  let root = new TreeNode(rootVal);

  // find root index in inorder
  let mid = map.get(rootVal);

  // build left subtree
  root.left = dfs(preorder, left, mid - 1);

  // build right subtree
  root.right = dfs(preorder, mid + 1, right);

  return root;
}

// --------------------------revision-1----------------------------------------

let preIndex = 0;
let map = new Map();
var buildTree = function (preorder, inorder) {
  preIndex = 0;
  map.clear();

  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  return dfs(preorder, 0, inorder.length - 1);
};

var dfs = (preorder, left, right) => {
  if (left > right) return null;

  let rootVal = preorder[preIndex++];
  let root = new TreeNode(rootVal);

  let mid = map.get(rootVal);

  root.left = dfs(preorder, left, mid - 1);
  root.right = dfs(preorder, mid + 1, right);
  return root;
};
