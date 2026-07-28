````md id="tree-readme"
# 🌳 Trees

> **"A Tree is a hierarchical data structure where each node has zero or more children, with exactly one root node and no cycles."**

Trees are one of the most important topics in coding interviews. They appear in **Binary Trees, Binary Search Trees (BSTs), Heaps, Tries, Segment Trees, N-ary Trees**, and many system design concepts.

Most tree problems are solved using **DFS (Recursion)** or **BFS (Queue)**.

---

# Table of Contents

1. What is a Tree?
2. Tree Terminology
3. Binary Tree
4. Binary Search Tree (BST)
5. Types of Trees
6. Tree Traversals
7. DFS vs BFS
8. Time Complexity
9. Recognition Guide
10. Common Patterns
11. Generic Templates
12. JavaScript Notes
13. Common Mistakes
14. Problems Covered
15. Interview Questions
16. Revision Cheat Sheet

---

# 1. What is a Tree?

A Tree is a collection of nodes connected by edges.

Unlike graphs,

Trees have

- One Root
- No Cycles
- Exactly one path between two nodes

Example

```
        1
       / \
      2   3
     / \
    4   5
```

Root

```
1
```

Leaves

```
3

4

5
```

---

# 2. Tree Terminology

```
        A
       / \
      B   C
     / \
    D   E
```

### Root

Topmost node.

```
A
```

---

### Parent

```
B
```

is parent of

```
D
```

---

### Child

```
D
```

is child of

```
B
```

---

### Leaf

Node with no children.

```
C

D

E
```

---

### Height

Longest path from node to leaf.

---

### Depth

Distance from root.

---

### Subtree

Any node together with all its descendants.

Example

```
    B
   / \
  D   E
```

---

# 3. Binary Tree

Each node has at most

```
2
```

children.

```
      1
     / \
    2   3
```

Children

```
Left

Right
```

---

Node structure

```javascript
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}
```

---

# 4. Binary Search Tree (BST)

Special Binary Tree.

Rule

```
Left < Root < Right
```

Example

```
        8
       / \
      3   10
     / \    \
    1   6    14
```

Searching becomes efficient.

Average

```
O(log n)
```

---

# 5. Types of Trees

## Binary Tree

Maximum 2 children.

---

## Binary Search Tree

Ordered tree.

---

## Complete Tree

Every level filled except possibly last.

---

## Full Tree

Every node has either

```
0

or

2
```

children.

---

## Perfect Tree

All leaves at same level.

Every internal node has 2 children.

---

## Balanced Tree

Height

```
≈ log n
```

Example

AVL

Red Black

---

## Skewed Tree

Looks like Linked List.

```
1

↓

2

↓

3

↓

4
```

Worst-case operations become

```
O(n)
```

---

# 6. Tree Traversals

## DFS

### Preorder

```
Root

↓

Left

↓

Right
```

Example

```
1
/ \
2 3
```

Result

```
1 2 3
```

Template

```javascript
function preorder(root) {

    if (!root) return;

    console.log(root.val);

    preorder(root.left);

    preorder(root.right);

}
```

---

### Inorder

```
Left

↓

Root

↓

Right
```

BST

Produces sorted order.

Template

```javascript
function inorder(root) {

    if (!root) return;

    inorder(root.left);

    console.log(root.val);

    inorder(root.right);

}
```

---

### Postorder

```
Left

↓

Right

↓

Root
```

Useful for

Deleting

Calculating heights

Bottom-up problems.

Template

```javascript
function postorder(root) {

    if (!root) return;

    postorder(root.left);

    postorder(root.right);

    console.log(root.val);

}
```

---

## BFS (Level Order)

Uses Queue.

```
Level 1

↓

Level 2

↓

Level 3
```

Template

```javascript
let queue = [root];

while (queue.length) {

    let node = queue.shift();

    if (node.left) queue.push(node.left);

    if (node.right) queue.push(node.right);

}
```

---

# 7. DFS vs BFS

