/**
 * Checks whether the array contains any duplicate elements.
 *
 * @param {number[]} nums - Input array of numbers
 * @return {boolean} - Returns true if any number appears more than once, otherwise false
 */
var containsDuplicate = function (nums) {
    // Create a Set to store numbers we have already seen
    let set = new Set();

    // Iterate through each number in the array
    for (let num of nums) {
        // If the number already exists in the set,
        // it means we found a duplicate
        if (set.has(num)) {
            return true;
        } 
        
        // Otherwise, add the number to the set
        set.add(num);
    }

    // If no duplicates were found after checking all elements
    return false;
};

// ------------------revision-1---------------------------------
var containsDuplicate = function (nums) {
    let set = new Set();
    for(num of nums){
        if(set.has(num)) return true;
        else set.add(num)
    }
    return false;
};
