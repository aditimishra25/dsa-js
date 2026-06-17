/**
 * Definition for a binary tree node.
 *
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * Converts a binary tree into a string.
 *
 * Example:
 *
 *      1
 *     / \
 *    2   3
 *
 * Serialized:
 * "1,2,N,N,3,N,N"
 */
var serialize = function(root) {
    let result = [];

    // Perform preorder traversal
    serializeDFS(root, result);

    // Convert array into string
    return result.join(",");
};

/**
 * Preorder traversal:
 * Root -> Left -> Right
 *
 * Store "N" for null nodes so that
 * the tree structure is preserved.
 */
var serializeDFS = (node, result) => {
    // Null node
    if (!node) {
        result.push("N");
        return;
    }

    // Store current node value
    result.push(node.val);

    // Serialize left subtree
    serializeDFS(node.left, result);

    // Serialize right subtree
    serializeDFS(node.right, result);
};

/**
 * Converts a serialized string back into a tree.
 */
var deserialize = function(data) {
    let values = data.split(",");

    // Shared pointer used during recursion
    let state = {
        index: 0
    };

    return deserializeDFS(values, state);
};

/**
 * Rebuild tree using preorder data.
 *
 * Example:
 *
 * values =
 * [1,2,N,N,3,N,N]
 *
 * Read values one by one.
 */
var deserializeDFS = (values, state) => {
    // Current value being processed
    let value = values[state.index];

    // Move pointer forward
    state.index++;

    // Null node
    if (value === "N") {
        return null;
    }

    // Create current node
    let node = new TreeNode(Number(value));

    // Build left subtree
    node.left = deserializeDFS(values, state);

    // Build right subtree
    node.right = deserializeDFS(values, state);

    return node;
};