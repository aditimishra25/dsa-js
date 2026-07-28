````md
# 📚 Stack

> **"A Stack is a Last-In-First-Out (LIFO) data structure where the last element inserted is the first one removed."**

Stacks are one of the most important interview data structures because they naturally solve problems involving **nested structures**, **matching pairs**, **undo operations**, **expression evaluation**, **monotonic properties**, and **DFS**.

Many problems that look complicated become simple once you realize:

> **"I only care about the most recently seen element."**

---

# Table of Contents

1. What is a Stack?
2. Why Stack?
3. LIFO Principle
4. Stack Operations
5. Time Complexity
6. Stack vs Queue
7. Recognition Guide
8. Monotonic Stack
9. Common Patterns
10. Generic Templates
11. JavaScript Notes
12. Common Mistakes
13. Problems Covered
14. Interview Questions
15. Revision Cheat Sheet

---

# 1. What is a Stack?

A Stack stores elements using the **Last In First Out (LIFO)** principle.

Imagine stacking plates.

```
Plate 1

↓

Plate 2

↓

Plate 3
```

You remove

```
Plate 3
```

first.

Not

```
Plate 1
```

---

Example

Push

```
10

20

30
```

Stack

```
30  ← Top

20

10
```

Pop

```
30
```

Remaining

```
20

10
```

---

# 2. Why Stack?

Suppose you're typing

```
((()))
```

Every opening bracket waits for a matching closing bracket.

Which bracket closes first?

The most recent one.

Perfect for a Stack.

---

Another example

Undo in editors.

```
Type A

↓

Type B

↓

Type C
```

Undo removes

```
C

↓

B

↓

A
```

LIFO.

---

# 3. LIFO Principle

Last In

↓

First Out

Example

```
Push

1

2

3

4
```

Pop Order

```
4

3

2

1
```

---

# 4. Stack Operations

### Push

Insert element.

```javascript
stack.push(x);
```

---

### Pop

Remove top.

```javascript
stack.pop();
```

---

### Peek / Top

View top.

```javascript
stack[stack.length - 1];
```

---

### Empty?

```javascript
stack.length === 0
```

---

# 5. Time Complexity

| Operation | Complexity |
|-----------|------------|
| Push | O(1) |
| Pop | O(1) |
| Peek | O(1) |
| Empty | O(1) |

---

# 6. Stack vs Queue

Stack

```
LIFO
```

```
Push

↓

Push

↓

Push

↓

Pop
```

---

Queue

```
FIFO
```

```
Enqueue

↓

Enqueue

↓

Dequeue
```

---

| Stack | Queue |
|--------|-------|
| Last In First Out | First In First Out |
| DFS | BFS |
| Undo | Scheduling |
| Parentheses | Level Order |

---

# 7. Recognition Guide

Ask yourself

□ Need latest element?

↓

Stack

---------------------

□ Matching brackets?

↓

Stack

---------------------

□ Undo?

↓

Stack

---------------------

□ Previous Greater?

↓

Monotonic Stack

---------------------

□ Next Greater?

↓

Monotonic Stack

---------------------

□ Evaluate expression?

↓

Stack

---------------------

□ Nested structure?

↓

Stack

---

# 8. Monotonic Stack

One of the most important interview patterns.

Instead of keeping every element,

maintain an increasing or decreasing stack.

---

## Increasing Stack

```
1

3

5

8
```

Each new element is larger.

Used for

- Previous Smaller
- Next Smaller

---

## Decreasing Stack

```
9

7

5

2
```

Used for

- Next Greater
- Previous Greater

---

Example

```
2 1 5 6 2 3
```

Largest Rectangle

Needs Monotonic Stack.

---

# 9. Common Patterns

## Pattern 1

Matching Parentheses

Problems

- Valid Parentheses
- Minimum Remove

---

## Pattern 2

Expression Evaluation

Problems

- Reverse Polish Notation
- Basic Calculator

---

## Pattern 3

Monotonic Stack

Problems

- Next Greater Element
- Daily Temperatures
- Largest Rectangle
- Car Fleet

---

## Pattern 4

Simulation

Problems

- Asteroid Collision
- Baseball Game

---

## Pattern 5

Custom Stack

Problems

- Min Stack
- Max Stack

---

# 10. Generic Templates

## Normal Stack

```javascript
let stack = [];

stack.push(x);

stack.pop();

let top = stack[stack.length - 1];
```

---

## Monotonic Increasing Stack

```javascript
let stack = [];

for (let num of nums) {

    while (stack.length &&
           stack[stack.length - 1] > num) {

        stack.pop();

    }

    stack.push(num);

}
```

---

## Monotonic Decreasing Stack

```javascript
let stack = [];

for (let num of nums) {

    while (stack.length &&
           stack[stack.length - 1] < num) {

        stack.pop();

    }

    stack.push(num);

}
```

---

## Parentheses

```javascript
for (let ch of s) {

    if (opening) {

        stack.push(ch);

    } else {

        if (stack.length === 0)
            return false;

        stack.pop();

    }

}
```

