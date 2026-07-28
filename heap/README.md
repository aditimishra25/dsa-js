# 🏔️ Heap (Priority Queue)

> **"A Heap is not a sorted array. It is a data structure that always gives you the highest (or lowest) priority element in O(log n)."**

One of the biggest misconceptions is that Heap is just another sorting algorithm.

It isn't.

A Heap is a **Priority Queue**.

Whenever a problem asks:

- K Largest
- K Smallest
- Top K
- Highest Priority
- Lowest Cost
- Closest
- Merge Sorted Lists
- Running Median

you should immediately think:

> **Heap**

---

# Table of Contents

1. What is a Heap?
2. Why do we need a Heap?
3. Heap vs Array vs Sorting
4. Types of Heap
5. Heap Properties
6. Complete Binary Tree
7. Array Representation
8. Insert Operation
9. Remove Operation
10. Heapify
11. Time Complexity
12. Recognition Guide
13. Common Patterns
14. JavaScript Priority Queue
15. Generic Templates
16. Problems Covered
17. Common Mistakes
18. Interview Questions
19. Revision Cheat Sheet

---

# 1. What is a Heap?

A Heap is a **Complete Binary Tree** that satisfies the **Heap Property**.

There are two types:

### Max Heap

Largest element is always at the root.

```
        90
      /    \
    70      60
   /  \    /  \
 20  40  10  30
```

Root = Maximum

---

### Min Heap

Smallest element is always at the root.

```
        10
      /    \
    20      30
   /  \    /  \
 40  50  60  70
```

Root = Minimum

---

Unlike Binary Search Trees,

a Heap is **NOT fully sorted.**

Only parent-child ordering is guaranteed.

---

# 2. Why do we need a Heap?

Suppose we want the largest number.

Array

```
9 3 5 7 12 1 4
```

Need maximum

Linear Search

```
O(n)
```

---

Heap

```
Root

↓

12
```

Access

```
O(1)
```

Removal

```
O(log n)
```

Insertion

```
O(log n)
```

---

# 3. Heap vs Sorting

Suppose

```
5 9 2 1 7 4
```

Need

Largest

Sorting

```
1 2 4 5 7 9
```

Time

```
O(n log n)
```

Need only one element.

Wasteful.

---

Heap

```
Insert

↓

Root always largest

↓

Done
```

Much better for repeated insertions/removals.

---

# 4. Types of Heap

## Max Heap

Parent

```
>=
```

Children

Used for

- Largest
- Maximum Priority

---

## Min Heap

Parent

```
<=
```

Children

Used for

- Smallest
- Minimum Cost
- Closest Distance

---

# 5. Heap Property

Example

Max Heap

```
        50
      /    \
    30      40
   /  \
 10   20
```

Notice

```
50 > 30

50 > 40

30 > 10

30 > 20
```

Nothing else is guaranteed.

Children themselves need not be sorted.

---

# 6. Complete Binary Tree

Every Heap is a Complete Binary Tree.

Definition

Every level is completely filled

except possibly the last,

which is filled from left to right.

Correct

```
        A
      /   \
     B     C
    / \   /
   D  E  F
```

Wrong

```
        A
      /   \
     B     C
      \     \
       D     E
```

---

# 7. Array Representation

One of the coolest properties.

We don't need nodes.

Heap can be stored in an array.

Example

```
        50
      /    \
    30      40
   /  \
 10   20
```

Array

```
50 30 40 10 20
```

Index

```
0

↓

50
```

Children

```
Left

2*i + 1

Right

2*i + 2
```

Parent

```
Math.floor((i-1)/2)
```

Example

Index

```
3

↓

10
```

Parent

```
Math.floor((3-1)/2)

=

1

↓

30
```

---

# 8. Insert Operation

Insert

```
35
```

Step 1

Insert at end.

```
50 30 40 10 20 35
```

Step 2

Bubble Up

Compare with parent.

If larger,

swap.

Repeat.

Time

```
O(log n)
```

---

# 9. Remove Root

Suppose

```
50
```

must be removed.

Step 1

Swap root

with last.

```
20

30

40

10

50
```

Remove last.

```
20

30

40

10
```

Bubble Down.

Largest child

↓

Swap.

Repeat.

Time

```
O(log n)
```

---

# 10. Heapify

Convert an array into a heap.

Example

```
4 10 3 5 1
```

↓

Heap

```
10

5

3

4

1
```

Complexity

```
O(n)
```

This surprises many interview candidates.

Building a heap is **not** O(n log n).

---

# 11. Time Complexity

