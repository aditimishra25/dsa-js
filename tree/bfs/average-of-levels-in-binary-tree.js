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
var averageOfLevels = function (root) {
  let res = [];
  bfs(root, 0, res);
  return res.map(([sum, count]) => sum / count);
};

var bfs = (root, level, res) => {
  if (!root) return;

  if (!res[level]) res[level] = [0, 0]; // [sum, count]

  res[level][0] += root.val; // add to sum
  res[level][1] += 1; // increase count

  bfs(root.left, level + 1, res);
  bfs(root.right, level + 1, res);
};

// ----------------------revision-1---------------------------
// Approach-1
var averageOfLevels = function (root) {
  let res = [];
  bfs(root, 0, res);
  return res.map(([sum, count]) => sum / count);
};

bfs = (root, level, res) => {
  if (!root) return;

  if (!res[level]) res[level] = [0, 0]; // [sum, count]

  res[level][0] += root.val; // add to sum
  res[level][1] += 1; // increase count

  bfs(root.left, level + 1, res);
  bfs(root.right, level + 1, res);
};

// Approach-2
var averageOfLevels = function (root) {
   if (!root) return [];

    let result = [];
    let queue = [root];

    while(queue.length){
        let level = [];
        let size = queue.length;
        let sum = 0;

        for(let i=0; i<size; i++){
            let node = queue.shift();
            level.push(node.val);

            sum = sum + node.val
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right)
        }

        result.push(sum/size)
    }
    return result
};