/**
 * Time:
 * set() -> O(1)
 * get() -> O(log n)
 *
 * Space:
 * O(n)
 */

var TimeMap = function () {
  // Map
  //
  // key
  //  ↓
  // [
  //   [timestamp, value],
  //   [timestamp, value]
  // ]
  this.map = new Map();
};

/**
 * Store value with timestamp
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  // First time seeing this key
  if (!this.map.has(key)) {
    this.map.set(key, []);
  }

  // Since timestamps are always increasing,
  // simply append.
  this.map.get(key).push([timestamp, value]);
};

/**
 * Return latest value whose timestamp <= given timestamp
 */
TimeMap.prototype.get = function (key, timestamp) {
  // Key doesn't exist
  if (!this.map.has(key)) {
    return "";
  }

  const arr = this.map.get(key);

  let left = 0;
  let right = arr.length - 1;

  // Stores the best answer found so far.
  let answer = "";

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    let currentTimestamp = arr[mid][0];
    let currentValue = arr[mid][1];

    if (currentTimestamp === timestamp) {
      return currentValue;
    }

    // Current timestamp is valid.
    // Save it and try to find a later valid timestamp.
    if (currentTimestamp < timestamp) {
      answer = currentValue;

      left = mid + 1;
    }

    // Timestamp is too large.
    else {
      right = mid - 1;
    }
  }

  return answer;
};
