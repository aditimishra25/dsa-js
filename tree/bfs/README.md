# 🌳 Tree BFS (Breadth First Search) Patterns

> **"Tree BFS means visiting nodes level by level using a queue."**

Tree BFS is mainly used when the problem asks about:

- Levels
- Distance from root
- Nearest nodes
- Right/left view
- Average values at each level
- Zigzag traversal

---

# Table of Contents

1. What is Tree BFS?
2. DFS vs BFS
3. Why Queue?
4. Basic BFS Template
5. Level Order Traversal
6. Right Side View
7. Average of Levels
8. Zigzag Level Order
9. Minimum Depth
10. BFS with Null Handling
11. Complexity
12. Common Mistakes
13. Interview Cheat Sheet

---

# 1. What is Tree BFS?

BFS:

```
Breadth First Search
```

means:

```
Visit nodes level by level
```

Example:

```
             1

          /     \

         2       3

       /   \

      4     5
```

BFS order:

```
Level 0:

1


Level 1:

2 3


Level 2:

4 5
```

---

# 2. DFS vs BFS

| Feature | DFS | BFS |
|-|-|-|
| Data Structure | Stack / Recursion | Queue |
| Direction | Deep first | Level first |
| Best for | Subtree problems | Level problems |
| Space | O(H) | O(W) |
| Common questions | Height, Path | Level, Distance |

---

# 3. Why Queue?

BFS follows:

```
First In First Out
```

Example:

Queue:

```
[1]
```

Remove:

```
1
```

Add children:

```
[2,3]
```

Remove:

```
2
```

Add children:

```
[3,4,5]
```

This naturally processes levels.

---

# 4. Basic BFS Template

Most important template:

```javascript
var bfs = function(root){

    if(!root){
        return [];
    }


    let queue=[root];


    while(queue.length){


        let node=queue.shift();


        if(node.left){
            queue.push(node.left);
        }


        if(node.right){
            queue.push(node.right);
        }

    }

}
```

---

# 5. Level Order Traversal

Problem:

## Binary Tree Level Order Traversal (#102)

Question:

Return nodes level by level.

Example:

```
             3

          /     \

         9       20

                /  \

               15   7
```

Output:

```javascript
[
 [3],
 [9,20],
 [15,7]
]
```

---

## Intuition

At every step:

```
Current queue = current level
```

Process all nodes.

Then:

Add next level nodes.

---

## Code

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

# Important Concept

Why:

```javascript
let size = queue.length
```

?

Because queue contains:

```
Current level nodes

+

Future level nodes
```

We only want current level.

Example:

Before processing:

```
Queue:

[2,3]
```

size:

```
2
```

Process only these two.

Children become next level.

---

# 6. Binary Tree Right Side View

Problem:

## Binary Tree Right Side View (#199)

Question:

If you stand on the right side, which nodes can you see?

Example:

```
          1

       /     \

      2       3

       \

        5
```

Right view:

```
[1,3,5]
```

---

## Intuition

In every level:

Take the last node.

---

## Code

```javascript
var rightSideView=function(root){

    if(!root){
        return [];
    }


    let result=[];


    let queue=[root];


    while(queue.length){


        let size=queue.length;


        for(let i=0;i<size;i++){


            let node=queue.shift();


            if(i===size-1){

                result.push(node.val);

            }



            if(node.left){

                queue.push(node.left);

            }


            if(node.right){

                queue.push(node.right);

            }

        }

    }


    return result;

}
```

---

# 7. Average of Levels

Problem:

## Average of Levels in Binary Tree (#637)

Question:

Find average value of every level.

Example:

```
        3

      /   \

     9     20
```

Output:

```
[3,14.5]
```

---

## Intuition

For every level:

```
sum nodes

divide by count
```

---

## Code

