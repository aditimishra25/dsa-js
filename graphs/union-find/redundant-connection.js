/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  // parent[i] = parent of node i
  const parent = [];

  // Initialize every node as its own parent
  for (let i = 0; i <= edges.length; i++) {
    parent[i] = i;
  }

  // Process every edge one by one
  for (let [u, v] of edges) {
    // If union fails, this edge creates a cycle
    if (!union(u, v, parent)) {
      return [u, v];
    }
  }
};

// Returns the root(parent) of a node
var find = (node, parent) => {
  while (node !== parent[node]) {
    node = parent[node];
  }
  return node;
};

// Connect two nodes
var union = (u, v, parent) => {
  // Find root of both nodes
  let rootU = find(u, parent);
  let rootV = find(v, parent);

  // Already in the same group
  // Adding this edge creates a cycle
  if (rootU === rootV) {
    return false;
  }

  // Merge the two groups
  parent[rootV] = rootU;

  return true;
};

// ---------------------------Approach-2---------------------------------------
/**
 *
 * Pattern:
 * Union Find (Disjoint Set Union)
 *
 * Time: O(N * α(N))   ~ Almost O(N)
 * Space: O(N)
 */

var findRedundantConnection = function (edges) {
  // parent[i] = parent of node i
  const parent = [];

  // rank[i] = approximate height of the tree rooted at i
  const rank = [];

  // Initially every node is its own parent
  for (let i = 0; i <= edges.length; i++) {
    parent[i] = i;
    rank[i] = 1;
  }

  // Process each edge
  for (let [u, v] of edges) {
    // If union returns false,
    // u and v are already connected
    // This edge creates a cycle
    if (!union(u, v, parent, rank)) {
      return [u, v];
    }
  }
};

// Finds the root of a node
var find = (node, parent) => {
  // If node is not its own parent,
  // recursively find the root
  if (node !== parent[node]) {
    // Path Compression
    // Make every node directly point to the root
    parent[node] = find(parent[node], parent);
  }

  return parent[node];
};

// Connects two sets
var union = (u, v, parent, rank) => {
  // Find roots
  let rootU = find(u, parent);
  let rootV = find(v, parent);

  // Already in the same component
  if (rootU === rootV) {
    return false;
  }

  // Attach smaller tree under bigger tree
  if (rank[rootU] > rank[rootV]) {
    parent[rootV] = rootU;
  } else if (rank[rootU] < rank[rootV]) {
    parent[rootU] = rootV;
  } else {
    // Same height
    // Choose either one as parent
    parent[rootV] = rootU;

    // Height increases
    rank[rootU]++;
  }

  return true;
};
