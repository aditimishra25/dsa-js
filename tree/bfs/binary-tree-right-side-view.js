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
 * @return {number[]}
 */
var rightSideView = function (root) {
  let res = [];
  checkLevel(root, 0, res);
  return res;
};

// -------------------option-1--------------------------------
var checkLevel = (root, level, res) => {
  if (!root) return;

  if (res[level] === undefined) res[level] = root.val;

  checkLevel(root.right, level + 1, res);
  checkLevel(root.left, level + 1, res);
};

// -------------------option-2--------------------------------
//using queue
var checkLevel = (root, level, res) => {
  if (!root) return;
  let queue = [root];
  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();

      if (i === size - 1) {
        res.push(node.val);
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return res;
};

// -------------------------------revision-1-------------------------------------
var rightSideView = function (root) {
  let res = [];
  checkLevel(root, 0, res);
  return res;
};

function checkLevel(root, level, res) {
  if (!root) return [];

  // if(!res[level]) res[level] = root.val; when res[level] is 0, !0 becomes true thats why using undefined
  if (res[level] === undefined) res[level] = root.val;

  checkLevel(root.right, level + 1, res);
  checkLevel(root.left, level + 1, res);
}

// --------------------------------revision-2-----------------------------------
var rightSideView = function (root) {
  if (!root) return [];

  let res = [];
  let queue = [root];

  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let node = queue.shift();

      if (i === size - 1) {
        res.push(node.val);
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return res;
};