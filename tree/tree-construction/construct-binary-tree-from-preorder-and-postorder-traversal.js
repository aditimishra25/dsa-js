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
 * @param {number[]} postorder
 * @return {TreeNode}
 */

// Find root from preorder

// Take next preorder value
// ↓
// that's left subtree root

// Find it in postorder
// ↓
// calculate left subtree size

// Use size to split

// *********************
// Root from preorder
// Next preorder value = left subtree root
// Find it in postorder = determine left subtree size

let preIndex = 0;
let map = new Map();

var constructFromPrePost = function (preorder, postorder) {
  map.clear();

  for (let i = 0; i < postorder.length; i++) {
    map.set(postorder[i], i);
  }

  preIndex = 0;

  return dfs(preorder, postorder, 0, postorder.length - 1);
};

function dfs(preorder, postorder, left, right) {
  if (left > right) return null;

  let root = new TreeNode(preorder[preIndex++]);

  // if single node
  if (left === right) return root;

  // next preorder is left child
  let leftChild = preorder[preIndex];

  // find in postorder
  let index = map.get(leftChild);

  // build left subtree
  root.left = dfs(preorder, postorder, left, index);

  // build right subtree
  root.right = dfs(preorder, postorder, index + 1, right - 1);

  return root;
}

// ----------------------revision-1------------------------------------------
let preIndex = 0;
let map = new Map();

var constructFromPrePost = function (preorder, postorder) {
  map.clear();

  for (let i = 0; i < postorder.length; i++) {
    map.set(postorder[i], i);
  }

  preIndex = 0;

  return dfs(preorder, postorder, 0, postorder.length - 1);
};

var dfs = (preorder, postorder, left, right) => {
  if (left > right) return null;

  let rootVal = preorder[preIndex++];
  let root = new TreeNode(rootVal);

  if (left === right) return root;

  let leftChild = preorder[preIndex];

  let index = map.get(leftChild);

  root.left = dfs(preorder, postorder, left, index);
  root.right = dfs(preorder, postorder, index + 1, right - 1);

  return root;
};

// -----------------------revision-2-----------------------------
let postIndex = 0;
let map = new Map();
var constructFromPrePost = function (preorder, postorder) {
  postIndex = 0;
  map.clear();

  for (let i = 0; i < postorder.length; i++) {
    map.set(postorder[i], i);
  }
  return dfs(preorder, postorder, 0, postorder.length - 1);
};

dfs = (preorder, postorder, left, right) => {
  if (left > right) return null;
  let rootVal = preorder[preIndex++];
  let root = new TreeNode(rootVal);

  if (left === right) return root;

  let leftChild = preorder[preIndex];

  let index = map.get(leftChild);

  root.left = dfs(preorder, postorder, left, index);
  root.right = dfs(preorder, postorder, index + 1, right - 1);

  return root;
};
