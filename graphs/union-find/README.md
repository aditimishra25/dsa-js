# 🔗 Union Find (Disjoint Set Union - DSU)

> **"Union Find is a data structure used to efficiently track connected components and detect cycles in a graph."**

Union Find is one of the most important graph algorithms for problems involving:

- Connectivity
- Groups
- Components
- Cycle detection
- Network connections

Most common interview problem:

- Redundant Connection (#684)

---

# Table of Contents

1. What is Union Find?
2. Real World Intuition
3. Why DFS/BFS is not always enough
4. Parent Array Concept
5. Find Operation
6. Union Operation
7. Path Compression
8. Union By Rank
9. Complete Template
10. Cycle Detection
11. Redundant Connection
12. Connected Components
13. Kruskal Algorithm
14. Complexity
15. Common Mistakes
16. Interview Cheat Sheet

---

# 1. What is Union Find?

Union Find is a data structure that keeps track of:

```
Which elements belong to the same group
```

It supports two main operations:

```
1. Find

2. Union
```

---

## Find

Question:

"Which group does this element belong to?"

Example:

```
1 belongs to group A
```

---

## Union

Question:

"Merge two groups together."

Example:

Before:

```
Group A:

1 2


Group B:

3 4
```

Union:

```
1 and 3
```

After:

```
1 2 3 4
```

---

# 2. Real World Intuition

Imagine people in groups.

Initially:

```
1

2

3

4
```

Everyone is separate.

---

Union:

```
1 joins 2
```

Now:

```
1 - 2
```

---

Union:

```
3 joins 4
```

Now:

```
1 - 2


3 - 4
```

---

Union:

```
2 joins 3
```

Final:

```
1 - 2 - 3 - 4
```

All belong to one group.

---

# 3. Why Not DFS/BFS?

We can find connections using DFS/BFS.

Example:

```
A-B-C
```

DFS can tell:

"Are A and C connected?"

Yes.

But imagine:

```
10,000 operations

Add connection

Check connection

Add connection

Check connection
```

Running DFS every time is expensive.

Union Find is designed for:

```
Repeated connection queries
```

---

# 4. Parent Array Concept

Union Find stores a parent for every node.

Initially:

Everyone is their own parent.

Example:

Nodes:

```
0 1 2 3 4
```

Parent:

```
[
0,
1,
2,
3,
4
]
```

Meaning:

```
0 is parent of itself

1 is parent of itself

2 is parent of itself
```

Each node is a separate group.

---

# 5. Find Operation

Find tells:

"Who is the leader/root of this group?"

Example:

```
1
|
2
|
3
```

Parent:

```
parent[3] = 2

parent[2] = 1

parent[1] = 1
```

Find(3):

Go upward:

```
3 → 2 → 1
```

Answer:

```
1
```

---

Code:

```javascript
function find(x){

    if(parent[x] === x){
        return x;
    }


    return find(parent[x]);

}
```

---

# 6. Union Operation

Union combines two groups.

Example:

```
0

1
```

Union:

```
0 and 1
```

Find parents:

```
parent of 0 = 0

parent of 1 = 1
```

Merge:

```
parent[1] = 0
```

Now:

```
0
|
1
```

---

Code:

```javascript
function union(a,b){

    let parentA = find(a);

    let parentB = find(b);


    parent[parentB] = parentA;

}
```

---

# 7. Path Compression

Problem:

Tree can become very deep.

Example:

```
1
|
2
|
3
|
4
|
5
```

Finding 5 requires:

```
5 → 4 → 3 → 2 → 1
```

Slow.

---

Path compression:

While finding:

Make every node point directly to root.

Before:

```
1
|
2
|
3
|
4
|
5
```

After find(5):

```
    1
 / / \ \
2 3 4 5
```

Now future searches are faster.

---

Implementation:

```javascript
function find(x){

    if(parent[x] !== x){

        parent[x] = find(parent[x]);

    }


    return parent[x];

}
```

---

# 8. Union By Rank

Another optimization.

Problem:

What if we always attach large tree under small tree?

Tree becomes unbalanced.

---

Solution:

Keep rank/size.

Example:

Small tree:

```
1
|
2
```

Large tree:

```
3
|
4
|
5
|
6
```

Attach smaller tree under larger tree.

---

Code:

```javascript
function union(a,b){

    let rootA=find(a);

    let rootB=find(b);


    if(rootA===rootB){
        return;
    }


    if(rank[rootA] < rank[rootB]){

        parent[rootA]=rootB;

    }

    else{

        parent[rootB]=rootA;

        if(rank[rootA]===rank[rootB]){
            rank[rootA]++;
        }

    }

}
```

---

# 9. Complete Union Find Template

Most important template:

```javascript
class UnionFind{

    constructor(n){

        this.parent=[];

        this.rank=new Array(n).fill(0);


        for(let i=0;i<n;i++){

            this.parent[i]=i;

        }

    }


    find(x){

        if(this.parent[x]!==x){

            this.parent[x]=this.find(this.parent[x]);

        }


        return this.parent[x];

    }


    union(a,b){

        let rootA=this.find(a);

        let rootB=this.find(b);


        if(rootA===rootB){

            return false;

        }


        this.parent[rootB]=rootA;


        return true;

    }

}
```

---

# 10. Cycle Detection

Union Find is very useful for detecting cycles.

Example:

Edges:

```
1-2

2-3

3-1
```

Process:

---

Add:

```
1-2
```

Groups:

```
1,2
```

---

Add:

```
2-3
```

Groups:

```
1,2,3
```

---

Add:

```
3-1
```

Check:

Are they already connected?

Yes.

Adding this creates:

```
Cycle
```

---

Rule:

If:

```
find(a) == find(b)
```

before union:

Cycle exists.

---

# 11. Redundant Connection (#684)

Problem:

You are given edges of a graph.

One extra edge creates a cycle.

Find that edge.

Example:

```
[
[1,2],

[1,3],

[2,3]
]
```

Graph:

```
    1
   / \
  2---3
```

The redundant edge:

```
[2,3]
```

---

Solution:

Process every edge.

For each:

```
if already connected

    return edge


else

    union
```

---

Template:

```javascript
var findRedundantConnection = function(edges){

    let parent=new Array(edges.length+1);


    for(let i=0;i<parent.length;i++){

        parent[i]=i;

    }


    for(let [a,b] of edges){


        let rootA=find(a);

        let rootB=find(b);


        if(rootA===rootB){

            return [a,b];

        }


        parent[rootB]=rootA;

    }

};
```

---

# 12. Connected Components

Example:

```
1-2


3-4
```

Initially:

```
4 groups
```

Union:

```
1-2
```

Groups:

```
3
```

Union:

```
3-4
```

Groups:

```
2
```

---

Count components:

```
Start with n

Every successful union:

count--
```

---

# 13. Kruskal Algorithm

Union Find is used in:

```
Minimum Spanning Tree
```

Algorithm:

1. Sort edges by weight
2. Pick smallest edge
3. If it does not create cycle:
   - Add it
   - Union nodes

Used in:

- Network design
- Minimum cost connections

---

# 14. Complexity

With:

- Path compression
- Union by rank

Operations are almost constant:

```
O(α(n))
```

where α is inverse Ackermann function.

Practically:

```
Almost O(1)
```

---

# 15. Common Mistakes

## Mistake 1

Not initializing parent.

Wrong:

```
parent = []
```

Correct:

```
parent[i]=i
```

---

## Mistake 2

Forgetting find before union.

Always:

```
rootA=find(a)

rootB=find(b)
```

---

## Mistake 3

Comparing nodes instead of roots.

Wrong:

```
if(a==b)
```

Correct:

```
if(find(a)==find(b))
```

---

## Mistake 4

Missing cycle condition.

If:

```
two nodes already have same root
```

then union creates cycle.

---

# 16. Problems Using Union Find

## Redundant Connection (#684)

Pattern:

```
Detect cycle
```

---

## Number of Connected Components (#323)

Pattern:

```
Count groups
```

---

## Accounts Merge (#721)

Pattern:

```
Merge connected users
```

---

## Kruskal Minimum Spanning Tree

Pattern:

```
Build minimum network
```

---

# DFS/BFS vs Union Find

| Feature | DFS/BFS | Union Find |
|-|-|-|
| Explore graph | Yes | No |
| Shortest path | Yes | No |
| Dynamic connections | Slow | Fast |
| Cycle detection | Yes | Yes |
| Components | Yes | Yes |
| Repeated queries | Less efficient | Excellent |

---

# Interview Cheat Sheet

```
Union Find

        |
        |
 Need connectivity?

        |
        ↓

      DSU


        |
        |
 Adding edges one by one?

        |
        ↓

      Union


        |
        |
 Same group?

        |
        ↓

      Find


        |
        |
 Already connected?

        |
        ↓

      Cycle
```

---

# Golden Rules

1. **Union Find answers: "Are these nodes connected?"**
2. **Parent array stores group leaders.**
3. **Find gives the root parent.**
4. **Union merges two groups.**
5. **Same root means same component.**
6. **Same root + new edge means cycle.**
7. **Always use path compression.**
8. **Redundant Connection is the classic Union Find problem.**