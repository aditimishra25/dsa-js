/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {

    // If t is longer than s,
    // it's impossible to find a valid window
    if (s.length < t.length) {
        return "";
    }

    // Frequency of characters required from t
    let tFreq = {};

    // Frequency of characters in current window
    let windowFreq = {};

    // Build frequency map for t
    for (let ch of t) {
        tFreq[ch] = (tFreq[ch] || 0) + 1;
    }

    // Number of distinct characters we need to satisfy
    let need = Object.keys(tFreq).length;

    // Number of distinct characters currently satisfied
    let have = 0;

    // Left pointer of sliding window
    let left = 0;

    // Best answer found so far
    let minLength = Infinity;
    let result = "";

    // Expand window using right pointer
    for (let right = 0; right < s.length; right++) {

        let ch = s[right];

        // Add current character to window
        windowFreq[ch] = (windowFreq[ch] || 0) + 1;

        // If this character's frequency requirement
        // is now exactly satisfied
        if (
            tFreq[ch] &&
            windowFreq[ch] === tFreq[ch]
        ) {
            have++;
        }

        // While window is valid
        while (have === need) {

            // Current window size
            let windowLength = right - left + 1;

            // Update best answer if smaller
            if (windowLength < minLength) {
                minLength = windowLength;

                // Extract substring
                result = s.slice(left, right + 1);
            }

            // Character leaving the window
            let leftChar = s[left];

            // If removing this character
            // breaks a requirement,
            // window becomes invalid
            if (
                tFreq[leftChar] &&
                windowFreq[leftChar] === tFreq[leftChar]
            ) {
                have--;
            }

            // Remove character from window
            windowFreq[leftChar]--;

            // Shrink window
            left++;
        }
    }

    return result;
};