/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {

    // Build adjacency list
    let graph = [];

    for (let i = 0; i < numCourses; i++) {
        graph[i] = [];
    }

    // [course, prereq]
    // Example:
    // [1,0] => 0 -> 1
    for (let [course, prereq] of prerequisites) {
        graph[prereq].push(course);
    }

    // 0 = unvisited
    // 1 = visiting
    // 2 = visited
    let states = new Array(numCourses).fill(0);

    // Stores topological order
    let order = [];

    // Run DFS on every course
    for (let course = 0; course < numCourses; course++) {

        // Cycle found
        if (!dfs(course, graph, states, order)) {
            return [];
        }
    }

    // Reverse because nodes are added after DFS finishes
    return order.reverse();
};

var dfs = (course, graph, states, order) => {

    // Found a cycle
    if (states[course] === 1) {
        return false;
    }

    // Already processed
    if (states[course] === 2) {
        return true;
    }

    // Mark as currently visiting
    states[course] = 1;

    // Visit all dependent courses
    for (let nextCourse of graph[course]) {

        if (!dfs(nextCourse, graph, states, order)) {
            return false;
        }
    }

    // Finished processing this node
    states[course] = 2;

    // Add to ordering
    order.push(course);

    return true;
};