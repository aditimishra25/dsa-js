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

// -------------------revision-1--------------------
var kthSmallest = function(root, k) {

    // Stores inorder traversal
    let res = [];

    // BST inorder traversal gives sorted order
    inorderTraversal(root, res);

    // k is 1-indexed, array is 0-indexed
    return res[k - 1];
};

function inorderTraversal(root, res) {

    // Base case
    if (!root) return;

    // Left
    inorderTraversal(root.left, res);

    // Root
    res.push(root.val);

    // Right
    inorderTraversal(root.right, res);
}
kthSmallest([3,1,4,null,2], 1)

// --------------------revision-2----------------------
var kthSmallest = function(root, k) {
    let res = [];
    inorderTraversal(root, res);
    return res[k-1]
}

var inorderTraversal = (root, res) =>{
    if(!root) return;

    inorderTraversal(root.left, res)
    res.push(root.val)
    inorderTraversal(root.right, res)
}