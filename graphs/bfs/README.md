# 🌊 BFS (Breadth First Search)

> **"BFS explores a graph level by level. It is the preferred algorithm for finding the shortest path in an unweighted graph."**

BFS is one of the most important graph traversal algorithms.

It is mainly used when we need:

- Level-by-level traversal
- Shortest path
- Minimum number of steps
- Nearest distance
- Multi-source spreading problems

---

# Table of Contents

1. What is BFS?
2. BFS Intuition
3. How BFS Works
4. Queue Data Structure
5. BFS Template
6. Level Order BFS
7. Shortest Path Using BFS
8. Multi Source BFS
9. Grid BFS
10. BFS vs DFS
11. Complexity
12. Common Mistakes
13. Problem Patterns
14. Problems Covered
15. Interview Cheat Sheet

---

# 1. What is BFS?

BFS stands for:

```
Breadth First Search
```

It explores nodes according to their distance from the starting node.

Meaning:

```
Visit all neighbors first

then move deeper
```

---

Example:

```
          A

       /     \

      B       C

     / \

    D   E
```

BFS order:

```
A → B → C → D → E
```

It visits:

```
Level 0

↓

Level 1

↓

Level 2
```

---

# 2. BFS Intuition

Imagine a stone thrown into water.

The waves spread:

```
        0


      1 1 1


    2 2 2 2 2
```

The closest points are reached first.

That is BFS.

---

# 3. How BFS Works

Example graph:

```
        0

      /   \

     1     2

    /

   3
```

Start:

```
0
```

Queue:

```
[0]
```

---

Remove:

```
0
```

Add neighbors:

```
[1,2]
```

---

Remove:

```
1
```

Add:

```
3
```

Queue:

```
[2,3]
```

---

Remove:

```
2
```

Queue:

```
[3]
```

---

Remove:

```
3
```

Done.

Traversal:

```
0 → 1 → 2 → 3
```

---

# 4. Queue Data Structure

BFS always uses:

```
Queue
```

Queue follows:

```
FIFO

First In First Out
```

Example:

```
Add:

A B C


Remove:

A first
```

---

JavaScript Queue:

```javascript
let queue = [];

queue.push(node);

let current = queue.shift();
```

---

# 5. Basic BFS Template

This is the most important template.

```javascript
var bfs = (start, graph) => {

    let queue = [];

    let visited = new Set();


    queue.push(start);

    visited.add(start);


    while(queue.length){

        let node = queue.shift();


        for(let neighbor of graph[node]){

            if(!visited.has(neighbor)){

                visited.add(neighbor);

                queue.push(neighbor);

            }

        }

    }

}
```

---

# 6. Why Do We Need Visited?

Graphs can have cycles.

Example:

```
A ---- B
|      |
|      |
C ---- D
```

Without visited:

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

...
```

Infinite loop.

---

Solution:

```javascript
let visited = new Set();
```

Before adding:

```javascript
if(!visited.has(neighbor))
```

---

# 7. Level Order BFS

Many problems ask:

"How many steps?"

or

"Minimum distance?"

For these:

we process level by level.

Template:

```javascript
let level = 0;


while(queue.length){

    let size = queue.length;


    for(let i=0;i<size;i++){

        let node = queue.shift();


        // process node


    }


    level++;

}
```

---

Why?

Because:

```
Current queue size

=

Current level nodes
```

---

Example:

```
Level 0

[A]


Level 1

[B,C]


Level 2

[D,E,F]
```

---

# 8. Shortest Path Using BFS

For an unweighted graph:

BFS always finds the shortest path.

Why?

Because it explores:

```
Distance 0

then

Distance 1

then

Distance 2
```

The first time we reach a node:

we reached it using the minimum steps.

---

Example:

```
A -- B -- C

A -- D -- C
```

From A to C:

BFS finds:

```
A-B-C

length = 2
```

---

Used in:

- Word Ladder
- Shortest Path Binary Matrix

---

# 9. Multi Source BFS

Very important interview pattern.

Normal BFS:

```
One starting point
```

Multi-source BFS:

```
Multiple starting points
```

Example:

Rotting Oranges.

Initial:

```
2 1 1

1 1 0

0 1 1
```

All rotten oranges spread together.

Instead of:

```
Start from one rotten orange
```

we put all rotten oranges in queue initially.

Queue:

```
[
 [0,0],
 [2,2]
]
```

Then BFS spreads.

---

Template:

```javascript
let queue = [];


for(each cell){

    if(source){

        queue.push(cell);

    }

}


