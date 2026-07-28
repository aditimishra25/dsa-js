# 🌳 Binary Search Tree (BST)

> **"A Binary Search Tree is a binary tree where every node follows an ordering rule: left subtree contains smaller values and right subtree contains larger values."**

BST is one of the most important tree concepts because it allows:

- Faster searching
- Ordered data storage
- Efficient insertion/deletion
- Sorted traversal

---

# Table of Contents

1. What is BST?
2. BST Property
3. BST vs Binary Tree
4. Searching in BST
5. Inserting in BST
6. Deleting in BST
7. Validate BST
8. Kth Smallest Element
9. Lowest Common Ancestor in BST
10. Inorder Traversal Connection
11. Complexity
12. Common Mistakes
13. Interview Cheat Sheet

---

# 1. What is BST?

A Binary Search Tree is a binary tree with a rule:

```
Left subtree < Root < Right subtree
```

Example:

```
              8

           /     \

          3       10

        /   \        \

       1     6        14
```

Check:

Left of 8:

```
3,1,6
```

All are smaller.

Right of 8:

```
10,14
```

All are larger.

---

# 2. BST Property

For every node:

```
All left values are smaller

All right values are greater
```

Example:

```
        5

      /   \

     3     7

    / \   / \

   2  4 6   8
```

Valid BST.

---

Invalid BST:

```
        5

      /   \

     3     7

          /

         4
```

Why?

4 is:

```
smaller than 5
```

but exists in:

```
right subtree
```

Invalid.

---

# 3. BST vs Binary Tree

| Binary Tree | BST |
|-|-|
| No ordering rule | Has ordering rule |
| Search O(N) | Search O(log N) average |
| Any value anywhere | Left smaller, right larger |
| Used for hierarchy | Used for searching |

---

# 4. Searching in BST

Problem:

## Search in a Binary Search Tree (#700)

Question:

Find a value.

Example:

```
          8

       /     \

      3       10

     /
    1
```

Search:

```
10
```

---

Normal Binary Tree:

Need:

```
DFS all nodes
```

BST:

Use ordering.

---

At node 8:

10 > 8

Go right.

```
10 found
```

---

## Code

```javascript
var searchBST = function(root, val){

    if(!root){
        return null;
    }


    if(root.val===val){

        return root;

    }


    if(val < root.val){

        return searchBST(
            root.left,
            val
        );

    }


    return searchBST(
        root.right,
        val
    );

}
```

---

# 5. Inserting in BST

Problem:

## Insert into a Binary Search Tree (#701)

Question:

Insert a new value maintaining BST property.

Example:

Insert:

```
5
```

Tree:

```
        4

      /   \

     2     7
```

5 > 4:

Go right.

5 < 7:

Go left.

Insert.

```
        4

      /   \

     2     7

          /

         5
```

---

## Code

```javascript
var insertIntoBST=function(root,val){

    if(!root){

        return new TreeNode(val);

    }


    if(val < root.val){

        root.left =
        insertIntoBST(
            root.left,
            val
        );

    }

    else{

        root.right =
        insertIntoBST(
            root.right,
            val
        );

    }


    return root;

}
```

---

# 6. Deleting in BST

Problem:

## Delete Node in a BST (#450)

Deletion has 3 cases.

---

# Case 1: Node is Leaf

Example:

```
       5

      /

     3
```

Delete 3:

Simply remove.

---

# Case 2: Node has One Child

Example:

```
       5

      /

     3

    /

   2
```

Delete 3:

Connect parent directly to child.

Result:

```
       5

      /

     2
```

---

# Case 3: Node has Two Children

Example:

```
        5

      /   \

     3     7
```

Delete 5.

Need replacement.

Use:

```
Inorder successor
```

Meaning:

Smallest value in right subtree.

Here:

```
7
```

Replace 5 with 7.

---

## Code

```javascript
var deleteNode=function(root,key){

    if(!root){
        return null;
    }


    if(key < root.val){

        root.left =
        deleteNode(
            root.left,
            key
        );

    }

    else if(key > root.val){

        root.right =
        deleteNode(
            root.right,
            key
        );

    }

    else{


        // no child

        if(!root.left && !root.right){

            return null;

        }


        // one child

        if(!root.left){

            return root.right;

        }


        if(!root.right){

            return root.left;

        }


        // two children

        let successor=root.right;


        while(successor.left){

            successor=successor.left;

        }


        root.val=successor.val;


        root.right=
        deleteNode(
            root.right,
            successor.val
        );

    }


    return root;

}
```

---

# 7. Validate BST

Problem:

## Validate Binary Search Tree (#98)

Question:

Is this tree a valid BST?

---

Wrong approach:

Only compare:

