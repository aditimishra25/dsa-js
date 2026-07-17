var pacificAtlantic = function (heights) {
    let rows = heights.length;
    let cols = heights[0].length;

    let pacific = new Set();
    let atlantic = new Set();

    // Pacific borders
    for (let r = 0; r < rows; r++) {
        dfs(heights, r, 0, pacific, heights[r][0]);
    }

    for (let c = 0; c < cols; c++) {
        dfs(heights, 0, c, pacific, heights[0][c]);
    }

    // Atlantic borders
    for (let r = 0; r < rows; r++) {
        dfs(heights, r, cols - 1, atlantic, heights[r][cols - 1]);
    }

    for (let c = 0; c < cols; c++) {
        dfs(heights, rows - 1, c, atlantic, heights[rows - 1][c]);
    }

    let result = [];

    // Find cells reachable by both oceans
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let key = `${r},${c}`;

            if (
                pacific.has(key) &&
                atlantic.has(key)
            ) {
                result.push([r, c]);
            }
        }
    }

    return result;
};

var dfs = (heights, row, col, visited, prevHeight) => {
    // Out of bounds
    if (
        row < 0 ||
        col < 0 ||
        row >= heights.length ||
        col >= heights[0].length
    ) {
        return;
    }

    // Cannot move downhill while traversing from ocean
    if (heights[row][col] < prevHeight) {
        return;
    }

    let key = `${row},${col}`;

    // Already visited
    if (visited.has(key)) {
        return;
    }

    visited.add(key);

    let currentHeight = heights[row][col];

    // Explore all 4 directions
    dfs(heights, row - 1, col, visited, currentHeight); // up
    dfs(heights, row + 1, col, visited, currentHeight); // down
    dfs(heights, row, col - 1, visited, currentHeight); // left
    dfs(heights, row, col + 1, visited, currentHeight); // right
};