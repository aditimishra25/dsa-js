var goodNodes = function(root) {
    return dfs(root, -Infinity);
};

function dfs(node, maxSoFar) {

    // Reached end of path
    if (!node) {
        return 0;
    }

    // Is current node good?
    let count = 0;

    if (node.val >= maxSoFar) {
        count = 1;
    }

    // Update maximum seen on current path
    maxSoFar = Math.max(maxSoFar, node.val);

    // Count good nodes in left and right subtrees
    count += dfs(node.left, maxSoFar);
    count += dfs(node.right, maxSoFar);

    return count;
}