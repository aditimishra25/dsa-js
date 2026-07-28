# 🌳 Binary Tree Serialization & Deserialization

> **"Serialization converts a tree into a format that can be stored or transmitted. Deserialization rebuilds the original tree from that format."**

This is one of the most important advanced tree problems.

Problem:

## Serialize and Deserialize Binary Tree (#297)

---

# Table of Contents

1. What is Serialization?
2. Real World Example
3. Why We Need Null Markers
4. Traversal Choice
5. Serialize Using Preorder
6. Deserialize Using Preorder
7. Complete Solution
8. Dry Run
9. Complexity
10. Common Mistakes
11. Interview Cheat Sheet

---

# 1. What is Serialization?

Serialization means:

```
Tree → String
```

Example:

Tree:

```
          1

        /   \

       2     3

            /

           4
```

Convert into:

```
"1,2,null,null,3,4,null,null,null"
```

---

Deserialization means:

```
String → Tree
```

Convert back:

```
"1,2,null,null,3,4,null,null,null"

          ↓


          1

        /   \

       2     3

            /

           4
```

---

# 2. Real World Example

Imagine saving a user's folder structure.

Original:

```
Folder

├── Images

└── Documents
```

Store:

```
Folder,Images,null,null,Documents,null,null
```

Later:

Read string.

Rebuild folders.

---

# 3. Why Do We Need Null Markers?

Important concept.

Consider:

Tree 1:

```
      1

     /

    2
```

Tree 2:

```
      1

       \

        2
```

Without null:

Both become:

```
1,2
```

We cannot know:

Was 2 left?

or

Was 2 right?

---

So we store:

```
null
```

for missing children.

---

Tree 1:

```
      1

     /

    2
```

Serialization:

```
1,2,null,null,null
```

---

Tree 2:

```
      1

       \

        2
```

Serialization:

```
1,null,2,null,null
```

Now we can rebuild exactly.

---

# 4. Which Traversal Should We Use?

Possible:

- Preorder
- Inorder
- Postorder
- Level Order

Most common:

```
Preorder
```

Why?

Because:

```
Root comes first
```

When rebuilding:

1. Create root
2. Build left subtree
3. Build right subtree

Exactly matches preorder.

---

Preorder:

```
Root

Left

Right
```

---

# 5. Serialize Using Preorder

Example:

```
          1

        /   \

       2     3

            /

           4
```

Traversal:

Root:

```
1
```

Left:

```
2
```

2 children:

```
null
null
```

Right:

```
3
```

Left:

```
4
```

Right:

```
null
```

Result:

```
1,2,null,null,3,4,null,null,null
```

---

# 6. Deserialize Using Preorder

Input:

```
1,2,null,null,3,4,null,null,null
```

Process one value at a time.

---

First:

```
1
```

Create:

```
        1
```

---

Next:

```
2
```

Create left child:

```
        1

       /

      2
```

---

Next:

```
null
```

2 has no left.

---

Next:

```
null
```

2 has no right.

---

Next:

```
3
```

Create right child.

Continue recursively.

---

# 7. Complete Solution

```javascript
var serialize = function(root){

    let result=[];


    function dfs(node){

        if(!node){

            result.push("null");

            return;

        }


        result.push(node.val);


        dfs(node.left);


        dfs(node.right);

    }


    dfs(root);


    return result.join(",");

};



var deserialize = function(data){

    let values=data.split(",");


    let index=0;


    function dfs(){


        if(values[index]==="null"){

            index++;

            return null;

        }


        let node=new TreeNode(
            Number(values[index])
        );


        index++;


        node.left=dfs();


        node.right=dfs();


        return node;

    }


    return dfs();

};
```

---

# 8. Dry Run

Tree:

```
        1

      /   \

     2     3
```

---

## Serialize

Start:

```
1
```

Left:

```
2
```

2 left:

```
null
```

2 right:

```
null
```

Right:

```
3
```

3 left:

```
null
```

3 right:

```
null
```

Output:

```
1,2,null,null,3,null,null
```

---

## Deserialize

Read:

```
1
```

Create root.

Read:

```
2
```

Attach left.

Read:

```
null
```

left empty.

Read:

```
null
```

right empty.

Read:

```
3
```

Attach right.

Tree restored.

---

# 9. Complexity

## Serialization

Visit every node once.

Time:

```
O(N)
```

Space:

```
O(H)
```

because recursion stack.

---

## Deserialization

Every value processed once.

Time:

```
O(N)
```

Space:

```
O(H)
```

---

# 10. Common Mistakes

## Mistake 1

Not storing null values.

Wrong:

```
1,2,3
```

Cannot reconstruct.

---

## Mistake 2

Changing traversal order.

Serialize:

```
Preorder
```

Deserialize:

must follow:

```
same preorder
```

---

## Mistake 3

Forgetting index increment.

Wrong:

```javascript
values[index]
```

without:

```javascript
index++
```

causes infinite recursion.

---

## Mistake 4

Using split incorrectly.

Input:

```
"1,2,null"
```

Need:

```javascript
data.split(",")
```

---

# 11. Why Preorder is Preferred?

Because:

```
Root → Left → Right
```

During reconstruction:

First value is always:

```
Root
```

Then:

```
Build left subtree

Build right subtree
```

Natural recursion.

---

# Interview Cheat Sheet

```
Serialize Tree


Tree

 |

Preorder DFS

 |

String


------------------


Deserialize


String

 |

Read root

 |

Build left

 |

Build right
```

---

# Golden Rules

1. **Serialization converts tree into string.**
2. **Deserialization converts string back to tree.**
3. **Always store null children.**
4. **Preorder is the easiest traversal for reconstruction.**
5. **Serialize and deserialize must use the same order.**
6. **DFS recursion is the natural solution.**
7. **Think: root → left → right.**