| DFS | BFS |
|------|-----|
| Stack / Recursion | Queue |
| Goes Deep First | Goes Level by Level |
| O(h) recursion space | O(w) queue space |
| Height, Path, Subtree | Level Order, Shortest Path |

---

# 8. Time Complexity

| Operation | Complexity |
|-----------|------------|
| DFS | O(n) |
| BFS | O(n) |
| BST Search (Average) | O(log n) |
| BST Insert | O(log n) |
| BST Delete | O(log n) |
| Worst Case BST | O(n) |

---

# 9. Recognition Guide

Ask yourself

□ Binary Tree?

↓

DFS

----------------------

□ Need levels?

↓

BFS

----------------------

□ Need shortest path?

↓

BFS

----------------------

□ Need height?

↓

Postorder DFS

----------------------

□ Need sorted values?

↓

BST Inorder

----------------------

□ Need ancestor?

↓

DFS

----------------------

□ Need path?

↓

DFS + Backtracking

---

# 10. Common Patterns

## Pattern 1

Tree Traversal

Problems

- Inorder
- Preorder
- Postorder

---

## Pattern 2

Top Down DFS

Pass information from parent to child.

Examples

- Path Sum
- Good Nodes
- Max Depth

---

## Pattern 3

Bottom Up DFS

Return information upward.

Examples

- Diameter
- Balanced Tree
- Max Path Sum

---

## Pattern 4

BFS

Examples

- Level Order
- Zigzag
- Right Side View
- Average of Levels

---

## Pattern 5

BST

Examples

- Search
- Insert
- Delete
- Validate BST
- Kth Smallest

---

## Pattern 6

Tree Construction

Examples

- Preorder + Inorder
- Inorder + Postorder
- Preorder + Postorder

---

## Pattern 7

Serialization

Convert tree

↓

String

↓

Tree

---

# 11. Generic Templates

## DFS

```javascript
function dfs(root) {

    if (!root) return;

    dfs(root.left);

    dfs(root.right);

}
```

---

## BFS

```javascript
let queue = [root];

while (queue.length) {

    let size = queue.length;

    for (let i = 0; i < size; i++) {

        let node = queue.shift();

        if (node.left) queue.push(node.left);

        if (node.right) queue.push(node.right);

    }

}
```

---

## BST Search

```javascript
function search(root, target) {

    if (!root) return null;

    if (root.val === target) return root;

    if (target < root.val)
        return search(root.left, target);

    return search(root.right, target);

}
```

---

# 12. JavaScript Notes

Tree Node

```javascript
function TreeNode(val, left = null, right = null) {

    this.val = val;
    this.left = left;
    this.right = right;

}
```

---

Queue

```javascript
let queue = [];
```

---

Recursive DFS

```javascript
dfs(root.left);

dfs(root.right);
```

---

# 13. Common Mistakes

❌ Forgetting

```javascript
if (!root) return;
```

---

❌ Using preorder instead of inorder.

---

❌ Forgetting BFS level loop.

Need

```javascript
size = queue.length
```

---

❌ Not returning values from recursion.

---

❌ Confusing Tree DFS with Graph DFS.

Trees don't need a visited set because they have no cycles.

---

# 14. Problems Covered

## DFS

### Easy

