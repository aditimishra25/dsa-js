# 🌳 Tree Construction From Traversals

> **"Tree construction problems rebuild a binary tree when given different traversal orders."**

These problems test whether you understand:

- Preorder
- Inorder
- Postorder
- Recursion
- Index management
- Root position logic

Most important problems:

- Construct Binary Tree from Preorder and Inorder (#105)
- Construct Binary Tree from Inorder and Postorder (#106)
- Construct Binary Tree from Preorder and Postorder (#889)

---

# Table of Contents

1. Why Build Trees From Traversals?
2. Traversal Properties
3. Preorder + Inorder Pattern
4. Inorder + Postorder Pattern
5. Preorder + Postorder Pattern
6. HashMap Optimization
7. Complete Templates
8. Complexity
9. Common Mistakes
10. Interview Cheat Sheet

---

# 1. Why Build Trees From Traversals?

A traversal gives us an order of visiting nodes.

Example tree:

```
             3

          /     \

         9       20

                /  \

               15   7
```

---

Preorder:

```
Root Left Right
```

Output:

```
[3,9,20,15,7]
```

---

Inorder:

```
Left Root Right
```

Output:

```
[9,3,15,20,7]
```

---

Postorder:

```
Left Right Root
```

Output:

```
[9,15,7,20,3]
```

---

Using these orders we can rebuild the original tree.

---

# 2. Traversal Properties

Important rules:

---

# Preorder

Format:

```
Root Left Right
```

The first element is always:

```
Root
```

Example:

```
[3,9,20,15,7]

 ^
 root
```

---

# Inorder

Format:

```
Left Root Right
```

Root separates:

```
Left subtree | Root | Right subtree
```

Example:

```
[9,3,15,20,7]

    left  root right
```

---

# Postorder

Format:

```
Left Right Root
```

The last element is:

```
Root
```

Example:

```
[9,15,7,20,3]

              ^
             root
```

---

# Pattern 1:
# Construct Binary Tree From Preorder + Inorder

Problem:

## Leetcode #105

---

Given:

Preorder:

```
[3,9,20,15,7]
```

Inorder:

```
[9,3,15,20,7]
```

Build:

```
             3

          /     \

         9       20

                /  \

               15   7
```

---

# Intuition

Step 1:

Preorder gives root.

```
preorder[0]
```

Root:

```
3
```

---

Step 2:

Find root in inorder.

```
[9,3,15,20,7]

    ^
    3
```

Everything left:

```
[9]
```

belongs to left subtree.

Everything right:

```
[15,20,7]
```

belongs to right subtree.

---

Step 3:

Repeat recursively.

---

# Visual

```
        3

       / \

      9   20
         /  \

        15   7
```

---

## Optimized Code

```javascript
var buildTree = function(preorder, inorder){

    let map=new Map();


    for(let i=0;i<inorder.length;i++){

        map.set(inorder[i],i);

    }


    let preIndex=0;



    function dfs(left,right){


        if(left>right){

            return null;

        }


        let rootValue=preorder[preIndex++];


        let root=new TreeNode(rootValue);



        let mid=map.get(rootValue);



        root.left=dfs(
            left,
            mid-1
        );


        root.right=dfs(
            mid+1,
            right
        );


        return root;

    }



    return dfs(
        0,
        inorder.length-1
    );

}
```

---

# Why preorder index increases?

Example:

```
preorder:

3,9,20,15,7
```

Order:

```
3

then left root

then right root
```

So every recursive call consumes:

```
one preorder value
```

---

# Pattern 2:
# Construct Binary Tree From Inorder + Postorder

Problem:

## Leetcode #106

---

Given:

Inorder:

```
[9,3,15,20,7]
```

Postorder:

```
[9,15,7,20,3]
```

---

# Intuition

Postorder:

```
Left Right Root
```

Therefore:

Last element is root.

```
postorder[last]
```

Root:

```
3
```

---

Find root in inorder:

```
[9,3,15,20,7]

    ^
    3
```

Left:

```
[9]
```

Right:

```
[15,20,7]
```

---

Important difference:

Postorder is processed:

```
RIGHT FIRST
```

because we consume from the end.

---

## Code

```javascript
var buildTree=function(inorder,postorder){

    let map=new Map();


    for(let i=0;i<inorder.length;i++){

        map.set(inorder[i],i);

    }


    let postIndex=postorder.length-1;



    function dfs(left,right){


        if(left>right){

            return null;

        }


        let rootValue=
        postorder[postIndex--];


        let root=new TreeNode(rootValue);



        let mid=map.get(rootValue);



        root.right=
        dfs(
            mid+1,
            right
        );


        root.left=
        dfs(
            left,
            mid-1
        );


        return root;

    }



    return dfs(
        0,
        inorder.length-1
    );

}
```

---

# Why Right First?

Postorder:

```
Left Right Root
```

Example:

```
9,15,7,20,3
          ^
         root
```

After removing root:

Remaining end contains:

```
right subtree
```

So process:

```
Right

then Left
```

---

# Pattern 3:
# Construct From Preorder + Postorder

Problem:

## Leetcode #889

---

Given:

Preorder:

```
[1,2,4,5,3,6,7]
```

Postorder:

```
[4,5,2,6,7,3,1]
```

---

# Intuition

Preorder:

```
Root Left Right
```

First element:

```
Root
```

Postorder:

```
Left Right Root
```

Last element:

```
Root
```

---

Root:

```
1
```

Next preorder value:

```
2
```

is left subtree root.

Find 2 in postorder.

Everything before 2:

```
left subtree
```

Everything after:

```
right subtree
```

---

# Important

Unlike #105:

Preorder + Postorder does NOT always give unique tree.

Why?

Because single-child nodes create ambiguity.

Example:

```
   1

  /

 2
```

and:

```
   1

    \

     2
```

have same traversals.

---

# 4. HashMap Optimization

Without HashMap:

Finding root position:

```
O(N)
```

every recursion.

Total:

```
O(N²)
```

---

Using HashMap:

Store:

```
value -> index
```

Example:

```
{
9:0,
3:1,
15:2,
20:3,
7:4
}
```

Finding root:

```
O(1)
```

---

# 5. General Tree Construction Template

Almost every problem follows:

```javascript
function build(left,right){

    if(left>right){

        return null;

    }


    find root


    create node


    build left subtree


    build right subtree


    return node;

}
```

---

# 6. Complexity

## With HashMap

Time:

```
O(N)
```

because every node created once.

---

Space:

```
O(N)
```

for:

- HashMap
- Recursion stack

---

# 7. Common Mistakes

## Mistake 1

Using wrong root.

Remember:

Preorder:

```
first element
```

Postorder:

```
last element
```

---

## Mistake 2

Wrong subtree order.

Preorder:

```
Left first
Right second
```

Postorder:

```
Right first
Left second
```

when consuming backwards.

---

## Mistake 3

Not using HashMap.

Searching inorder repeatedly causes:

```
O(N²)
```

---

## Mistake 4

Incorrect base condition.

Always:

```javascript
if(left>right)
```

return:

```
null
```

---

# Problems Covered

## Preorder + Inorder

✅ Construct Binary Tree from Preorder and Inorder (#105)


## Inorder + Postorder

✅ Construct Binary Tree from Inorder and Postorder (#106)


## Preorder + Postorder

✅ Construct Binary Tree from Preorder and Postorder (#889)

---

# Interview Cheat Sheet

```
TREE CONSTRUCTION


Need root?

        |
        ↓

Preorder first

Postorder last


-------------------


Need split?

        |
        ↓

Find root in inorder


-------------------


Need fast lookup?

        |
        ↓

HashMap


-------------------


Using postorder backwards?

        |
        ↓

Build RIGHT first
```

---

# Golden Rules

1. **Preorder gives root first.**
2. **Postorder gives root last.**
3. **Inorder splits left and right subtree.**
4. **Always use HashMap for inorder lookup.**
5. **Recursive boundaries define subtree.**
6. **Postorder from end means build right subtree first.**
7. **Most construction problems are the same pattern with different traversal order.**