| Operation | Complexity |
|-----------|------------|
| Peek | O(1) |
| Insert | O(log n) |
| Remove Root | O(log n) |
| Heapify | O(n) |
| Build Heap | O(n) |

---

# 12. Recognition Guide

Ask yourself

□ K Largest?

↓

Heap

------------------

□ K Smallest?

↓

Heap

------------------

□ Top K Frequent?

↓

Heap

------------------

□ Closest Points?

↓

Heap

------------------

□ Merge K Sorted Lists?

↓

Heap

------------------

□ Running Median?

↓

Two Heaps

------------------

□ Highest Priority?

↓

Heap

---

# 13. Common Patterns

## Pattern 1

Top K

Examples

- Kth Largest
- Top K Frequent

---

## Pattern 2

Smallest K

Examples

- K Closest Points
- K Closest Elements

---

## Pattern 3

Merge

Examples

- Merge K Sorted Lists

---

## Pattern 4

Scheduling

Examples

- Task Scheduler
- Meeting Rooms II

---

## Pattern 5

Running Median

Two Heaps

Max Heap

↓

Lower Half

Min Heap

↓

Upper Half

---

# 14. JavaScript Priority Queue

JavaScript doesn't have a built-in Heap.

On LeetCode,

you'll often implement one or use a custom Priority Queue.

Typical operations

```javascript
heap.push(x);

heap.pop();

heap.peek();
```

Internally,

these perform Bubble Up and Bubble Down.

---

# 15. Generic Templates

## Min Heap

```javascript
heap.push(value);

let smallest = heap.pop();

let top = heap.peek();
```

---

## Max Heap

Usually implemented by

- reversing comparator, or
- storing negative values.

---

## Keep Only K Elements

```javascript
for (let num of nums) {

    heap.push(num);

    if (heap.size() > k) {
        heap.pop();
    }

}
```

Root becomes

Kth Largest.

---

# 16. Problems Covered

## Easy

- Last Stone Weight (#1046)

---

## Medium

- Kth Largest Element in an Array (#215)
- Top K Frequent Elements (#347)
- K Closest Points to Origin (#973)
- Task Scheduler (#621)
- Reorganize String (#767)

---

## Hard

- Find Median from Data Stream (#295)
- Merge K Sorted Lists (#23)
- Sliding Window Median (#480)

---

# 17. Common Mistakes

❌ Thinking Heap is sorted.

Only root is guaranteed.

---

❌ Using sorting for Top K.

Sorting

```
O(n log n)
```

Heap

```
O(n log k)
```

Much better when

```
k << n
```

---

❌ Forgetting Bubble Up.

---

❌ Forgetting Bubble Down.

---

❌ Mixing Min Heap and Max Heap.

---

# 18. Interview Questions

## Why use a Heap instead of sorting?

Sorting arranges every element.

Heap only keeps the most important element accessible.

---

## Why is insertion O(log n)?

Because Bubble Up moves at most the height of the tree.

Height

```
log₂ n
```

---

## Why is removal O(log n)?

Bubble Down travels at most the tree height.

---

## Why is peek O(1)?

Root is always at index

```
0
```

---

## Why is Build Heap O(n)?

Most nodes are already near the bottom of the tree and require very little work.

---

## Heap vs Binary Search Tree

Heap

✔ Fast Min/Max

❌ Slow search

BST

✔ Ordered traversal

✔ Efficient search

---

# 19. Decision Tree

```
Need K Largest?

        │
        ▼
      Heap

──────────────

Need K Smallest?

        │
        ▼
      Heap

──────────────

Need Highest Priority?

        │
        ▼
      Heap

──────────────

Need Running Median?

        │
        ▼
    Two Heaps

──────────────

Need Merge K Lists?

        │
        ▼
      Heap
```

---

# 20. Revision Cheat Sheet

## Recognition

✔ Top K

✔ K Largest

✔ K Smallest

✔ Closest

✔ Merge

✔ Priority

✔ Running Median

---

## Heap Types

Max Heap

Root = Largest

---

Min Heap

Root = Smallest

---

## Core Operations

Peek

```
O(1)
```

Insert

```
O(log n)
```

Remove

```
O(log n)
```

Heapify

```
O(n)
```

---

## Array Formula

Parent

```
Math.floor((i - 1) / 2)
```

Left Child

```
2 * i + 1
```

Right Child

```
2 * i + 2
```

---

## Golden Rule

> **If a problem asks for the "top", "largest", "smallest", "closest", or "highest priority" elements—and you don't need the entire collection sorted—think Heap before sorting. A Heap often reduces the complexity from O(n log n) to O(n log k), making it the preferred interview solution.**