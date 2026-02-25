/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (!p && !q) return true; // Base case: if both trees are null, they are identical
    if (!p || !q || p.val != q.val) return false;  // If only one tree is null or the values are different, they are not identical

    // Recursively check if the left and right subtrees are identical
    let compLeft = isSameTree(p.left, q.left);
    let compRight = isSameTree(p.right, q.right);

    return compLeft && compRight;
};