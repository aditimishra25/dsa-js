/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */


// Fixed-size Sliding Window

// 1. Count characters in p
// 2. Count characters in current window
// 3. If counts match -> anagram found
// 4. Slide window:
//    - Add right character
//    - Remove left character
// 5. Repeat

var findAnagrams = function(s, p) {

    // Stores starting indices of anagrams
    let res = [];

    // If p is longer than s,
    // no window of size p.length can exist
    if (p.length > s.length) {
        return res;
    }

    // Frequency count of p
    let pCount = new Array(26).fill(0);

    // Frequency count of current window
    let windowCount = new Array(26).fill(0);

    // Build frequency array for p
    //
    // Example:
    // p = "ab"
    //
    // pCount becomes:
    // a -> 1
    // b -> 1
    for (let ch of p) {
        let idx = ch.charCodeAt(0) - 97;
        pCount[idx]++;
    }

    // Build first window
    //
    // Example:
    // s = "abab"
    // p = "ab"
    //
    // First window = "ab"
    for (let i = 0; i < p.length; i++) {
        let idx = s.charCodeAt(i) - 97;
        windowCount[idx]++;
    }

    // Check if first window itself is an anagram
    if (arraysEqual(pCount, windowCount)) {
        res.push(0);
    }

    // Left pointer of sliding window
    let left = 0;

    // Right pointer starts AFTER first window
    //
    // Example:
    // s = "abab"
    // p.length = 2
    //
    // right starts at index 2
    for (let right = p.length; right < s.length; right++) {

        // Add new character entering window
        //
        // Example:
        // "ab" -> "ba"
        //
        // Add new right character
        let addIdx = s.charCodeAt(right) - 97;
        windowCount[addIdx]++;

        // Remove old character leaving window
        let removeIdx = s.charCodeAt(left) - 97;
        windowCount[removeIdx]--;

        // Move left pointer forward
        left++;

        // If frequencies match,
        // current window is an anagram
        if (arraysEqual(pCount, windowCount)) {
            res.push(left);
        }
    }

    return res;
};


// Compare two frequency arrays
function arraysEqual(arr1, arr2) {

    // Check all 26 lowercase letters
    for (let i = 0; i < 26; i++) {

        // If any frequency differs,
        // they are not anagrams
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}