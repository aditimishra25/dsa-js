# 🌳 DFS (Depth First Search)

> **"DFS explores a graph by going as deep as possible before backtracking."**

DFS is one of the most important graph traversal techniques used in coding interviews.

It is used whenever we need to:

- Explore all connected nodes
- Find paths
- Detect cycles
- Count components
- Traverse grids
- Backtrack through possibilities

---

# Table of Contents

1. What is DFS?
2. DFS Intuition
3. How DFS Works
4. Recursive DFS
5. Iterative DFS
6. Visited Set
7. Graph DFS Template
8. Grid DFS Template
9. DFS on Matrix
10. Cycle Detection
11. Connected Components
12. Backtracking Relationship
13. Complexity
14. Common Mistakes
15. Problem Patterns
16. Problems Covered

---

# 1. What is DFS?

DFS stands for:

```
Depth First Search
```

It is a traversal algorithm used to visit nodes in a graph.

The idea:

```
Pick a node

↓

Visit one neighbor

↓

Continue deeper

↓

When no path exists, go back

↓

Explore next path
```

---

Example:

```
        A
       / \
      B   C
     /
    D
```

DFS traversal:

```
A → B → D → C
```

---

# 2. DFS Intuition

Imagine exploring a maze.

You do not check every direction at once.

You:

```
Go forward

↓

Reach dead end

↓

Come back

↓

Try another path
```

This is exactly DFS.

---

# 3. How DFS Works

Example graph:

```
0 ---- 1
|
|
2 ---- 3
```

Start:

```
0
```

Steps:

```
Visit 0

↓

Visit 1

↓

No more nodes

↓

Backtrack

↓

Visit 2

↓

Visit 3
```

Order:

```
0 → 1 → 2 → 3
```

---

# 4. Recursive DFS

Most common implementation.

Why recursion?

Because recursion automatically maintains the stack.

---

Example:

```javascript
function dfs(node){

    visit(node);

    for(let neighbor of graph[node]){

        dfs(neighbor);

    }

}
```

---

The call stack:

```
dfs(0)

    dfs(1)

        dfs(3)

    dfs(2)
```

---

# 5. Why Do We Need Visited?

Graphs can contain cycles.

Example:

```
A ---- B
|      |
|      |
C ---- D
```

If we don't track visited:

```
A

↓

B

↓

D

↓

C

↓

A

↓

B

↓

...
```

Infinite loop.

---

Solution:

Use Set.

```javascript
let visited = new Set();
```

Before exploring:

```javascript
if(visited.has(node)){
    return;
}
```

After visiting:

```javascript
visited.add(node);
```

---

# 6. DFS Graph Template

This is the most important template.

```javascript
var dfs = (node, graph, visited) => {

    // already visited
    if(visited.has(node)){
        return;
    }


    // mark visited
    visited.add(node);


    // visit neighbors
    for(let neighbor of graph[node]){

        dfs(neighbor, graph, visited);

    }

};
```

---

# 7. DFS With Return Value

Many LeetCode problems require returning information.

Example:

Find maximum area.

Template:

```javascript
function dfs(node){

    if(condition){
        return 0;
    }


    let result = 1;


    for(neighbor){

        result += dfs(neighbor);

    }


    return result;
}
```

---

# 8. DFS on Grid / Matrix

Many graph problems are hidden inside matrices.

Example:

```
[
 [1,1,0],
 [0,1,0],
 [1,0,1]
]
```

Each cell is a node.

Neighbors:

```
Up

Down

Left

Right
```

---

Directions:

```javascript
let directions = [
    [-1,0],
    [1,0],
    [0,-1],
    [0,1]
];
```

Meaning:

```
row-1,col     Up

row+1,col     Down

row,col-1     Left

row,col+1     Right
```

---

# 9. Grid DFS Template

Most important matrix template.

```javascript
var dfs = (row, col, grid, visited)=>{


    // boundary check

    if(
        row < 0 ||
        col < 0 ||
        row >= grid.length ||
        col >= grid[0].length
    ){
        return;
    }


    let key = `${row},${col}`;


    // visited check

    if(visited.has(key)){
        return;
    }


    visited.add(key);


    for(let [dr,dc] of directions){

        dfs(
            row+dr,
            col+dc,
            grid,
            visited
        );

    }

}
```

---

# 10. Cycle Detection Using DFS

## Undirected Graph

Need parent tracking.

Example:

```
A ----- B
```

When B sees A:

That is not a cycle.

Because A is the parent.

---

Template:

