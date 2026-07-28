# 🌐 Graphs - Fundamentals

> **"A Graph is a non-linear data structure consisting of nodes (vertices) connected by edges. Graphs are used to represent relationships between objects."**

Graphs are one of the most important topics in coding interviews because many real-world systems are naturally represented as graphs.

Examples:

- Social networks → Users connected by friendships
- Google Maps → Cities connected by roads
- Flight systems → Airports connected by flights
- Course scheduling → Courses connected by prerequisites
- Git → Commits connected by history
- Web pages → Pages connected by links

---

# Table of Contents

1. What is a Graph?
2. Graph Terminology
3. Types of Graphs
4. Graph Representation
5. Graph Traversal Overview
6. DFS vs BFS
7. Connected Components
8. Cycle Detection
9. Important Graph Algorithms
10. Complexity
11. Graph Problem Recognition
12. Interview Decision Tree
13. Graph Roadmap

---

# 1. What is a Graph?

A graph consists of:

```
Vertices (Nodes)

+

Edges (Connections)
```

Example:

```
       A
      / \
     B   C
      \ /
       D
```

Nodes:

```
A B C D
```

Edges:

```
A-B

A-C

B-D

C-D
```

A graph describes relationships between objects.

---

# 2. Graph Terminology

## Vertex / Node

A single entity in the graph.

Example:

```
A
```

is a node.

---

## Edge

A connection between two nodes.

Example:

```
A -------- B
```

The connection between A and B is an edge.

---

## Neighbor

A node directly connected to another node.

Example:

```
A ---- B ---- C
```

Neighbors of B:

```
A and C
```

---

## Degree

Number of edges connected to a node.

Example:

```
      B
      |
A --- C --- D
      |
      E
```

Degree of C:

```
4
```

because C connects to:

```
A B D E
```

---

## Path

A sequence of nodes connected by edges.

Example:

```
A → B → D
```

Path length:

```
Number of edges
```

---

## Cycle

A path that starts and ends at the same node.

Example:

```
A → B → C → A
```

The graph contains a cycle.

---

## Connected Component

A group of nodes where every node can reach another node.

Example:

```
A ---- B


C ---- D
```

There are two connected components.

Component 1:

```
A,B
```

Component 2:

```
C,D
```

---

# 3. Types of Graphs

## 1. Undirected Graph

Edges work in both directions.

Example:

Friendship.

```
A -------- B
```

Means:

```
A knows B

and

B knows A
```

Representation:

```
A: [B]

B: [A]
```

---

## 2. Directed Graph

Edges have direction.

Example:

Instagram follow.

```
A -----> B
```

Means:

```
A follows B
```

but B may not follow A.

Representation:

```
A: [B]
```

---

## 3. Weighted Graph

Edges have values.

Example:

Road distance.

```
Mumbai ----500km---- Pune
```

Representation:

```
A: [(B,500)]
```

Used in:

- Dijkstra
- Bellman Ford
- Floyd Warshall

---

## 4. Unweighted Graph

All edges have equal cost.

Example:

```
A ---- B ---- C
```

Used in:

- BFS shortest path

---

## 5. Cyclic Graph

Contains a cycle.

Example:

```
A → B → C → A
```

---

## 6. Acyclic Graph

No cycles.

Example:

```
A → B → C
```

---

## 7. DAG

Directed Acyclic Graph.

Meaning:

```
Directed

+

No Cycles
```

Example:

```
Course 1

↓

Course 2

↓

Course 3
```

Used in:

- Course Schedule
- Build systems
- Dependency management

---

# 4. Graph Representation

There are mainly two ways.

---

# 4.1 Adjacency List

Most commonly used in interviews.

Stores neighbors of each node.

Example:

Graph:

```
A ---- B
|
|
C
```

Adjacency List:

```javascript
{
 A: [B,C],
 B: [A],
 C: [A]
}
```

---

## Space Complexity

```
O(V + E)
```

where:

```
V = vertices

E = edges
```

Most efficient for sparse graphs.

---

## JavaScript Example

```javascript
let graph = {
    0:[1,2],
    1:[0],
    2:[0]
}
```

Access neighbors:

```javascript
for(let neighbor of graph[node]){

}
```

---

# 4.2 Adjacency Matrix

A 2D array.

Example:

Graph:

```
0 ---- 1
|
|
2
```

Matrix:

```
    0 1 2

0   0 1 1

1   1 0 0

2   1 0 0
```

---

Space:

```
O(V²)
```

Used when:

- Graph is small
- Need constant time edge lookup

---

# 5. Graph Traversal Overview

Traversal means visiting all nodes.

Two main techniques:

```
1. DFS

2. BFS
```

---

# 6. DFS vs BFS

## DFS

Depth First Search.

Idea:

```
Go as deep as possible

then backtrack
```

Example:

```
       A
      / \
     B   C
    /
   D
```

DFS order:

```
A → B → D → C
```

Uses:

```
Stack

or

Recursion
```

Common problems:

- Number of Islands
- Clone Graph
- Connected Components