```
node.left < node < node.right
```

Why wrong?

Because children can be valid but deeper nodes violate rules.

Example:

```
          10

        /    \

       5      15

             /

            6
```

6 is smaller than 10.

Invalid.

---

Need range checking.

Every node has:

```
minimum allowed value

maximum allowed value
```

---

Example:

Root:

```
10
```

Range:

```
(-Infinity, Infinity)
```

Left child:

```
( -Infinity, 10 )
```

Right child:

```
(10, Infinity)
```

---

## Code

```javascript
var isValidBST=function(root){

    function dfs(node,min,max){

        if(!node){

            return true;

        }


        if(node.val <= min ||
           node.val >= max){

            return false;

        }


        return (
            dfs(
                node.left,
                min,
                node.val
            )
            &&
            dfs(
                node.right,
                node.val,
                max
            )
        );

    }


    return dfs(
        root,
        -Infinity,
        Infinity
    );

}
```

---

# 8. Kth Smallest Element

Problem:

## Kth Smallest Element in a BST (#230)

Question:

Find kth smallest value.

Example:

```
        5

      /   \

     3     7

    /

   2
```

Inorder:

```
2 3 5 7
```

k=3

Answer:

```
5
```

---

Why?

Because:

```
BST inorder = sorted order
```

---

## Code

```javascript
var kthSmallest=function(root,k){

    let count=0;

    let answer;


    function inorder(node){

        if(!node){
            return;
        }


        inorder(node.left);


        count++;


        if(count===k){

            answer=node.val;

            return;

        }


        inorder(node.right);

    }


    inorder(root);


    return answer;

}
```

---

# 9. Lowest Common Ancestor in BST

Problem:

## Lowest Common Ancestor of BST (#235)

Different from normal binary tree.

BST gives direction.

Example:

```
          6

       /     \

      2       8

     / \     / \

    0   4   7   9
```

Find LCA:

```
2 and 8
```

Answer:

```
6
```

---

Rules:

If both values smaller:

Go left.

If both values larger:

Go right.

Otherwise:

Current node is LCA.

---

## Code

```javascript
var lowestCommonAncestor=function(root,p,q){

    if(
        p.val < root.val &&
        q.val < root.val
    ){

        return lowestCommonAncestor(
            root.left,
            p,
            q
        );

    }


    if(
        p.val > root.val &&
        q.val > root.val
    ){

        return lowestCommonAncestor(
            root.right,
            p,
            q
        );

    }


    return root;

}
```

---

# 10. Inorder Traversal Connection

Most important BST property:

```
Inorder traversal gives sorted order
```

Example:

BST:

```
       4

     /   \

    2     6

   / \

  1   3
```

Inorder:

```
1 2 3 4 6
```

---

Used in:

- Validate BST
- Kth smallest
- Convert BST to array

---

# 11. Complexity

Balanced BST:

Height:

```
log N
```

Search:

```
O(log N)
```

Insert:

```
O(log N)
```

Delete:

```
O(log N)
```

---

Worst case:

Skewed tree:

```
        5

         \

          6

           \

            7
```

Height:

```
N
```

Operations:

```
O(N)
```

---

# 12. Common Mistakes

## Mistake 1

Checking only immediate children.

Wrong:

```
left < node < right
```

Need:

```
whole subtree validation
```

---

## Mistake 2

Forgetting inorder property.

Remember:

```
BST + inorder = sorted
```

---

## Mistake 3

Delete node with two children incorrectly.

Use:

```
smallest value in right subtree
```

---

## Mistake 4

Using normal DFS for BST search.

BST gives direction.

Use it.

---

# Problems Covered

## Search

✅ Search in Binary Search Tree (#700)


## Insert/Delete

✅ Insert into BST (#701)

✅ Delete Node in BST (#450)


## Validation

✅ Validate BST (#98)


## Ordering

✅ Kth Smallest Element (#230)


## Ancestor

✅ Lowest Common Ancestor BST (#235)


---

# Interview Cheat Sheet

```
BST


Need search?

        |
        ↓

Compare value

Left smaller

Right larger


--------------------


Need sorted values?

        |
        ↓

Inorder


--------------------


Need validate?

        |
        ↓

Range checking


--------------------


Need delete?

        |
        ↓

3 cases:

0 child

1 child

2 children


--------------------


Need LCA?

        |
        ↓

Use BST direction
```

---

# Golden Rules

1. **BST = ordered binary tree.**
2. **Left < Root < Right.**
3. **Inorder traversal gives sorted values.**
4. **BST search avoids unnecessary branches.**
5. **Validate BST requires range checking.**
6. **Deletion has three cases.**
7. **Always use BST property before using DFS.**