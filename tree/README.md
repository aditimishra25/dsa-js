
----------------------------------------------------------------------------------------------------------------------------
###### QUICK CHEATSHEET #######

# Trees

## DFS

- Preorder
- Inorder
- Postorder

## BFS

- Level Order
- Zigzag
- Right Side View

## BST

- Search
- Insert
- Delete
- Validate

## Construction

- Preorder + Inorder
- Inorder + Postorder

## Serialization

Serialize / Deserialize

## Complexity

Traversal

O(n)

Height

Balanced

O(log n)

Worst

O(n)

----------------------------------------------------------------------------------------------------------------------------

###### DETAILED NOTES #######
# 🌳 Trees - Fundamentals

> **"A Tree is a hierarchical data structure where nodes are connected through edges and every node has exactly one parent except the root."**

Trees are one of the most important topics in coding interviews.

Many advanced structures are based on trees:

- File systems
- Databases
- DOM structure
- Compilers
- Search engines

---

# Table of Contents

1. What is a Tree?
2. Tree Terminology
3. Binary Tree
4. Types of Binary Trees
5. Tree Representation
6. Tree Traversal Overview
7. DFS vs BFS
8. Recursive Thinking
9. Tree Problem Patterns
10. Complexity
11. Interview Decision Tree
12. Tree Roadmap

---

# 1. What is a Tree?

A tree is a connected graph with:

```
No cycles
```

and:

```
One root node
```

Example:

```
          A

        /   \

       B     C

      / \

     D   E
```

A is the root.

B,C are children.

D,E are leaves.

---

# 2. Tree Terminology

## Node

A single element.

Example:

```
A
```

---

## Root

The topmost node.

Example:

```
        A  ← root
       / \
      B   C
```

---

## Parent

A node having children.

Example:

```
A

|

B
```

A is parent of B.

---

## Child

A node below another node.

Example:

```
A

|

B
```

B is child of A.

---

## Leaf Node

A node with no children.

Example:

```
      A

     / \

    B   C
```

B and C are leaves.

---

## Height

Number of edges from node to deepest leaf.

Example:

```
        A

        |

        B

        |

        C
```

Height:

```
2
```

---

## Depth

Distance from root to a node.

Example:

```
        A  depth 0

        |

        B  depth 1

        |

        C  depth 2
```

---

# 3. Binary Tree

A tree where each node has maximum:

```
2 children
```

Children:

```
Left

Right
```

Example:

```
        1

       / \

      2   3
```

---

Node structure:

```javascript
class TreeNode{

    constructor(value){

        this.val=value;

        this.left=null;

        this.right=null;

    }

}
```

---

# 4. Types of Binary Trees

## Full Binary Tree

Every node has:

```
0 or 2 children
```

Example:

```
        A

       / \

      B   C
```

---

## Complete Binary Tree

All levels filled except possibly last.

Example:

```
        A

      /   \

     B     C

    /
   D
```

---

## Perfect Binary Tree

Every internal node has 2 children.

All leaves are at same level.

Example:

```
          A

       /     \

      B       C

     / \     / \

    D   E   F   G
```

---

## Balanced Binary Tree

Height difference between left and right subtree is small.

Used for:

- AVL Tree
- Red Black Tree

---

# 5. Tree Representation

Example:

```
        1

      /   \

     2     3
```

JavaScript:

```javascript
let root={
    val:1,
    left:{
        val:2,
        left:null,
        right:null
    },
    right:{
        val:3,
        left:null,
        right:null
    }
}
```

---

# 6. Tree Traversal Overview

Traversal means:

```
Visit every node exactly once
```

Main types:

```
DFS

BFS
```

---

# DFS Traversals

DFS explores depth.

Three orders:

```
1. Preorder

2. Inorder

3. Postorder
```

---

## Preorder

Order:

```
Root

Left

Right
```

Example:

```
        1

      /   \

     2     3
```

Output:

```
1 2 3
```

Used in:

- Copy tree
- Serialization

---

## Inorder

