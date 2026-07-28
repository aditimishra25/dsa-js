````md id="linked-list-readme"
# 🔗 Linked List

> **"A Linked List is a chain of nodes where each node stores data and a pointer to the next node."**

Unlike arrays, linked lists **do not store elements in contiguous memory**. Each node points to the next node, making insertion and deletion efficient but random access slow.

Linked Lists are one of the most frequently tested interview topics because they assess your understanding of **pointers/references**, **edge cases**, and **in-place manipulation**.

---

# Table of Contents

1. What is a Linked List?
2. Why Linked Lists?
3. Array vs Linked List
4. Types of Linked Lists
5. Memory Representation
6. Time Complexity
7. Recognition Guide
8. Core Pointer Techniques
9. Fast & Slow Pointer
10. Dummy Node Pattern
11. Reversal Pattern
12. Merge Pattern
13. Cycle Detection
14. Common Interview Patterns
15. Generic Templates
16. JavaScript Implementation
17. Common Mistakes
18. Problems Covered
19. Interview Questions
20. Revision Cheat Sheet

---

# 1. What is a Linked List?

A Linked List is a collection of nodes.

Each node contains

```
Data

+

Pointer to next node
```

Example

```
10 → 20 → 30 → 40 → null
```

Each box is a node.

```
Node

---------

Value

Next
```

---

JavaScript representation

```javascript
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}
```

---

# 2. Why Linked Lists?

Suppose we have

```
10 20 30 40
```

Stored in an array.

To insert

```
25
```

between 20 and 30

every element shifts.

```
O(n)
```

---

Linked List

```
20

↓

30
```

Simply change one pointer.

```
20

↓

25

↓

30
```

Only pointer updates.

```
O(1)
```

---

# 3. Array vs Linked List

| Feature | Array | Linked List |
|----------|-------|-------------|
| Random Access | O(1) | O(n) |
| Insert Beginning | O(n) | O(1) |
| Delete Beginning | O(n) | O(1) |
| Insert Middle | O(n) | O(1) (after reaching node) |
| Memory | Contiguous | Non-contiguous |

---

# 4. Types of Linked Lists

## Singly Linked List

```
10

↓

20

↓

30

↓

null
```

Only forward.

---

## Doubly Linked List

```
null ← 10 ⇄ 20 ⇄ 30 → null
```

Move both directions.

---

## Circular Linked List

```
10

↓

20

↓

30

↑

←←←
```

Last node points back to first.

---

# 5. Memory Representation

Unlike arrays

```
100

104

108

112
```

Linked Lists can exist anywhere.

```
Node A

Address 300

↓

Node B

Address 812

↓

Node C

Address 119
```

Pointers connect them.

---

# 6. Time Complexity

| Operation | Complexity |
|-----------|------------|
| Access | O(n) |
| Search | O(n) |
| Insert Head | O(1) |
| Delete Head | O(1) |
| Insert Tail | O(n) |
| Delete Tail | O(n) |
| Reverse | O(n) |

---

# 7. Recognition Guide

Ask yourself

□ Input is a linked list?

↓

Linked List problem.

------------------------

□ Need reversal?

↓

Reverse pointers.

------------------------

□ Need middle node?

↓

Fast & Slow Pointer.

------------------------

□ Detect cycle?

↓

Fast & Slow Pointer.

------------------------

□ Merge two lists?

↓

Dummy Node.

------------------------

□ Remove nth node?

↓

Two Pointers.

------------------------

□ Reverse every K nodes?

↓

Reverse Pattern.

---

# 8. Core Pointer Techniques

Every Linked List problem is usually one of these patterns.

### Pattern 1

Traversal

```
head

↓

↓

↓

null
```

---

### Pattern 2

Two Pointers

```
slow

↓

fast

↓

↓

```

---

### Pattern 3

Reverse

```
prev

curr

next
```

---

### Pattern 4

Dummy Node

```
dummy

↓

head
```

