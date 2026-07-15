var goodNodes = function (root) {
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

// ------------------revision-1----------------------------------------
var goodNodes = function (root) {
  return dfs(root, -Infinity);
};

dfs = (node, maxValSoFar) => {
  if (!node) return 0;

  let count = 0;
  if (node.val >= maxValSoFar) count = 1;
  maxValSoFar = Math.max(maxValSoFar, node.val);

  count = count + dfs(node.left, maxValSoFar);
  count = count + dfs(node.right, maxValSoFar);
  return count;
};
