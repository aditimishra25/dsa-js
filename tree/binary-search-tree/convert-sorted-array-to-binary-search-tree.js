/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return convertToBST(nums, 0, nums.length - 1);
};

//function to convert sorted array to bst
var convertToBST = (nums, start, end) => {
  //return null when wrong range received
  if (start > end) return null;

  //calculate the midlle element as this is node
  let mid = Math.ceil((start + end) / 2);

  //initialise root node as middle element
  var root = new TreeNode(nums[mid]);

  //assign left subtree
  root.left = convertToBST(nums, start, mid - 1);

  //assign right subtree
  root.right = convertToBST(nums, mid + 1, end);

  //return root node
  return root;
};

// -----------------revision-1---------------------------------------
var sortedArrayToBST = function (nums) {
  return convertArrayToBST(nums, 0, nums.length - 1);
};

convertArrayToBST = (nums, start, end) => {
  if (start > end) return null;

  let mid = Math.ceil(start + (end - start) / 2);

  let root = new TreeNode(nums[mid]);

  root.left = convertArrayToBST(nums, start, mid - 1);
  root.right = convertArrayToBST(nums, mid + 1, end);

  return root;
};

// -----------------------revision-2--------------------------
var sortedArrayToBST = function (nums) {
  return convertArrayToBST(nums, 0, nums.length - 1);
};

convertArrayToBST = (nums, start, end) => {
  if (start > end) return null;

  let mid = Math.ceil(start + (end - start) / 2);

  let root = new TreeNode(nums[mid]);
  root.left = convertArrayToBST(nums, start, mid - 1);
  root.right = convertArrayToBST(nums, mid + 1, end);
  return root;
};