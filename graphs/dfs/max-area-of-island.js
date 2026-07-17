/**
 * @param {number[][]} grid
 * @return {number}
 */

// area of island
// =
// 1 (current cell)
// +
// up area
// +
// down area
// +
// left area
// +
// right area

var maxAreaOfIsland = function (grid) {
  let maxArea = 0;

  // Visit every cell in the grid
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {

      // Found an unvisited land cell
      if (grid[row][col] === 1) {
        let area = dfs(grid, row, col);

        // Update maximum island area seen so far
        maxArea = Math.max(maxArea, area);
      }
    }
  }

  return maxArea;
};

var dfs = (grid, row, col) => {
  // Base Case:
  // 1. Out of bounds
  // 2. Water cell
  if (
    row < 0 ||
    row >= grid.length ||
    col < 0 ||
    col >= grid[0].length ||
    grid[row][col] === 0
  ) {
    return 0;
  }

  // Mark current land cell as visited
  grid[row][col] = 0;

  // Current cell contributes 1 area
  let area = 1;

  // Explore all 4 directions and add their areas
  area += dfs(grid, row - 1, col); // up
  area += dfs(grid, row + 1, col); // down
  area += dfs(grid, row, col - 1); // left
  area += dfs(grid, row, col + 1); // right

  return area;
};