---

# 11. JavaScript Notes

Create Stack

```javascript
let stack = [];
```

Push

```javascript
stack.push(x);
```

Pop

```javascript
stack.pop();
```

Peek

```javascript
stack[stack.length - 1];
```

Empty

```javascript
stack.length === 0
```

---

# 12. Common Mistakes

❌ Accessing top of an empty stack.

Always check

```javascript
stack.length
```

first.

---

❌ Forgetting to pop.

Many algorithms require removing invalid elements.

---

❌ Confusing Stack with Queue.

Stack

```
LIFO
```

Queue

```
FIFO
```

---

❌ Wrong monotonic direction.

Increasing Stack

↓

Next Smaller

Decreasing Stack

↓

Next Greater

---

❌ Pushing values when indices are required.

Some problems (Daily Temperatures, Largest Rectangle) need **indices**, not values.

---

# 13. Problems Covered

## Easy

- Valid Parentheses (#20)
- Min Stack (#155)

---

## Medium

- Evaluate Reverse Polish Notation (#150)
- Decode String (#394)
- Asteroid Collision (#735)
- Daily Temperatures (#739)
- Next Greater Element I (#496)
- Next Greater Element II (#503)
- Car Fleet (#853)

---

## Hard

- Largest Rectangle in Histogram (#84)
- Trapping Rain Water (#42) *(also Two Pointers)*

---

# 14. Interview Questions

## Why use a Stack?

Because the most recently added element is needed first.

---

## Difference between Stack and Queue?

Stack

```
LIFO
```

Queue

```
FIFO
```

---

## Why use indices instead of values?

Indices let us compute

- distance
- width
- positions

Example

Daily Temperatures

Need

```
Current Index

-

Previous Index
```

---

## What is a Monotonic Stack?

A stack that is always sorted in one direction.

Increasing

or

Decreasing.

---

## Why is Stack O(1)?

Push and Pop happen only at the top.

---

# 15. Decision Tree

```
Matching Brackets?

        │
        ▼
      Stack

────────────────────

Undo?

        │
        ▼
      Stack

────────────────────

Expression?

        │
        ▼
      Stack

────────────────────

Next Greater?

        │
        ▼
Monotonic Stack

────────────────────

Next Smaller?

        │
        ▼
Monotonic Stack

────────────────────

Need Width/Distance?

        │
        ▼
Store Indices
```

---

# 16. Problem Progression

## Level 1

- Valid Parentheses
- Min Stack

---

## Level 2

- Evaluate Reverse Polish Notation
- Decode String
- Asteroid Collision

---

## Level 3

- Next Greater Element I
- Next Greater Element II
- Daily Temperatures

---

## Level 4

- Car Fleet
- Largest Rectangle in Histogram

---

# 17. Revision Cheat Sheet

## Recognition

✔ Latest Element

✔ Nested Structure

✔ Matching Pairs

✔ Undo

✔ Next Greater

✔ Previous Smaller

---

## Core Patterns

- Normal Stack
- Monotonic Increasing Stack
- Monotonic Decreasing Stack
- Expression Evaluation
- Simulation

---

## Complexity

Push

```
O(1)
```

Pop

```
O(1)
```

Peek

```
O(1)
```

Space

```
O(n)
```

---

## Monotonic Stack Rules

Increasing Stack

```
Small → Large
```

Used for

- Next Smaller
- Previous Smaller

---

Decreasing Stack

```
Large → Small
```

Used for

- Next Greater
- Previous Greater

---

## Golden Rules

1. **If you need the most recently seen element, think Stack.**
2. **For matching symbols ((), {}, []), use a Stack.**
3. **For "Next Greater/Smaller" problems, think Monotonic Stack.**
4. **When distance or width matters, store indices instead of values.**
5. **Always check if the stack is empty before accessing the top.**

---

# 18. Complete Pattern Map

```
Stack

│
├── Basic Stack
│      ├── Valid Parentheses
│      ├── Min Stack
│      ├── Browser History
│      └── Undo Operations
│
├── Expression Evaluation
│      ├── Reverse Polish Notation
│      ├── Basic Calculator
│      └── Decode String
│
├── Monotonic Stack
│      ├── Next Greater Element
│      ├── Daily Temperatures
│      ├── Largest Rectangle
│      ├── Stock Span
│      └── Trapping Rain Water
│
├── Simulation
│      ├── Asteroid Collision
│      ├── Car Fleet
│      └── Baseball Game
│
└── Advanced
       ├── Min Stack
       ├── Max Stack
       └── Frequency Stack
```

> **Interview Tip:** When solving a Stack problem, ask yourself one question:
>
> **"Do I only care about the most recent unresolved element?"**
>
> If the answer is **yes**, a Stack is usually the right data structure. If the problem mentions **next greater/smaller**, **daily temperatures**, **histograms**, or **stock span**, it's almost certainly a **Monotonic Stack** problem.
````
