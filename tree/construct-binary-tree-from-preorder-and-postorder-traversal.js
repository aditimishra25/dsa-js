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

let preIndex = 0;
let map = new Map();

var constructFromPrePost = function(preorder, postorder) {
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