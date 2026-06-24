/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    // Store all numbers in a Set
    // Gives O(1) lookup
    let set = new Set(nums);

    // Stores the longest sequence length found so far
    let longest = 0;

    // Check every unique number
    for (let num of set) {

        // Only start counting if this number
        // is the START of a sequence
        //
        // Example:
        // 1 2 3 4
        //
        // For num = 1:
        // set.has(0) -> false
        // so 1 is a starting point
        //
        // For num = 2:
        // set.has(1) -> true
        // so skip it
        if (!set.has(num - 1)) {

            // Start building sequence from num
            let current = num;

            // Current sequence length
            let length = 1;

            // Keep extending sequence
            //
            // Example:
            // current = 1
            //
            // has(2)? yes
            // length = 2
            //
            // has(3)? yes
            // length = 3
            //
            // has(4)? yes
            // length = 4
            while (set.has(current + 1)) {
                current++;
                length++;
            }

            // Update longest sequence seen so far
            longest = Math.max(longest, length);
        }
    }

    return longest;
};

// ----------------------revision-1------------------------------
var longestConsecutive = function(nums) {
    let set = new Set(nums);

    let longest = 0

    for(num of set){
        if(!set.has(num - 1)){
            let current = num;
            let length = 1;

            while(set.has(current + 1)){
                current++;
                length++
            }
            longest = Math.max(length, longest)
        }
    }
    return longest;
};