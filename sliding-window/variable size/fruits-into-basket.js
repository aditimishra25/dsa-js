/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  // left pointer of sliding window
  let left = 0;

  // stores maximum window size found
  let maxNum = 0;

  // hashmap to store fruit counts
  let varCount = {};

  // expand window using right pointer
  for (let right = 0; right < fruits.length; right++) {
    // add current fruit into hashmap
    varCount[fruits[right]] = (varCount[fruits[right]] || 0) + 1;

    // if more than 2 fruit types exist
    while (Object.keys(varCount).length > 2) {
      // remove left fruit count
      varCount[fruits[left]]--;

      // if count becomes 0
      // remove fruit type completely
      if (varCount[fruits[left]] == 0) {
        delete varCount[fruits[left]];
      }

      // shrink window
      left++;
    }

    // calculate current valid window size
    maxNum = Math.max(maxNum, right - left + 1);
  }

  return maxNum;
};

// -------------------------revision-1------------------------------------------
//window size is 2
var totalFruit = function (fruits) {
  let left = 0;
  let maxFruits = 0;
  let varCount = {};

  for (let right = 0; right < fruits.length; right++) {
    varCount[fruits[right]] = (varCount[fruits[right]] || 0) + 1;

    while (Object.keys(varCount).length > 2) {
      varCount[fruits[left]] --;
      if (varCount[fruits[left]] == 0) {
        delete varCount[fruits[left]];
      }
      left++;
    }
    maxFruits = Math.max(maxFruits, right - left + 1);
  }
  console.log(varCount);
  return maxFruits;
};