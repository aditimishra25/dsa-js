/**
 * LeetCode 103 - Binary Tree Zigzag Level Order Traversal
 *
 * Even levels:
 * Left -> Right
 *
 * Odd levels:
 * Right -> Left
 */

var zigzagLevelOrder = function(root) {
    // Empty tree
    if (!root) {
        return [];
    }

    let result = [];

    // Standard BFS queue
    let queue = [root];

    // Direction flag
    let leftToRight = true;

    while (queue.length) {

        // Number of nodes in current level
        let queueSize = queue.length;

        let level = [];

        // Process exactly one level
        for (let i = 0; i < queueSize; i++) {

            let node = queue.shift();

            // Normal direction
            if (leftToRight) {
                level.push(node.val);
            }
            // Reverse direction
            else {
                level.unshift(node.val);
            }

            // Add children for next level
            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        // Save current level
        result.push(level);

        // Flip direction for next level
        leftToRight = !leftToRight;
    }

    return result;
};