/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {

    let count = {};

    let left = 0;

    // stores highest frequency character in current window
    let maxFreq = 0;

    // stores answer
    let maxLength = 0;

    for(let right = 0; right < s.length; right++) {

        // add current character frequency
        count[s[right]] = (count[s[right]] || 0) + 1;

        // update highest frequency seen in window
        maxFreq = Math.max(maxFreq, count[s[right]]);

        /**
         * replacements needed:
         * window size - most frequent char
         */
        while((right - left + 1) - maxFreq > k) {

            count[s[left]]--;

            left++;
        }

        // update answer
        maxLength = Math.max(
            maxLength,
            right - left + 1
        );
    }

    return maxLength;
};