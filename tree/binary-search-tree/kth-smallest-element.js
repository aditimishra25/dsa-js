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
 * @param {number} k
 * @return {number}
 */

let count = 0, res = [];
var kthSmallest = function (root, k) {
    count = 0, res = [];
    inorderTraversal(root, k)
    return res[k-1];
};

//inorder traversal =>  get the elemet at that index
var inorderTraversal = (root, k) => {
    if (!root) return null;
    inorderTraversal(root.left, k)
    res.push(root.val)
    count++;
    if (count == k) {
        return res
    }
    inorderTraversal(root.right, k)
}