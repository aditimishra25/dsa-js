/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // Start at the root of the BST.
  
  // If both p and q are larger than the root, the LCA must be in the right subtree.
  if (root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q);
  
  // If both p and q are smaller than the root, the LCA must be in the left subtree.
  else if (root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q);
  
  // If p and q are on different sides of the root (or one equals the root), the current node is the LCA.
  else return root;
};
