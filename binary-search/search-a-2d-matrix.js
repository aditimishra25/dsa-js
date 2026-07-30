// The matrix has two important properties: each row is sorted, and the first element of every row is greater than the last element of the previous row. That means if I read the matrix row by row, it forms one globally sorted array. Instead of physically flattening it, I binary search a virtual 1D array of size rows × cols. Whenever I need the actual element, I convert the virtual index back to matrix coordinates using row = Math.floor(index / cols) and col = index % cols. This gives an O(log(m × n)) solution with O(1) extra space.

// Why does this work?
// Every row contains exactly cols elements.
// So:
// mid / cols tells you how many complete rows you've passed.
// mid % cols tells you how far into the current row you are.

/**
 *
 * Time  : O(log(m * n))
 * Space : O(1)
 */

var searchMatrix = function(matrix, target) {

    // Number of rows
    const rows = matrix.length;

    // Number of columns
    const cols = matrix[0].length;

    // Instead of binary searching each row,
    // imagine the entire matrix as one sorted array.
    //
    // Example:
    //
    // 1   3   5   7
    // 10 11 16 20
    // 23 30 34 60
    //
    // becomes
    //
    // 1 3 5 7 10 11 16 20 23 30 34 60
    //
    // So our search space is from
    // index 0 to rows*cols - 1

    let left = 0;
    let right = rows * cols - 1;

    while (left <= right) {

        // Standard Binary Search
        let mid = left + Math.floor((right - left) / 2);

        // Convert the virtual 1D index back
        // into matrix coordinates.
        //
        // Example:
        //
        // cols = 4
        //
        // mid = 6
        //
        // row = 6 / 4 = 1
        // col = 6 % 4 = 2
        //
        // matrix[1][2] = 16

        let row = Math.floor(mid / cols);
        let col = mid % cols;

        let value = matrix[row][col];

        // Found target
        if (value === target) {
            return true;
        }

        // Target is bigger
        // Search right half
        if (value < target) {
            left = mid + 1;
        }

        // Target is smaller
        // Search left half
        else {
            right = mid - 1;
        }
    }

    // Target doesn't exist
    return false;
};