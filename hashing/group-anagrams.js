/**
 * Groups words that are anagrams of each other.
 *
 * @param {string[]} strs - Array of input strings
 * @return {string[][]} - Grouped anagrams
 */

// -----------------------------trick-------------------------
// Anagram
//      ↓
// Sort each word
//      ↓
// Use sorted word as HashMap key
//      ↓
// Group words with same key

var groupAnagrams = function (strs) {
    // Map to store anagrams
    // key -> sorted version of the word
    // value -> list of words that match this sorted key
    let res = new Map();

    // Iterate through each string in the input array
    for (let s of strs) {
        // Sort the characters of the string to form a key
        // Anagrams will always produce the same sorted key
        let key = s.split('').sort().join('');

        // If this key does not exist, initialize an empty array
        if (!res.has(key)) {
            res.set(key, []);
        }

        // Add the original string to its anagram group
        res.get(key).push(s);
    }

    // Return only the grouped anagram values
    return Array.from(res.values());
};

// -----------------revision-1-----------------------
var groupAnagrams = function(strs) {
    if(!strs) return [];

    let res = new Map();

    for(str of strs){
        let key = str.split('').sort().join('')

        if(!res.has(key)){
            res.set(key, [])
        }

        res.get(key).push(str)
    }

    return Array.from(res.values())
};