```javascript
dfs(node,parent){

    visited.add(node);


    for(neighbor){

        if(!visited.has(neighbor)){

            dfs(neighbor,node);

        }

        else if(neighbor !== parent){

            cycle exists

        }

    }

}
```

---

## Directed Graph

Use states.

Three states:

```
0 = unvisited

1 = visiting

2 = completed
```

Example:

```javascript
states[node]=1;
```

while exploring.

If we reach another node with:

```
state = 1
```

cycle exists.

Used in:

- Course Schedule

---

# 11. Connected Components

Problem:

Count separate groups.

Example:

```
1 --- 2


3 --- 4
```

Answer:

```
2 components
```

Algorithm:

```javascript
count = 0


for every node:

    if not visited:

        dfs(node)

        count++
```

---

Used in:

- Number of Provinces
- Connected Components

---

# 12. DFS Backtracking Relationship

DFS and Backtracking are closely related.

DFS:

```
Explore graph paths
```

Backtracking:

```
Try choice

↓

Undo choice

↓

Try another
```

Example:

Generate Parentheses:

```
(
()

(())
```

Each choice creates a DFS tree.

---

# 13. DFS Complexity

For Graph:

```
O(V + E)
```

Why?

Every node:

visited once

Every edge:

checked once

---

For Matrix:

```
Rows * Columns
```

Because every cell is visited once.

---

Space:

```
O(V)
```

because of:

- visited set
- recursion stack

---

# 14. Common DFS Mistakes

## Mistake 1

Forgetting visited.

Wrong:

```javascript
dfs(neighbor)
```

Correct:

```javascript
if(!visited.has(neighbor))
{
    dfs(neighbor)
}
```

---

## Mistake 2

Wrong boundary condition.

Wrong:

```javascript
row > grid.length
```

Correct:

```javascript
row >= grid.length
```

---

## Mistake 3

Marking visited too late.

Wrong:

```
Explore

↓

Mark visited
```

Correct:

```
Mark visited

↓

Explore
```

---

## Mistake 4

Not understanding return value.

Some DFS returns:

```
boolean

number

array

object
```

depending on problem.

---

# 15. DFS Problem Patterns

## Pattern 1: Island Problems

Grid:

```
Land = 1

Water = 0
```

Use:

DFS flood fill.

Problems:

- Number of Islands
- Max Area of Island

---

## Pattern 2: Graph Traversal

Given:

```
nodes + edges
```

Use:

DFS + visited.

Problems:

- Clone Graph

---

## Pattern 3: Reachability

Question:

"Can I reach this node?"

Use:

DFS.

Problem:

- Pacific Atlantic Water Flow

---

## Pattern 4: Cycle Detection

Use:

DFS states.

Problem:

- Course Schedule

---

# 16. Problems Covered

## 1. Clone Graph (#133)

Concept:

```
DFS + HashMap
```

Why?

Need:

Old node → New node mapping

---

## 2. Number of Islands (#200)

Concept:

```
Grid DFS
```

Count connected land areas.

---

## 3. Max Area of Island (#695)

Concept:

```
DFS returning area
```

Calculate size of connected land.

---

## 4. Pacific Atlantic Water Flow (#417)

Concept:

```
Reverse DFS
```

Instead of:

```
Cell → Ocean
```

we do:

```
Ocean → Cells
```

Find cells reachable from both oceans.

---

# DFS Interview Cheat Sheet

```
DFS

│
├── Graph DFS
│      ├── Clone Graph
│      ├── Components
│      └── Cycle Detection
│
├── Grid DFS
│      ├── Islands
│      ├── Flood Fill
│      └── Matrix Problems
│
├── DFS Return Value
│      ├── Area
│      ├── Count
│      └── Path
│
└── DFS + Backtracking
       ├── Permutations
       ├── Combinations
       └── Generate Parentheses
```

---

# Golden Rules

1. **Always ask: "What are my nodes and edges?"**
2. **Graphs need visited because cycles exist.**
3. **Mark visited before exploring neighbors.**
4. **DFS = Explore deeply, then backtrack.**
5. **For grids, every cell is a node.**
6. **For shortest path, prefer BFS.**
7. **For exploring all possibilities, DFS is usually the first choice.**

---

# DFS Decision Tree

```
Need to explore everything?

        |
        ↓

       DFS


----------------------


Grid problem?

        |
        ↓

   Grid DFS


----------------------


Need count groups?

        |
        ↓

 DFS Components


----------------------


Need detect cycle?

        |
        ↓

 DFS + States


----------------------


Need shortest path?

        |
        ↓

       BFS
```