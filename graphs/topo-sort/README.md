# 🔀 Topological Sort

> **"Topological Sort is an ordering of nodes in a Directed Acyclic Graph (DAG) where every node appears before all nodes it points to."**

Topological Sort is mainly used for problems involving:

- Dependencies
- Prerequisites
- Task scheduling
- Build systems
- Course planning

The most common interview problems:

- Course Schedule (#207)
- Course Schedule II (#210)

---

# Table of Contents

1. What is Topological Sort?
2. Real World Examples
3. Important Condition: DAG
4. Dependency Graph Intuition
5. Graph Representation
6. Approaches
7. DFS Topological Sort
8. Kahn's Algorithm (BFS)
9. Indegree Concept
10. Cycle Detection
11. Course Schedule Pattern
12. Course Schedule II Pattern
13. Complexity
14. Common Mistakes
15. Problem Patterns
16. Interview Cheat Sheet

---

# 1. What is Topological Sort?

Topological ordering means arranging nodes such that:

```
If A → B

then

A comes before B
```

Example:

```
A → B → C
```

Valid order:

```
A B C
```

Invalid:

```
C B A
```

because C depends on B.

---

# 2. Real World Examples

## Course Scheduling

Example:

```
Math

↓

Advanced Math
```

You cannot study Advanced Math before Math.

---

## Software Installation

Example:

```
Operating System

↓

Application
```

OS must be installed first.

---

## Build Systems

Example:

```
Library

↓

Project
```

Library must exist before compiling project.

---

# 3. Important Condition: DAG

Topological Sort only works on:

```
DAG
```

Meaning:

```
Directed

+

Acyclic Graph
```

---

Example DAG:

```
A → B → C
```

No cycle.

---

Invalid:

```
A → B → C
    ↑   |
    |___|
```

Cycle exists.

No possible ordering.

---

# 4. Dependency Graph Intuition

Think:

```
Prerequisite

        ↓

Task
```

Example:

Prerequisites:

```
[Course, Required Course]
```

Input:

```
[1,0]
```

Meaning:

```
Course 0

must complete before

Course 1
```

Graph:

```
0 → 1
```

---

# 5. Graph Representation

Example:

Courses:

```
0 → 1

0 → 2

1 → 3
```

Adjacency List:

```javascript
{
0:[1,2],
1:[3],
2:[],
3:[]
}
```

---

# 6. Two Approaches

There are two ways to implement Topological Sort.

---

## Approach 1

DFS Based

Uses:

```
Recursion

+

States
```

---

## Approach 2

Kahn's Algorithm

Uses:

```
BFS

+

Indegree
```

---

# 7. DFS Topological Sort

Idea:

Visit dependencies first.

Then add current node.

Example:

```
A → B → C
```

DFS:

```
Visit A

Visit B

Visit C

Add C

Add B

Add A
```

Result:

```
C B A
```

Reverse:

```
A B C
```

---

# DFS States

We need three states:

```
0 = unvisited

1 = visiting

2 = completed
```

---

Why?

To detect cycles.

Example:

```
A → B → C → A
```

While visiting:

```
A = 1

B = 1

C = 1
```

C sees A again.

A is already:

```
state = 1
```

Cycle detected.

---

# DFS Template

```javascript
var dfs = (course, graph, state, order)=>{


    // cycle detected

    if(state[course] === 1){
        return false;
    }


    // already processed

    if(state[course] === 2){
        return true;
    }


    // mark visiting

    state[course] = 1;


    for(let next of graph[course]){

        if(!dfs(next, graph, state, order)){
            return false;
        }

    }


    // mark completed

    state[course] = 2;


    order.push(course);


    return true;

}
```

---

# 8. Kahn's Algorithm (BFS)

This is the most popular interview approach.

Uses:

```
Indegree
```

---

# 9. What is Indegree?

Indegree means:

```
Number of incoming edges
```

Example:

```
A → C

B → C
```

Graph:

```
A

B

 \

  C
```

Indegree:

```
A = 0

B = 0

C = 2
```

Because C has two prerequisites.

---

# Kahn's Algorithm Steps

## Step 1

Build graph.

---

## Step 2

Calculate indegree.

---

## Step 3

Put nodes with:

```
indegree = 0
```

into queue.

---

## Step 4

Remove node.

Reduce neighbors' indegree.

---

## Step 5

If neighbor becomes:

```
indegree = 0
```

add to queue.

---

Example:

```
0 → 1 → 2
```

Indegree:

```
0 = 0

1 = 1

2 = 1
```

Queue:

```
[0]
```

Remove 0:

```
indegree[1]--

```

Queue:

```
[1]
```

Remove 1:

```
indegree[2]--
```

Queue:

```
[2]
```

Order:

```
0 1 2
```

---

# Kahn's Algorithm Template

```javascript
var topoSort = (numNodes, graph)=>{


    let indegree = new Array(numNodes).fill(0);


    // calculate indegree

    for(let node in graph){

        for(let neighbor of graph[node]){

            indegree[neighbor]++;

        }

    }


    let queue=[];


    // nodes without dependency

    for(let i=0;i<numNodes;i++){

        if(indegree[i]===0){

            queue.push(i);

        }

    }


    let order=[];


    while(queue.length){


        let node = queue.shift();


        order.push(node);


        for(let neighbor of graph[node]){


            indegree[neighbor]--;


            if(indegree[neighbor]===0){

                queue.push(neighbor);

            }

        }

    }


    return order;

}
```

---

# 10. Cycle Detection

Topological Sort can detect cycles.

Example:

```
A → B

B → A
```

No starting node exists.

Indegree:

```
A = 1

B = 1
```

Queue:

```
[]
```

Nothing can be processed.

Therefore:

```
Cycle exists
```

---

Condition:

After BFS:

```
order.length !== number of nodes
```

means:

```
cycle exists
```

---

# 11. Course Schedule (#207)

Question:

Can we finish all courses?

Input:

```
numCourses = 2

prerequisites:

[1,0]
```

Graph:

```
0 → 1
```

Possible:

```
Yes
```

---

Cycle example:

```
[1,0]

[0,1]
```

Graph:

```
0 → 1

1 → 0
```

Impossible.

---

Solution:

Topological Sort.

If all courses processed:

```
true
```

Otherwise:

```
false
```

---

# 12. Course Schedule II (#210)

Question:

Return the actual order.

Example:

```
0 → 1

0 → 2

1 → 3
```

Answer:

```
[0,2,1,3]
```

or

```
[0,1,2,3]
```

Both valid.

---

Difference:

Course Schedule:

```
return boolean
```

Course Schedule II:

```
return ordering array
```

---

# 13. Complexity

Building graph:

```
O(E)
```

Traversal:

```
O(V+E)
```

Total:

```
O(V+E)
```

Space:

```
O(V+E)
```

because of:

- Graph
- Queue
- Visited/States

---

# 14. Common Mistakes

## Mistake 1

Using topological sort on undirected graph.

Wrong.

It requires:

```
Directed graph
```

---

## Mistake 2

Forgetting cycle detection.

A cycle means:

```
No valid ordering
```

---

## Mistake 3

Confusing edge direction.

Input:

```
[course, prerequisite]
```

Means:

```
prerequisite → course
```

Not:

```
course → prerequisite
```

---

## Mistake 4

Wrong indegree calculation.

Indegree counts:

```
incoming edges
```

not outgoing.

---

# 15. Problem Patterns

## Pattern 1

Prerequisite Problems

Keywords:

- before
- dependency
- prerequisite

Use:

```
Topological Sort
```

Problems:

- Course Schedule
- Course Schedule II

---

## Pattern 2

Build Ordering

Example:

```
Compile files in correct order
```

Use:

```
Topological Sort
```

---

## Pattern 3

Detect Dependency Cycle

Use:

```
Topo + Cycle Detection
```

---

# 16. Interview Cheat Sheet

```
Topological Sort

        |
        |
 Is graph directed?

        |
        ↓

 Is it acyclic?

        |
        ↓

 Find ordering

        |
        |
 -------------------
 |                 |
DFS              BFS
 |                 |
States         Indegree
```

---

# DFS vs Kahn

| Feature | DFS | Kahn |
|-|-|-|
| Technique | Recursion | BFS |
| Uses | States | Indegree |
| Cycle Detection | State=1 | Remaining nodes |
| Easier | Medium | Easy |
| Interview Usage | Common | Very Common |

---

# Golden Rules

1. **Topological Sort = ordering dependencies.**
2. **Only works on DAG (Directed Acyclic Graph).**
3. **Prerequisite problems almost always mean Topological Sort.**
4. **Cycle means impossible ordering.**
5. **DFS uses three states: unvisited, visiting, completed.**
6. **Kahn's algorithm uses indegree + queue.**
7. **Course Schedule is the classic Topological Sort problem.**