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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let diameter = 0;

    var dfs = (node) => {
        if (!node) return 0;

        let left = dfs(node.left);
        let right = dfs(node.right);

        // update diameter
        diameter = Math.max(diameter, left + right);

        // return height
        return 1 + Math.max(left, right);
    };

    dfs(root);

    return diameter;
};

// ------------revision-1------------------------
var diameterOfBinaryTree = function(root) {
    let result = {
        diameter: 0
    };

    dfs(root, result);

    return result.diameter;
};

function dfs(node, result) {
    if (!node) return 0;

    let leftHeight = dfs(node.left, result);
    let rightHeight = dfs(node.right, result);

    result.diameter = Math.max(
        result.diameter,
        leftHeight + rightHeight
    );

    return 1 + Math.max(leftHeight, rightHeight);
}