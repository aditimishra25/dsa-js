

/**
 * @param {_Node} node
 * @return {_Node}
 */

// DFS(node)
//     |
//     |-- already cloned?
//     |      return cloned version
//     |
//     |-- create clone
//     |-- store in map
//     |
//     |-- clone every neighbor
//     |
//     |-- return clone

var cloneGraph = function (node) {
  // Edge case: empty graph
  if (!node) return null;

  // Stores:
  // Original Node -> Cloned Node
  let map = new Map();

  return dfs(node, map);
};

var dfs = (node, map) => {
  // If we've already cloned this node,
  // return the existing clone.
  // This prevents infinite recursion in cycles.
  if (map.has(node)) {
    return map.get(node);
  }

  // Create a clone of the current node
  let clone = new Node(node.val);

  // Store it immediately before exploring neighbors
  // so that cycles can reuse this clone.
  map.set(node, clone);

  // Clone all neighbors
  for (let neighbor of node.neighbors) {
    clone.neighbors.push(
      dfs(neighbor, map)
    );
  }

  // Return cloned node
  return clone;
};

