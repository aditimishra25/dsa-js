# 🌳 Tree DFS Patterns

> **"Most Binary Tree problems are solved using DFS because a tree naturally breaks into smaller left and right subtrees."**

Tree DFS is the most important pattern for interviews.

The core idea:

```
Solve left subtree

+

Solve right subtree

+

Combine the result
```

Almost every tree DFS problem follows this pattern.

---

# Table of Contents

1. What is Tree DFS?
2. DFS Recursion Intuition
3. The Tree DFS Template
4. Understanding Return Values
5. Pattern 1 - Height / Depth
6. Pattern 2 - Compare Trees
7. Pattern 3 - Path Problems
8. Pattern 4 - Diameter
9. Pattern 5 - Maximum Path Sum
10. Pattern 6 - Lowest Common Ancestor
11. Complexity
12. Common Mistakes
13. Problems Covered
14. Interview Cheat Sheet

---

# 1. What is Tree DFS?

DFS means:

```
Depth First Search
```

In trees:

We go:

```
Root

↓

Left subtree

↓

Right subtree
```

---

Example:

```
          1

       /     \

      2       3

     /
    4
```

DFS:

```
1 → 2 → 4 → 3
```

---

# 2. DFS Recursion Intuition

A tree is already recursive.

Example:

```
        1

      /   \

     2     3
```

The left child is itself a tree.

The right child is also a tree.

So:

```
Tree

=

Root

+

Left Tree

+

Right Tree
```

---

When solving a problem ask:

```
What information should my child return?
```

Then:

```
Use left answer

Use right answer

Create current answer
```

---

# 3. Basic Tree DFS Template

Most important template:

```javascript
var dfs = function(node){

    if(!node){
        return;
    }


    let left = dfs(node.left);


    let right = dfs(node.right);


    // combine answer

}
```

---

The only thing that changes:

```
What do we return?
```

---

# 4. Understanding Return Values

This is the biggest interview skill.

DFS can return:

## Number

Example:

Height.

```javascript
return height;
```

---

## Boolean

Example:

Tree comparison.

```javascript
return true/false;
```

---

## Array

Example:

Traversal result.

```javascript
return nodes;
```

---

## Global Variable

Example:

Diameter.

```javascript
let answer=0;
```

Update while DFS runs.

---

# Pattern 1: Height / Depth Problems

Problems:

