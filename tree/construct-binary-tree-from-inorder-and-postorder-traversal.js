/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

let postIndex = 0;
let map = new Map();

var buildTree = function (inorder, postorder) {
  postIndex = postorder.length - 1;
  map.clear();

  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  return dfs(postorder, 0, inorder.length - 1);
};

var dfs = (postorder, left, right) => {
  if (left > right) return null;

  let rootVal = postorder[postIndex--];
  let root = new TreeNode(rootVal);
  let mid = map.get(rootVal);

  //first right
  root.right = dfs(postorder, mid + 1, right);

  // then left
  root.left = dfs(postorder, left, mid - 1);

  return root;
};
