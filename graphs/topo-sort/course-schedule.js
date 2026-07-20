/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

var canFinish = function (numCourses, prerequisites) {

    // Build adjacency list
    let graph = {};

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
    // 1 = visiting (currently in recursion stack)
    // 2 = visited (already processed)
    let states = new Array(numCourses).fill(0);

    // Check every course
    for (let course = 0; course < numCourses; course++) {

        // If any DFS finds a cycle
        if (!dfs(course, graph, states)) {
            return false;
        }
    }

    return true;
};

var dfs = (course, graph, states) => {

    // Cycle found
    // We reached a node already in our current DFS path
    if (states[course] === 1) {
        return false;
    }

    // Already processed before
    // No need to check again
    if (states[course] === 2) {
        return true;
    }

    // Mark current course as being visited
    states[course] = 1;

    // Visit all dependent courses
    for (let nextCourse of graph[course]) {

        if (!dfs(nextCourse, graph, states)) {
            return false;
        }
    }

    // Finished processing this course
    states[course] = 2;

    return true;
};
