var isBalanced = function(root) {
    // Assume tree is balanced initially
    const res = {
        isBalanced: true
    };

    // Calculate heights and update balance status
    getHeight(root, res);

    return res.isBalanced;
};

var getHeight = (root, res) => {
    // Empty tree has height 0
    if (!root) {
        return 0;
    }

    // Get height of left subtree
    const leftHeight = getHeight(root.left, res);

    // Get height of right subtree
    const rightHeight = getHeight(root.right, res);

    // Check if current node is unbalanced
    if (Math.abs(leftHeight - rightHeight) > 1) {
        res.isBalanced = false;
    }

    // Return height of current subtree
    return 1 + Math.max(leftHeight, rightHeight);
};