---

## BFS

Breadth First Search.

Idea:

```
Explore level by level
```

Example:

```
       A
      / \
     B   C
    /
   D
```

BFS order:

```
A → B → C → D
```

Uses:

```
Queue
```

Common problems:

- Shortest Path
- Word Ladder
- Rotting Oranges

---

# 7. Connected Components

A connected component is an isolated group of nodes.

Example:

```
1 ---- 2


3 ---- 4 ---- 5
```

Components:

```
{1,2}

{3,4,5}
```

How to find?

Run DFS/BFS from every unvisited node.

---

Algorithm:

```
count = 0

for every node:

    if not visited:

        DFS(node)

        count++
```

---

Used in:

- Number of Provinces
- Number of Connected Components

---

# 8. Cycle Detection

Cycles are important because they can create infinite loops.

---

## Undirected Graph

Use:

```
DFS + Parent tracking
```

Example:

```
A-B-C

```

While visiting C:

Parent:

```
B
```

Do not consider B as cycle.

---

## Directed Graph

Use:

```
DFS states
```

Three states:

```
0 = unvisited

1 = visiting

2 = completed
```

Cycle exists if:

```
we reach a node with state 1
```

Used in:

- Course Schedule

---

# 9. Important Graph Algorithms

## 1. DFS

Purpose:

Explore graph.

Used for:

- Islands
- Components
- Cycle detection

---

## 2. BFS

Purpose:

Shortest path in unweighted graph.

Used for:

- Word Ladder
- Rotting Oranges

---

## 3. Topological Sort

Purpose:

Ordering dependencies.

Used for:

- Course Schedule

---

## 4. Union Find

Purpose:

Track connected groups.

Used for:

- Redundant Connection

---

## 5. Dijkstra

Purpose:

Shortest path with positive weights.

---

## 6. Bellman Ford

Purpose:

Shortest path with negative weights.

---

## 7. Minimum Spanning Tree

Algorithms:

- Kruskal
- Prim

---

# 10. Complexity

For most graph traversal algorithms:

```
O(V + E)
```

Why?

Each:

Node visited once

+

Each edge checked once

---

| Algorithm | Time |
|---|---|
| DFS | O(V+E) |
| BFS | O(V+E) |
| Topological Sort | O(V+E) |
| Union Find | Almost O(1) |
| Dijkstra | O(E log V) |

---

# 11. Graph Problem Recognition

Ask these questions:

---

## "Need to visit all connected nodes?"

Think:

```
DFS/BFS
```

Examples:

- Islands
- Components

---

## "Need shortest path?"

Think:

```
BFS
```

for unweighted graphs.

---

## "Have prerequisites/dependencies?"

Think:

```
Topological Sort
```

Examples:

- Course Schedule

---

## "Need to merge groups?"

Think:

```
Union Find
```

Examples:

- Redundant Connection

---

## "Weighted edges?"

Think:

```
Dijkstra

Bellman Ford

MST
```

---

# 12. Interview Decision Tree

```
Is it a graph problem?

          |
          ↓

Need to explore nodes?

          |
          ↓

     DFS / BFS


--------------------------------


Need shortest path?

          |
          ↓

        BFS


--------------------------------


Need ordering dependencies?

          |
          ↓

   Topological Sort


--------------------------------


Need detect connection groups?

          |
          ↓

    Union Find


--------------------------------


Weighted graph?

          |
          ↓

Dijkstra / Bellman Ford
```

---

# 13. Graph Roadmap

Recommended learning order:

```
1. Graph Basics

        ↓

2. DFS

        ↓

3. BFS

        ↓

4. Topological Sort

        ↓

5. Union Find

        ↓

6. Shortest Path Algorithms

        ↓

7. Minimum Spanning Tree
```

---

# Problems in This Folder

## DFS

- Clone Graph (#133)
- Number of Islands (#200)
- Max Area of Island (#695)
- Pacific Atlantic Water Flow (#417)


## BFS

- Rotting Oranges (#994)
- Word Ladder (#127)


## Topological Sort

- Course Schedule (#207)
- Course Schedule II (#210)


## Union Find

- Redundant Connection (#684)


---

# Final Graph Cheat Sheet

```
GRAPH

│
├── DFS
│    ├── Explore
│    ├── Components
│    ├── Islands
│    └── Cycles
│
├── BFS
│    ├── Levels
│    ├── Shortest Path
│    └── Multi-source BFS
│
├── Topological Sort
│    ├── Dependencies
│    └── Ordering
│
├── Union Find
│    ├── Groups
│    └── Connectivity
│
└── Weighted Graph
     ├── Dijkstra
     ├── Bellman Ford
     └── MST
```

---

# Golden Rules

1. **Always use a visited set in graph traversal.**
2. **DFS = explore deeply. BFS = explore level by level.**
3. **BFS is preferred for shortest path in an unweighted graph.**
4. **Topological Sort works only on DAGs.**
5. **Trees are special graphs without cycles.**
6. **Most graph problems are solved by identifying the correct traversal first.**