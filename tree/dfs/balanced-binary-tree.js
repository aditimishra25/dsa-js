var isBalanced = function (root) {
  // Assume tree is balanced initially
  const res = {
    isBalanced: true,
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

// --------------optimal solution------------------------------
var isBalanced = function (root) {
  // If getHeight returns -1,
  // some subtree is unbalanced
  return getHeight(root) !== -1;
};

var getHeight = (root) => {
  // Empty tree has height 0
  if (!root) {
    return 0;
  }

  // Get left subtree height
  const leftHeight = getHeight(root.left);

  // Left subtree already unbalanced
  if (leftHeight === -1) {
    return -1;
  }

  // Get right subtree height
  const rightHeight = getHeight(root.right);

  // Right subtree already unbalanced
  if (rightHeight === -1) {
    return -1;
  }

  // Current node is unbalanced
  if (Math.abs(leftHeight - rightHeight) > 1) {
    return -1;
  }

  // Return height of current subtree
  return 1 + Math.max(leftHeight, rightHeight);
};

// ---------------------revision-1----------------------------
var isBalanced = function (root) {
  return getHeight(root) !== -1;
};

getHeight = (root) => {
  if (!root) return 0;

  let leftHeight = getHeight(root.left);
  if (leftHeight == -1) return -1;

  let rightHeight = getHeight(root.right);
  if (rightHeight == -1) return -1;

  if (Math.abs(leftHeight - rightHeight) > 1) return -1;

  return 1 + Math.max(leftHeight, rightHeight);
};
