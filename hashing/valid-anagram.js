/**
 * Determines whether two strings are anagrams of each other.
 * Two strings are anagrams if they contain the same characters
 * with the same frequencies, regardless of order.
 *
 * @param {string} s - First input string
 * @param {string} t - Second input string
 * @return {boolean} - True if s and t are anagrams, otherwise false
 */
var isAnagram = function (s, t) {
    // If lengths differ, they cannot be anagrams
    if (s.length !== t.length) return false;

    // Objects to store character frequencies for both strings
    let sCount = {};
    let tCount = {};

    // Count frequency of each character in string s
    for (let char of s) {
        sCount[char] = (sCount[char] || 0) + 1;
    }

    // Count frequency of each character in string t
    for (let char of t) {
        tCount[char] = (tCount[char] || 0) + 1;
    }

    // Compare character frequencies between both strings
    for (let key in sCount) {
        // If any character count differs, not an anagram
        if (sCount[key] !== tCount[key]) return false;
    }

    // All character counts match
    return true;
};

// --------------------revision-1-------------------------------
var isAnagram = function(s, t) {
    if(!s.length || !t.length || s.length !== t.length) return false;

    let sCount = {}, tCount = {};

    for(let char of s){
        sCount[char] = (sCount[char] || 0 ) + 1;
    }

    for(let char of t){
        tCount[char] = (tCount[char] || 0 ) + 1;
    }

    for(key in sCount){
        if(sCount[key] !== tCount[key]) return false
    }

    return true;
};