```javascript
var averageOfLevels=function(root){

    let result=[];


    let queue=[root];


    while(queue.length){


        let size=queue.length;


        let sum=0;


        for(let i=0;i<size;i++){


            let node=queue.shift();


            sum+=node.val;



            if(node.left){

                queue.push(node.left);

            }


            if(node.right){

                queue.push(node.right);

            }

        }


        result.push(sum/size);

    }


    return result;

}
```

---

# 8. Zigzag Level Order Traversal

Problem:

## Binary Tree Zigzag Level Order Traversal (#103)

Question:

Alternate direction every level.

Example:

Normal:

```
[
[1],
[2,3],
[4,5,6]
]
```

Zigzag:

```
[
[1],
[3,2],
[4,5,6]
]
```

---

## Intuition

Keep a flag:

```
leftToRight
```

If true:

push normally.

If false:

reverse level.

---

## Code

```javascript
var zigzagLevelOrder=function(root){

    if(!root){
        return [];
    }


    let result=[];


    let queue=[root];


    let leftToRight=true;



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


        if(!leftToRight){

            level.reverse();

        }


        result.push(level);


        leftToRight=!leftToRight;

    }


    return result;

}
```

---

# 9. Minimum Depth

Problem:

## Minimum Depth of Binary Tree (#111)

Question:

Shortest distance from root to leaf.

Example:

```
        1

      /

     2

    /

   3
```

Depth:

```
3
```

---

DFS works.

But BFS is better.

Why?

Because BFS reaches the first leaf node.

---

## Code

```javascript
var minDepth=function(root){

    if(!root){
        return 0;
    }


    let queue=[
        [root,1]
    ];


    while(queue.length){


        let [node,depth]=queue.shift();



        if(!node.left && !node.right){

            return depth;

        }


        if(node.left){

            queue.push([
                node.left,
                depth+1
            ]);

        }


        if(node.right){

            queue.push([
                node.right,
                depth+1
            ]);

        }

    }

}
```

---

# 10. BFS With Null Handling

Never add null unnecessarily.

Wrong:

```javascript
queue.push(node.left)
```

because:

```
node.left can be null
```

Correct:

```javascript
if(node.left){
    queue.push(node.left)
}
```

---

# 11. Complexity

For all BFS tree problems:

Time:

```
O(N)
```

Every node visited once.

---

Space:

Queue stores maximum width.

```
O(W)
```

where:

```
W = maximum nodes at any level
```

---

Example:

Perfect tree:

```
        1

     /     \

    2       3

   / \     / \

  4  5    6  7
```

Maximum queue:

```
4 nodes
```

---

# 12. Common Mistakes

## Mistake 1

Forgetting level size.

Wrong:

```javascript
while(queue.length){

}
```

Need:

```javascript
let size=queue.length
```

---

## Mistake 2

Using DFS for level problems.

Example:

Question:

"Return each level"

Use:

```
BFS
```

---

## Mistake 3

Removing from queue inefficiently.

For interviews:

```javascript
queue.shift()
```

is acceptable.

For production:

Use pointer.

Example:

```javascript
let index=0;

while(index<queue.length){

 let node=queue[index++];

}
```

---

# Problems Covered

## Level Based

✅ Binary Tree Level Order Traversal (#102)

✅ Average of Levels (#637)

✅ Zigzag Traversal (#103)


## View Problems

✅ Right Side View (#199)


## Distance Problems

✅ Minimum Depth (#111)


---

# Interview Cheat Sheet

```
TREE BFS


Need level information?

          |
          ↓

        Queue


------------------


Need right/left view?

          |
          ↓

Take first/last node of level


------------------


Need shortest distance?

          |
          ↓

BFS reaches answer first


------------------


Need alternate direction?

          |
          ↓

Reverse every alternate level
```

---

# Golden Rules

1. **Tree BFS always uses a queue.**
2. **Queue size represents one level.**
3. **Process current level before adding next level.**
4. **Level questions → BFS first choice.**
5. **Shortest path in unweighted tree → BFS.**
6. **Never forget the level size variable.**