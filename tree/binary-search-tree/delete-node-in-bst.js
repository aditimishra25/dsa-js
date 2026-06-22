/**
 * Delete a node from a BST
 */

// When root.val === key:
// 0 children  -> return null
// 1 child     -> return that child
// 2 children  ->
//     find successor
//     copy value
//     delete successor

// The successor is always:
// smallest node in right subtree
// which means:
// while(node.left){
//     node = node.left;
// }

var deleteNode = function (root, key) {
  // Node not found
  if (!root) {
    return null;
  }

  // Search in left subtree
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  }

  // Search in right subtree
  else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  }

  // Found node to delete
  else {
    // Case 1: No left child
    if (!root.left) {
      return root.right;
    }

    // Case 2: No right child
    if (!root.right) {
      return root.left;
    }

    // Case 3: Two children

    // Find smallest node in right subtree
    let successor = findMin(root.right);

    // Replace current value with successor value
    root.val = successor.val;

    // Delete the duplicate successor node
    root.right = deleteNode(root.right, successor.val);
  }

  return root;
};

/**
 * Find leftmost (smallest) node in BST
 */
function findMin(node) {
  while (node.left) {
    node = node.left;
  }

  return node;
}