- Maximum Depth (#104)
- Balanced Binary Tree (#110)

---

## Intuition

Height means:

```
How far can I go from this node?
```

Example:

```
        1

        |

        2

        |

        3
```

Height:

```
2
```

---

Formula:

```
height(node)

=

1 + max(left height, right height)
```

---

Code:

```javascript
var maxDepth = function(root){

    if(!root){
        return 0;
    }


    let left = maxDepth(root.left);

    let right = maxDepth(root.right);


    return 1 + Math.max(left,right);

}
```

---

# Pattern 2: Compare Trees

Problems:

- Same Tree (#100)
- Subtree of Another Tree (#572)

---

## Same Tree

Question:

Are two trees identical?

Example:

Tree 1:

```
1

/

2
```

Tree 2:

```
1

/

2
```

Answer:

```
true
```

---

Logic:

Current nodes must match.

AND:

Left trees match.

AND:

Right trees match.

---

Template:

```javascript
var isSameTree=function(p,q){

    if(!p && !q){
        return true;
    }


    if(!p || !q){
        return false;
    }


    if(p.val!==q.val){
        return false;
    }


    return (
        isSameTree(p.left,q.left)
        &&
        isSameTree(p.right,q.right)
    );

}
```

---

# Pattern 3: Path Problems

Problems:

- Path Sum (#112)

---

Question:

Does a path from root to leaf exist with target sum?

Example:

```
        5

      /   \

     4     8

    /

   11
```

Target:

```
20
```

Path:

```
5+4+11=20
```

---

Idea:

Pass remaining sum down.

---

Code:

```javascript
var hasPathSum=function(root,targetSum){

    if(!root){
        return false;
    }


    if(!root.left && !root.right){

        return root.val===targetSum;

    }


    return (
        hasPathSum(
            root.left,
            targetSum-root.val
        )
        ||
        hasPathSum(
            root.right,
            targetSum-root.val
        )
    );

}
```

---

# Pattern 4: Diameter of Binary Tree

Problem:

- Diameter (#543)

---

Question:

Longest path between any two nodes.

Example:

```
          1

       /     \

      2       3

     /

    4
```

Longest path:

```
4-2-1-3
```

Answer:

```
3 edges
```

---

Important:

Diameter may not pass through root.

---

Formula:

At every node:

```
left height

+

right height
```

is possible diameter.

---

Need global variable:

```javascript
let diameter=0;
```

---

DFS returns:

```
height
```

while updating diameter.

---

Code:

```javascript
var diameterOfBinaryTree=function(root){

    let diameter=0;


    function dfs(node){

        if(!node){
            return 0;
        }


        let left=dfs(node.left);

        let right=dfs(node.right);


        diameter=Math.max(
            diameter,
            left+right
        );


        return 1+Math.max(left,right);

    }


    dfs(root);


    return diameter;

}
```

---

# Pattern 5: Maximum Path Sum

Problem:

- Binary Tree Maximum Path Sum (#124)

---

Similar to diameter.

Difference:

Nodes have values.

Example:

```
       -10

       / \

      9  20

         / \

        15 7
```

Maximum path:

```
15+20+7
```

Answer:

```
42
```

---

Important:

A negative branch is useless.

So:

```javascript
Math.max(child,0)
```

---

Formula:

Contribution:

```
node + max(left,right)
```

Answer:

```
left + node + right
```

---

Code:

```javascript
var maxPathSum=function(root){

    let result=-Infinity;


    function dfs(node){

        if(!node){
            return 0;
        }


        let left=Math.max(
            dfs(node.left),
            0
        );


        let right=Math.max(
            dfs(node.right),
            0
        );


        result=Math.max(
            result,
            node.val+left+right
        );


        return node.val+
        Math.max(left,right);

    }


    dfs(root);


    return result;

}
```

---

# Pattern 6: Lowest Common Ancestor

Problems:

- LCA Binary Tree (#236)
- LCA BST (#235)

---

Question:

Find lowest node containing both values.

Example:

```
          3

       /     \

      5       1

     /
    6
```

LCA of:

```
5 and 6
```

Answer:

```
5
```

---

Logic:

Ask left subtree:

"Did you find target?"

Ask right subtree:

"Did you find target?"

---

Code:

```javascript
var lowestCommonAncestor=function(root,p,q){

    if(!root || root===p || root===q){

        return root;

    }


    let left =
    lowestCommonAncestor(
        root.left,
        p,
        q
    );


    let right =
    lowestCommonAncestor(
        root.right,
        p,
        q
    );


    if(left && right){

        return root;

    }


    return left || right;

}
```

---

# Complexity

For all DFS tree problems:

Time:

```
O(N)
```

because:

Every node visited once.

---

Space:

Recursive stack:

```
O(H)
```

where:

```
H = height
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

# Common Mistakes

## Mistake 1

Not handling null.

Always start:

```javascript
if(!node)
```

---

## Mistake 2

Not knowing what DFS returns.

Before coding ask:

```
What information does parent need from child?
```

---

## Mistake 3

Using global variable unnecessarily.

Use return values when possible.

---

## Mistake 4

Confusing diameter and height.

Height:

```
Longest downward path
```

Diameter:

```
Longest path between any nodes
```

---

# Problems Covered

## Height

✅ Maximum Depth (#104)

✅ Balanced Binary Tree (#110)


## Comparison

✅ Same Tree (#100)

✅ Subtree of Another Tree (#572)


## Path

✅ Path Sum (#112)


## Advanced DFS

✅ Diameter of Binary Tree (#543)

✅ Binary Tree Maximum Path Sum (#124)


## Searching

✅ Lowest Common Ancestor (#236)


---

# Interview Cheat Sheet

```
TREE DFS


Need height?

        |
        ↓

return max(left,right)+1


------------------


Need compare?

        |
        ↓

return boolean


------------------


Need longest path?

        |
        ↓

global answer + return height


------------------


Need path?

        |
        ↓

pass information down


------------------


Need common ancestor?

        |
        ↓

left + right result
```

---

# Golden Rules

1. **Tree DFS = solve children first.**
2. **Always decide what DFS returns before writing code.**
3. **Height problems return numbers.**
4. **Comparison problems return boolean.**
5. **Path problems usually pass information downward.**
6. **Diameter and Maximum Path Sum use global answers.**
7. **Most hard tree problems are just DFS with a clever return value.**