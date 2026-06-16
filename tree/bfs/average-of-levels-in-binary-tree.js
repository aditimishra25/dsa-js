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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    let res = [];
    bfs(root, 0, res);
    return res.map(([sum, count]) => sum / count);
};

var bfs = (root, level, res) => {
    if (!root) return;

    if (!res[level]) res[level] = [0, 0]; // [sum, count]

    res[level][0] += root.val; // add to sum
    res[level][1] += 1;        // increase count

    bfs(root.left, level + 1, res);
    bfs(root.right, level + 1, res);
};