- Maximum Depth (#104)
- Same Tree (#100)
- Invert Binary Tree (#226)

---

### Medium

- Path Sum (#112)
- Count Good Nodes (#1448)
- Diameter of Binary Tree (#543)
- Balanced Binary Tree (#110)
- Subtree of Another Tree (#572)

---

### Hard

- Binary Tree Maximum Path Sum (#124)

---

## BFS

- Binary Tree Level Order Traversal (#102)
- Right Side View (#199)
- Zigzag Level Order (#103)
- Average of Levels (#637)

---

## BST

- Search in BST (#700)
- Insert into BST (#701)
- Delete Node in BST (#450)
- Validate BST (#98)
- Kth Smallest (#230)
- Lowest Common Ancestor of BST (#235)

---

## Construction

- Construct from Preorder + Inorder (#105)
- Construct from Inorder + Postorder (#106)
- Construct from Preorder + Postorder (#889)

---

## Serialization

- Serialize and Deserialize Binary Tree (#297)

---

# 15. Interview Questions

## DFS or BFS?

DFS

When recursion naturally fits.

BFS

When processing by levels or finding the shortest path in an unweighted tree.

---

## Why does inorder traversal of a BST return sorted values?

Because every left subtree contains smaller values and every right subtree contains larger values.

---

## Difference between height and depth?

Height

Distance from a node to its deepest leaf.

Depth

Distance from the root to a node.

---

## Why don't trees need a visited set?

Trees contain no cycles.

Each node is reached through exactly one path.

---

## Top-down vs Bottom-up DFS?

Top-down

Pass information from parent to child.

Bottom-up

Children compute values and return them to the parent.

---

# 16. Decision Tree

```
Need Tree Traversal?

        │
        ▼
       DFS

────────────────────

Need Levels?

        │
        ▼
       BFS

────────────────────

Need Height?

        │
        ▼
 Bottom-Up DFS

────────────────────

Need Path?

        │
        ▼
 Top-Down DFS

────────────────────

Need Sorted Values?

        │
        ▼
 BST Inorder

────────────────────

Need Build Tree?

        │
        ▼
 Recursion + Traversals
```

---

# 17. Problem Progression

## Level 1

- Maximum Depth
- Same Tree
- Invert Binary Tree

---

## Level 2

- Path Sum
- Balanced Binary Tree
- Diameter of Binary Tree
- Count Good Nodes

---

## Level 3

- Binary Tree Level Order
- Right Side View
- Zigzag Level Order
- Subtree of Another Tree

---

## Level 4

- Validate BST
- Kth Smallest
- Delete Node in BST
- Lowest Common Ancestor

---

## Level 5

- Construct Binary Tree
- Serialize and Deserialize Binary Tree
- Binary Tree Maximum Path Sum

---

# 18. Revision Cheat Sheet

## Recognition

✔ Binary Tree

✔ BST

✔ Levels

✔ Height

✔ Path

✔ Ancestor

✔ Construction

---

## Core Traversals

Preorder

```
Root → Left → Right
```

Inorder

```
Left → Root → Right
```

Postorder

```
Left → Right → Root
```

Level Order

```
Top → Bottom
```

---

## Complexity

DFS

```
O(n)
```

BFS

```
O(n)
```

BST Average

```
O(log n)
```

BST Worst

```
O(n)
```

---

## Golden Rules

1. **Every recursive tree solution starts with `if (!root) return`.**
2. **Use DFS when the answer depends on a path, subtree, or recursion.**
3. **Use BFS when the answer depends on levels or shortest distance.**
4. **Inorder traversal of a BST always returns values in sorted order.**
5. **Think "Top-down" when passing information and "Bottom-up" when combining results from children.**

---

# 19. Complete Pattern Map

```
Trees

│
├── DFS
│      ├── Preorder
│      ├── Inorder
│      ├── Postorder
│      ├── Top-Down
│      └── Bottom-Up
│
├── BFS
│      ├── Level Order
│      ├── Zigzag
│      ├── Right Side View
│      └── Average of Levels
│
├── Binary Search Tree
│      ├── Search
│      ├── Insert
│      ├── Delete
│      ├── Validate
│      └── Kth Smallest
│
├── Tree Construction
│      ├── Preorder + Inorder
│      ├── Inorder + Postorder
│      └── Preorder + Postorder
│
└── Advanced
       ├── Serialization
       ├── Maximum Path Sum
       ├── Lowest Common Ancestor
       └── Diameter
```

> **Interview Tip:** Before coding any tree problem, ask these three questions:
>
> 1. **Am I processing nodes depth-first (DFS) or level-by-level (BFS)?**
> 2. **Should information flow from the root down (top-down) or from the leaves up (bottom-up)?**
> 3. **Is this a Binary Search Tree?** If yes, use the property **Left < Root < Right** to simplify the solution.
````
