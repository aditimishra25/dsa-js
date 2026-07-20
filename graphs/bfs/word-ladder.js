/*
Pattern: Shortest Path in Unweighted Graph

Key Insight:
- Each word is a graph node.
- Changing one character creates edges.
- Need minimum transformations.
- Minimum steps in an unweighted graph => BFS.

Time: O(N * L * 26)
Space: O(N)
*/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  // Fast lookup
  let words = new Set(wordList);

  // If target doesn't exist, impossible
  if (!words.has(endWord)) {
    return 0;
  }

  // BFS queue
  let queue = [beginWord];

  // Prevent revisiting words
  let visited = new Set();
  visited.add(beginWord);

  // Current transformation length
  let level = 1;

  while (queue.length) {
    let size = queue.length;

    // Process one BFS level
    for (let i = 0; i < size; i++) {
      let word = queue.shift();

      // Reached target
      if (word === endWord) {
        return level;
      }

      // Try changing every character
      for (let j = 0; j < word.length; j++) {
        // Convert to array because strings are immutable
        let chars = word.split("");

        // Try all 26 letters
        for (let c = 97; c <= 122; c++) {
          chars[j] = String.fromCharCode(c);

          let nextWord = chars.join("");

          // Valid dictionary word and not visited
          if (words.has(nextWord) && !visited.has(nextWord)) {
            visited.add(nextWord);
            queue.push(nextWord);
          }
        }
      }
    }

    // Move to next BFS level
    level++;
  }

  return 0;
};

// ----------------------------revision-1---------------------------------
var ladderLength = function (beginWord, endWord, wordList) {
  let words = new Set(wordList);

  if (!words.has(endWord)) return 0;

  let queue = [beginWord];

  let visited = new Set();
  visited.add(beginWord);

  let level = 1;
  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let word = queue.shift();
      if (word == endWord) return level;

      for (let j = 0; j < word.length; j++) {
        let chars = word.split("");
        for (let c = 97; c <= 122; c++) {
          chars[j] = String.fromCharCode(c);
          let nextWord = chars.join("");

          if (words.has(nextWord) && !visited.has(nextWord)) {
            visited.add(nextWord);
            queue.push(nextWord);
          }
        }
      }
    }
    level++;
  }
  return 0;
};
