/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */

var isSubtree = function (root, subRoot) {
  // If we've reached the end of root,
  // subRoot cannot be found here
  if (!root) {
    return false;
  }

  // Check if the tree rooted at the current node
  // is exactly the same as subRoot
  if (sameTree(root, subRoot)) {
    return true;
  }

  // Otherwise search in the left subtree
  // or the right subtree
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

var sameTree = (rootTree, subRootTree) => {
  // Both nodes are null
  // Trees match up to this point
  if (!rootTree && !subRootTree) {
    return true;
  }

  // One node is null
  // OR values are different
  // Trees are not identical
  if (!rootTree || !subRootTree || rootTree.val !== subRootTree.val) {
    return false;
  }

  // Both current nodes match
  // Check left and right subtrees
  return sameTree(rootTree.left, subRootTree.left) && sameTree(rootTree.right, subRootTree.right);
};

// root
//  |
//  v

// Is this subtree equal
// to subRoot?

// If yes:
// return true

// If no:
// Search left subtree
// Search right subtree

// --------------------revision-1------------------------------
var isSubtree = function (root, subRoot) {
  if (!root) return false;

  if (isSameTree(root, subRoot)) return true;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

isSameTree = (root, subRoot) => {
  if (!root && !subRoot) return true;

  if (!root || !subRoot || root.val !== subRoot.val) return false;

  return isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right);
};