---

### Pattern 5

Merge

Two lists

↓

One sorted list

---

# 9. Fast & Slow Pointer

Also called

**Tortoise and Hare Algorithm**

Fast moves

```
2 steps
```

Slow moves

```
1 step
```

Example

```
1 → 2 → 3 → 4 → 5
```

Iteration

```
Slow

1

↓

2

↓

3

Fast

1

↓↓

3

↓↓

5
```

Used for

- Middle of Linked List
- Cycle Detection
- Happy Number
- Palindrome Linked List

---

Template

```javascript
let slow = head;
let fast = head;

while (fast && fast.next) {

    slow = slow.next;
    fast = fast.next.next;

}

return slow;
```

---

# 10. Dummy Node Pattern

One of the most important interview tricks.

Instead of handling

```
Head separately
```

create

```
Dummy

↓

Head
```

Template

```javascript
let dummy = new ListNode(0);
dummy.next = head;
```

Used in

- Merge Lists
- Remove Node
- Partition List
- Swap Nodes

---

# 11. Reverse Pattern

Original

```
1 → 2 → 3 → 4
```

Reverse

```
4 → 3 → 2 → 1
```

Need three pointers

```
prev

curr

next
```

Template

```javascript
let prev = null;
let curr = head;

while (curr) {

    let next = curr.next;

    curr.next = prev;

    prev = curr;

    curr = next;

}

return prev;
```

---

# 12. Merge Pattern

Example

```
1 3 5

2 4 6
```

↓

```
1 2 3 4 5 6
```

Usually uses

Dummy Node.

---

# 13. Cycle Detection

Problem

```
1

↓

2

↓

3

↓

4

↑

←←←
```

Need

Cycle?

Use

Fast

Slow

If

```
Fast == Slow
```

Cycle exists.

---

Template

```javascript
let slow = head;
let fast = head;

while (fast && fast.next) {

    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
        return true;
    }

}

return false;
```

---

# 14. Common Interview Patterns

## Pattern 1

Reverse

Examples

- Reverse Linked List
- Reverse K Group

---

## Pattern 2

Fast & Slow

Examples

- Middle Node
- Cycle Detection
- Happy Number

---

## Pattern 3

Merge

Examples

- Merge Two Lists
- Merge K Lists

---

## Pattern 4

Dummy Node

Examples

- Remove Nth Node
- Swap Pairs

---

## Pattern 5

Random Pointer

Example

- Copy List With Random Pointer

---

# 15. Generic Templates

## Traversal

```javascript
let curr = head;

while (curr) {

    curr = curr.next;

}
```

---

## Reverse

```javascript
let prev = null;
let curr = head;

while (curr) {

    let next = curr.next;

    curr.next = prev;

    prev = curr;

    curr = next;

}

return prev;
```

---

## Fast & Slow

```javascript
let slow = head;
let fast = head;

while (fast && fast.next) {

    slow = slow.next;
    fast = fast.next.next;

}
```

---

## Dummy Node

```javascript
let dummy = new ListNode(0);

dummy.next = head;
```

---

# 16. JavaScript Implementation

Node

```javascript
function ListNode(val, next = null) {

    this.val = val;
    this.next = next;

}
```

---

Traversal

```javascript
let curr = head;

while (curr) {

    console.log(curr.val);

    curr = curr.next;

}
```

---

# 17. Common Mistakes

❌ Forgetting

```
curr.next
```

before changing pointers.

---

❌ Losing remaining list.

Always save

```javascript
next = curr.next;
```

first.

---

❌ Forgetting

```
null
```

checks.

---

❌ Infinite loop

Not moving pointer.

---

❌ Mishandling head.

Use Dummy Node.

---

# 18. Problems Covered

## Easy

