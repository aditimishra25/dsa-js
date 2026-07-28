# 🌳 Tree Traversals

> **"Tree Traversal means visiting every node of a tree exactly once in a specific order."**

Tree traversal is the foundation of almost every tree problem.

Before solving:

- Maximum Depth
- Diameter
- Balanced Tree
- Path Sum
- Serialize Tree
- Build Tree

you should understand traversals.

---

# Table of Contents

1. What is Traversal?
2. Types of Traversal
3. DFS Traversals
4. Preorder Traversal
5. Inorder Traversal
6. Postorder Traversal
7. BFS Level Order Traversal
8. Recursive Templates
9. Iterative Templates
10. When To Use Which Traversal
11. Complexity
12. Interview Cheat Sheet

---

# 1. What is Tree Traversal?

Traversal means:

```
Visit every node once
```

Example:

```
        1

      /   \

     2     3

    / \

   4   5
```

All nodes:

```
1,2,3,4,5
```

A traversal defines:

```
Which node to visit first
```

---

# 2. Types of Traversal

There are two major categories:

```
1. DFS

2. BFS
```

---

# DFS (Depth First Search)

Goes deep first.

Uses:

```
Recursion

or

Stack
```

Three types:

```
1. Preorder

2. Inorder

3. Postorder
```

---

# BFS (Breadth First Search)

Visits level by level.

Uses:

```
Queue
```

Example:

```
Level 0

Level 1

Level 2
```

---

# 3. DFS Traversal

Given tree:

```
             1

          /     \

         2       3

       /   \

      4     5
```

---

Different DFS orders produce different outputs.

---

# 4. Preorder Traversal

## Order:

```
Root

Left

Right
```

Remember:

```
Root comes first
```

---

Example:

Tree:

```
             1

          /     \

         2       3

       /   \

      4     5
```

Steps:

Visit root:

```
1
```

Go left:

```
2
```

Go left:

```
4
```

Go right:

```
5
```

Back to root right:

```
3
```

Output:

```
[1,2,4,5,3]
```

---

## Recursive Code

```javascript
var preorderTraversal = function(root){

    let result=[];


    function dfs(node){

        if(!node){
            return;
        }


        // Root

        result.push(node.val);


        // Left

        dfs(node.left);


        // Right

        dfs(node.right);

    }


    dfs(root);


    return result;

}
```

---

## Use Cases

Preorder is used when:

- Need copy tree
- Need save tree structure
- Serialization

Example:

```
Serialize Binary Tree
```

---

# 5. Inorder Traversal

## Order:

```
Left

Root

Right
```

Remember:

```
Root comes in middle
```

---

Example:

```
             1

          /     \

         2       3

       /   \

      4     5
```

Left subtree:

```
4,2,5
```

Root:

```
1
```

Right:

```
3
```

Output:

```
[4,2,5,1,3]
```

---

## Recursive Code

```javascript
var inorderTraversal = function(root){

    let result=[];


    function dfs(node){

        if(!node){
            return;
        }


        dfs(node.left);


        result.push(node.val);


        dfs(node.right);

    }


    dfs(root);


    return result;

}
```

---

# Special Property of BST

For Binary Search Tree:

```
Left < Root < Right
```

Inorder traversal gives:

```
Sorted order
```

Example BST:

```
        5

      /   \

     3     7

    / \

   2   4
```

Inorder:

```
2 3 4 5 7
```

---

Used in:

- Validate BST
- Kth Smallest Element

---

# 6. Postorder Traversal

## Order:

```
Left

Right

Root
```

Remember:

```
Root comes last
```

---

Example:

```
             1

          /     \

         2       3

       /   \

      4     5
```

Left:

```
4,5,2
```

Right:

```
3
```

Root:

```
1
```

Output:

```
[4,5,2,3,1]
```

---

## Recursive Code

```javascript
var postorderTraversal = function(root){

    let result=[];


    function dfs(node){

        if(!node){
            return;
        }


        dfs(node.left);


        dfs(node.right);


        result.push(node.val);

    }


    dfs(root);


    return result;

}
```

---

# Use Cases

Postorder is used when:

Need children information before parent.

Examples:

- Delete tree
- Calculate subtree values
- Diameter
- Height calculation

---

# 7. BFS Level Order Traversal

BFS visits:

```
Level by level
```

Example:

```
             1

          /     \

         2       3

       /   \

      4     5
```

Levels:

```
Level 0:

1


Level 1:

2 3


Level 2:

4 5
```

Output:

```javascript
[
 [1],
 [2,3],
 [4,5]
]
```

---

# Queue Template

```javascript
var levelOrder = function(root){

    if(!root){
        return [];
    }


    let result=[];


    let queue=[root];


    while(queue.length){


        let size=queue.length;


        let level=[];


        for(let i=0;i<size;i++){


            let node=queue.shift();


            level.push(node.val);



            if(node.left){

                queue.push(node.left);

            }


            if(node.right){

                queue.push(node.right);

            }

        }


        result.push(level);

    }


    return result;

}
```

---

# 8. Recursive vs Iterative

## Recursive DFS

Most common.

Advantages:

- Short code
- Natural for trees

Used for:

- Depth
- Diameter
- Path problems

---

## Iterative DFS

Uses stack.

Example:

```javascript
let stack=[root];

while(stack.length){

    let node=stack.pop();

}
```

Used when:

- Avoid recursion depth issues

---

## BFS

Always iterative.

Uses:

```
Queue
```

---

# 9. Traversal Comparison

| Traversal | Order | Main Use |
|-|-|-|
| Preorder | Root Left Right | Serialize |
| Inorder | Left Root Right | BST sorted order |
| Postorder | Left Right Root | Subtree calculations |
| Level Order | Level by level | Distance/levels |

---

# 10. How To Identify Traversal

## Question:

"Need current node before children?"

Use:

```
Preorder
```

Example:

Serialize tree.

---

## Question:

"Need sorted BST values?"

Use:

```
Inorder
```

Example:

Kth smallest.

---

## Question:

"Need child results before parent?"

Use:

```
Postorder
```

Example:

Diameter.

---

## Question:

"Need level information?"

Use:

```
BFS
```

Example:

Right side view.

---

# 11. Complexity

For every traversal:

Time:

```
O(N)
```

because:

Every node visited once.

---

Space:

Recursive DFS:

```
O(H)
```

where:

```
H = height
```

---

BFS:

```
O(W)
```

where:

```
W = maximum width
```

---

# 12. Interview Cheat Sheet

```
TREE TRAVERSALS


              Traversal

                   |

       -----------------------

       |                     |

      DFS                   BFS

       |                     |

 ----------------          Queue

 |       |       |

Pre    In     Post

 |       |       |

Root   BST    Children
First  Sort   First
```

---

# Golden Rules

1. **Preorder = Root first.**
2. **Inorder = Root in middle.**
3. **Postorder = Root last.**
4. **BST + Inorder = Sorted array.**
5. **Child information needed first → Postorder.**
6. **Level/distance question → BFS.**
7. **Most tree DFS problems are just postorder recursion with a return value.**

---

# Problems Using Traversals

## Preorder

- Serialize and Deserialize Binary Tree (#297)
- Construct Tree from Preorder


## Inorder

- Validate BST (#98)
- Kth Smallest Element (#230)
- Construct Tree


## Postorder

- Maximum Depth (#104)
- Diameter (#543)
- Balanced Binary Tree (#110)
- Maximum Path Sum (#124)


## BFS

- Level Order (#102)
- Right Side View (#199)
- Average Levels (#637)
- Zigzag Traversal (#103)