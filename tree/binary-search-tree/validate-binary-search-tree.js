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
 * @return {boolean}
 */
var isValidBST = function (root) {
    return validCheck(root, -Infinity, Infinity)
};

var validCheck = (node, min, max) => {
    if (!node) return true;
    if (node.val <= min || node.val >= max) {
        return false;
    }
    return validCheck(node.left, min, node.val) && validCheck(node.right, node.val, max)
}

// ----------------------------------------revision-1-------------------------------------------
var isValidBST = function(root) {
    return validCheck(root, -Infinity, Infinity);
};

function validCheck(root, min, max){
    if(!root) return true;

    if(root.val <= min || root.val >= max) return false;

    return validCheck(root.left, min, root.val) && validCheck(root.right, root.val, max)
}