Order:

```
Left

Root

Right
```

Example:

```
2 1 3
```

Important:

For BST:

```
Inorder gives sorted order
```

---

## Postorder

Order:

```
Left

Right

Root
```

Used in:

- Delete tree
- Calculate subtree values

---

# 7. BFS Traversal

BFS uses:

```
Queue
```

Visits:

```
Level by level
```

Example:

```
        1

      /   \

     2     3

    /

   4
```

Output:

```
[
[1],

[2,3],

[4]
]
```

Used in:

- Level order traversal
- Right side view

---

# 8. DFS vs BFS

| Feature | DFS | BFS |
|-|-|-|
| Data Structure | Stack/Recursion | Queue |
| Traversal | Deep | Level |
| Memory | Less | More |
| Subtree problems | Best | Less useful |
| Level problems | No | Best |

---

# 9. Recursive Thinking

Most tree problems follow:

```
Solve left subtree

+

Solve right subtree

+

Combine result
```

Example:

Maximum depth:

```
depth(node)

=

1 + max(left,right)
```

---

Template:

```javascript
function dfs(node){

    if(!node){
        return;
    }


    let left=dfs(node.left);

    let right=dfs(node.right);


    return answer;

}
```

---

# 10. Tree Problem Patterns

## Pattern 1: Return Height

Problems:

- Maximum Depth
- Balanced Binary Tree

---

## Pattern 2: Compare Trees

Problems:

- Same Tree
- Subtree

---

## Pattern 3: Path Problems

Problems:

- Path Sum
- Maximum Path Sum
- Diameter

---

## Pattern 4: Lowest Common Ancestor

Question:

Find common parent.

Problems:

- LCA Binary Tree
- LCA BST

---

## Pattern 5: Build Tree

Using:

- Preorder
- Inorder
- Postorder

Problems:

- Construct Binary Tree

---

# 11. Complexity

For most tree problems:

Time:

```
O(N)
```

because every node visited once.

Space:

Recursive:

```
O(H)
```

where:

```
H = height of tree
```

---

Balanced tree:

```
O(log N)
```

Worst case:

```
O(N)
```

(skewed tree)

---

# 12. Tree Interview Decision Tree

```
Need visit every node?

        |
        ↓

      DFS


--------------------


Need level information?

        |
        ↓

      BFS


--------------------


Need sorted order?

        |
        ↓

       BST


--------------------


Need build tree?

        |
        ↓

    Traversals


--------------------


Need save/recreate tree?

        |
        ↓

 Serialization
```

---

# Tree Roadmap

```
1. Tree Basics

        ↓

2. Traversals

        ↓

3. DFS Problems

        ↓

4. BFS Problems

        ↓

5. BST

        ↓

6. Serialization

        ↓

7. Tree Construction
```

---

# Problems In This Folder

## DFS

- Maximum Depth (#104)
- Diameter (#543)
- Balanced Binary Tree (#110)
- Same Tree (#100)
- Subtree (#572)
- Path Sum (#112)
- Maximum Path Sum (#124)
- Lowest Common Ancestor (#236)

---

## BFS

- Level Order Traversal (#102)
- Right Side View (#199)
- Average Levels (#637)
- Zigzag Traversal (#103)

---

## BST

- Search BST (#700)
- Insert BST (#701)
- Delete BST (#450)
- Validate BST (#98)
- Kth Smallest (#230)

---

## Serialization

- Serialize and Deserialize Binary Tree (#297)

---

## Construction

- Build Tree From Preorder/Inorder
- Build Tree From Postorder/Inorder
- Build Tree From Preorder/Postorder

---

# Golden Rules

1. **Most tree problems are DFS with recursion.**
2. **Always define what your DFS returns.**
3. **Left subtree + Right subtree + Current node is the core pattern.**
4. **BFS is mainly for level-based questions.**
5. **BST gives sorted order using inorder traversal.**
6. **Always check base case: if(!node).**
7. **Tree recursion becomes easy once you understand the return value.**