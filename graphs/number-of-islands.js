// Find a land cell
// ↓
// This means we found a new island
// ↓
// islands++
// ↓
// Destroy/visit the entire island using DFS
// ↓
// Continue scanning

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let islands = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] == "1") {
        islands++;
        dfs(grid, r, c);
      }
    }
  }
  return islands;
};

var dfs = (grid, row, col) => {
  if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === "0") return;
  grid[row][col] = "0";
  dfs(grid, row - 1, col); //up
  dfs(grid, row + 1, col); //down
  dfs(grid, row, col - 1); //left
  dfs(grid, row, col + 1); //right
};