while(queue.length){

    process(queue);

}
```

---

# 10. Grid BFS

In matrix problems:

Each cell is a node.

Example:

```
[
[1,1,0],
[0,1,0],
[1,0,1]
]
```

Neighbors:

```
Up

Down

Left

Right
```

Directions:

```javascript
let directions = [

[-1,0],

[1,0],

[0,-1],

[0,1]

];
```

---

Grid BFS Template:

```javascript
let queue = [];


queue.push([row,col]);


visited.add(`${row},${col}`);


while(queue.length){

    let [r,c] = queue.shift();


    for(let [dr,dc] of directions){

        let nr = r + dr;

        let nc = c + dc;


        if(valid){

            visited.add(`${nr},${nc}`);

            queue.push([nr,nc]);

        }

    }

}
```

---

# 11. BFS vs DFS

| Feature | BFS | DFS |
|-|-|-|
| Data Structure | Queue | Stack/Recursion |
| Traversal | Level by level | Deep first |
| Shortest Path | Yes | No |
| Memory | More | Less |
| Cycle Detection | Yes | Yes |
| Components | Yes | Yes |
| Grid Problems | Yes | Yes |

---

# 12. When To Use BFS?

Think BFS when you see:

## Minimum steps

Example:

```
Minimum moves
```

---

## Shortest path

Example:

```
Nearest node
```

---

## Level order

Example:

```
Distance from source
```

---

## Spreading

Example:

```
Infection spreads

Fire spreads

Rot spreads
```

---

## Transformation

Example:

```
Change one word to another
```

---

# 13. Complexity

For graph:

```
O(V + E)
```

because:

Every node visited once.

Every edge checked once.

---

For matrix:

```
O(rows * columns)
```

because:

Every cell processed once.

---

Space:

```
O(V)
```

because:

Queue + visited.

---

# 14. Common Mistakes

## Mistake 1

Using DFS for shortest path.

Wrong:

```
DFS finds first path
```

not shortest.

---

## Mistake 2

Forgetting visited.

Causes:

```
Infinite loop
```

---

## Mistake 3

Marking visited too late.

Wrong:

```
Remove from queue

↓

Mark visited
```

Correct:

```
Add to queue

↓

Mark visited immediately
```

---

## Mistake 4

Not processing level size.

Wrong:

```javascript
while(queue.length){

}
```

For distance problems use:

```javascript
let size = queue.length;
```

---

# 15. BFS Problem Patterns

---

# Pattern 1: Shortest Path BFS

Question:

"Minimum number of moves?"

Use:

```
BFS + Level count
```

Problems:

- Word Ladder
- Shortest Path Binary Matrix

---

# Pattern 2: Multi Source BFS

Question:

"Multiple things spread?"

Use:

```
Queue all sources initially
```

Problems:

- Rotting Oranges
- Walls and Gates

---

# Pattern 3: Grid BFS

Question:

"Matrix traversal?"

Treat:

```
Cell = Node
```

Problems:

- Rotting Oranges
- Shortest Path Binary Matrix

---

# Pattern 4: Graph Level Traversal

Problems:

- Binary Tree Level Order
- Graph traversal

---

# 16. Problems Covered

## 1. Rotting Oranges (#994)

Concept:

```
Multi Source BFS
```

Idea:

All rotten oranges start spreading together.

Track:

```
Minutes
```

---

## 2. Word Ladder (#127)

Concept:

```
Shortest Path BFS
```

Idea:

Each word is a node.

Changing one character creates an edge.

Find minimum transformations.

---

# BFS Interview Cheat Sheet

```
BFS

│
├── Normal BFS
│      └── Traverse graph
│
├── Level BFS
│      └── Count steps
│
├── Shortest Path BFS
│      └── Minimum distance
│
├── Multi Source BFS
│      └── Multiple starting points
│
└── Grid BFS
       └── Matrix problems
```

---

# BFS Decision Tree

```
Need shortest path?

        |
        ↓

       BFS


-------------------


Multiple sources?

        |
        ↓

 Multi Source BFS


-------------------


Grid problem?

        |
        ↓

    Grid BFS


-------------------


Need dependencies?

        |
        ↓

 Topological Sort
```

---

# Golden Rules

1. **BFS uses Queue.**
2. **The first time BFS reaches a node, it is the shortest path in an unweighted graph.**
3. **Use level counting when the problem asks for steps/time/distance.**
4. **Use multi-source BFS when multiple things spread simultaneously.**
5. **Mark visited when adding to the queue, not when removing.**
6. **Grid problems are graphs where cells are nodes and directions are edges.**
7. **BFS is preferred over DFS whenever distance matters.**