- Reverse Linked List (#206)
- Middle of Linked List (#876)
- Linked List Cycle (#141)
- Merge Two Sorted Lists (#21)

---

## Medium

- Remove Nth Node From End (#19)
- Reorder List (#143)
- Linked List Cycle II (#142)
- Copy List With Random Pointer (#138)
- LRU Cache (#146)
- Reverse Nodes in K Group (#25)

---

## Hard

- Merge K Sorted Lists (#23)
- Reverse Nodes in K Group (#25)

---

# 19. Interview Questions

### Why use Fast & Slow Pointer?

To solve problems involving

- Middle
- Cycle
- Distance between nodes

without extra space.

---

### Why Dummy Node?

It removes special handling for

head node.

Makes code cleaner.

---

### Why save next pointer?

Once

```javascript
curr.next
```

changes,

the rest of the list becomes inaccessible.

---

### Why Reverse in-place?

Extra arrays increase space.

Interviewers usually expect

```
O(1)
```

extra memory.

---

### Array vs Linked List?

Array

✔ Fast access

✔ Cache friendly

❌ Slow insertion

---

Linked List

✔ Fast insertion

✔ Flexible memory

❌ Slow access

---

# 20. Decision Tree

```
Need Middle?

        │
        ▼
 Fast & Slow Pointer

────────────────────

Need Cycle?

        │
        ▼
 Fast & Slow Pointer

────────────────────

Need Reverse?

        │
        ▼
 Reverse Pattern

────────────────────

Need Merge?

        │
        ▼
 Dummy Node

────────────────────

Need Remove?

        │
        ▼
 Dummy + Two Pointers

────────────────────

Need Random Pointer?

        │
        ▼
 HashMap
```

---

# 21. Problem Progression

## Level 1

- Reverse Linked List
- Middle of Linked List
- Linked List Cycle

---

## Level 2

- Merge Two Sorted Lists
- Remove Nth Node
- Reorder List

---

## Level 3

- Linked List Cycle II
- Copy List With Random Pointer
- LRU Cache

---

## Level 4

- Reverse Nodes in K Group
- Merge K Sorted Lists

---

# 22. Revision Cheat Sheet

## Recognition

✔ Middle Node

✔ Reverse

✔ Merge

✔ Cycle

✔ Remove

✔ Random Pointer

---

## Core Patterns

- Traversal
- Fast & Slow Pointer
- Reverse
- Dummy Node
- Merge
- HashMap

---

## Complexity

Access

```
O(n)
```

Insert Head

```
O(1)
```

Delete Head

```
O(1)
```

Reverse

```
O(n)
```

Space

```
O(1)
```

(Most problems)

---

## Golden Rules

1. **Always draw the pointers before coding.**
2. **Save `next` before modifying `curr.next`.**
3. **Use a dummy node to simplify edge cases.**
4. **Think "Fast & Slow" for middle, cycle, and distance problems.**
5. **Think "prev, curr, next" for any reversal problem.**
6. **Never lose the remaining list by overwriting pointers too early.**

---

# 23. Complete Pattern Map

```
Linked List

│
├── Traversal
│      ├── Print List
│      ├── Search
│      └── Length
│
├── Fast & Slow Pointer
│      ├── Middle Node
│      ├── Linked List Cycle
│      ├── Linked List Cycle II
│      └── Happy Number
│
├── Reverse Pattern
│      ├── Reverse Linked List
│      ├── Reverse Between
│      ├── Reverse K Group
│      └── Palindrome List
│
├── Dummy Node
│      ├── Merge Two Lists
│      ├── Remove Nth Node
│      ├── Partition List
│      └── Swap Nodes
│
├── Merge Pattern
│      ├── Merge Two Lists
│      └── Merge K Lists
│
└── HashMap
       ├── Copy Random Pointer
       └── LRU Cache
```

> **Interview Tip:** Almost every Linked List question can be solved using one of **five patterns**:
> **Traversal**, **Fast & Slow Pointer**, **Reverse**, **Dummy Node**, or **Merge**. If you can recognize which pattern applies within the first minute, you're already halfway to the solution.
````
