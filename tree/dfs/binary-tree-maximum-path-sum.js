/**
 * LeetCode 124. Binary Tree Maximum Path Sum
 *
 * A path can start and end at ANY node.
 * The path must be connected through parent-child links.
 * The path cannot branch more than once when moving upward.
 */

var maxPathSum = function(root) {
    // Stores the best path sum found anywhere in the tree
    const result = {
        maxSum: -Infinity
    };

    // Traverse the tree and update result.maxSum
    checkMaxPath(root, result);

    // Return the maximum path sum found
    return result.maxSum;
};

var checkMaxPath = (node, result) => {
    // Null node contributes 0 to the path
    if (!node) {
        return 0;
    }

    // Recursively get the best contribution
    // from the left and right subtrees
    let leftGain = checkMaxPath(node.left, result);
    let rightGain = checkMaxPath(node.right, result);

    // If a subtree contributes a negative value,
    // ignore it by taking 0 instead
    leftGain = Math.max(0, leftGain);
    rightGain = Math.max(0, rightGain);

    // Path that passes through the current node
    //
    //        node
    //       /    \
    //   leftGain rightGain
    //
    // This path can use BOTH left and right sides
    const currentPathSum =
        leftGain + node.val + rightGain;

    // Update the global maximum path sum
    result.maxSum = Math.max(
        result.maxSum,
        currentPathSum
    );

    // Return the best path that can be extended
    // to this node's parent.
    //
    // Parent can only continue through ONE side,
    // so we return:
    //
    // node.val + max(leftGain, rightGain)
    return node.val + Math.max(
        leftGain,
        rightGain
    );
};