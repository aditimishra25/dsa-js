/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = [];
  bfs(root, 0, res);
  return res;
};

var bfs = (root, level, res) => {
  if (!root) return;

  // create array for this level if it doesn't exist
  if (!res[level]) {
    res[level] = [];
  }

  // add node value to correct level
  res[level].push(root.val);

  // visit children
  bfs(root.left, level + 1, res);
  bfs(root.right, level + 1, res);
};

// ---------------------------revision-1-------------------------------------------
var levelOrder = function (root) {
  if (!root) return [];

  let result = [];
  let queue = [root];

  while (queue.length) {
    let level = [];

    // Save current level size
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();

      level.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    result.push(level);
  }

  return result;
};

// -------------------revision-2---------------------------
var levelOrder = function (root) {
  if (!root) return [];

  let result = [];
  let queue = [root];

  while (queue.length) {
    let level = [];
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let node = queue.shift();

      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }
  return result;
};