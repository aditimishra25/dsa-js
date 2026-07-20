// 1. Put all rotten oranges in queue.
// 2. Count fresh oranges.
// 3. Run BFS.
// 4. Every BFS level = 1 minute.
// 5. Rot adjacent fresh oranges.
// 6. If all fresh oranges become rotten -> return minutes.
// 7. Otherwise return -1.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let queue = [];
  let fresh = 0;
  let mins = 0;

  // Count fresh oranges and collect all rotten oranges
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      // Initial rotten oranges go into queue
      if (grid[r][c] === 2) {
        queue.push([r, c]);
      }

      // Count fresh oranges
      if (grid[r][c] === 1) {
        fresh++;
      }
    }
  }

  // No fresh oranges to rot
  if (fresh === 0) {
    return 0;
  }

  mins = bfs(grid, queue, fresh);

  return mins;
};

var bfs = (grid, queue, fresh) => {
  let mins = 0;

  let directions = [
    [-1, 0], // up
    [1, 0], // down
    [0, -1], // left
    [0, 1], // right
  ];

  // Process level by level
  while (queue.length && fresh > 0) {
    let size = queue.length;

    // One BFS level = one minute
    for (let i = 0; i < size; i++) {
      let [r, c] = queue.shift();

      // Check all 4 neighbors
      for (let [dr, dc] of directions) {
        let nr = r + dr;
        let nc = c + dc;

        // Skip invalid cells
        if (nr < 0 || nc < 0 || nr >= grid.length || nc >= grid[0].length) {
          continue;
        }

        // Only fresh oranges can be rotted
        if (grid[nr][nc] === 1) {
          // Fresh -> Rotten
          grid[nr][nc] = 2;

          // One less fresh orange
          fresh--;

          // Add to queue for next minute
          queue.push([nr, nc]);
        }
      }
    }

    // Finished one minute
    mins++;
  }

  // If fresh oranges remain, impossible
  return fresh === 0 ? mins : -1;
};
