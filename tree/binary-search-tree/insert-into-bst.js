var insertIntoBST = function (root, val) {
  if (!root) {
    return new TreeNode(val);
  }

  if (val < root.val) {
    root.left = insertIntoBST(root.left, val);
  }
  if (val > root.val) {
    root.right = insertIntoBST(root.right, val);
  }

  return root;
};

// -----------------------revision-1--------------------------
var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);
  if (val < root.val) root.left = insertIntoBST(root.left, val);
  if (val > root.val) root.right = insertIntoBST(root.right, val);
  return root;
};