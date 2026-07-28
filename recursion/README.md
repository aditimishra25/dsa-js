# 🔁 Recursion

> **"Recursion is a technique where a function solves a problem by calling itself on a smaller version of the same problem until it reaches a base case."**

Recursion is one of the most fundamental concepts in Computer Science. It appears in **Trees, Graphs, Dynamic Programming, Divide & Conquer, Backtracking, Binary Search, DFS**, and many interview problems.

The key to recursion is remembering that **every recursive call should make the problem smaller**.

---

# Table of Contents

1. What is Recursion?
2. Why Use Recursion?
3. Components of Recursion
4. The Call Stack
5. Recursive Thinking
6. Time & Space Complexity
7. Types of Recursion
8. Common Patterns
9. Generic Templates
10. Recursion vs Iteration
11. JavaScript Notes
12. Common Mistakes
13. Problems Covered
14. Interview Questions
15. Revision Cheat Sheet

---

# 1. What is Recursion?

A recursive function is a function that **calls itself**.

Instead of solving the whole problem at once, it solves a smaller subproblem.

Example

```
factorial(5)

↓

5 × factorial(4)

↓

5 × 4 × factorial(3)

↓

...

↓

5 × 4 × 3 × 2 × 1
```

---

Example code

```javascript
function factorial(n) {
    if (n === 1) return 1;

    return n * factorial(n - 1);
}
```

---

# 2. Why Use Recursion?

Some problems naturally break into smaller versions of themselves.

Examples

- Binary Trees
- Graph DFS
- Backtracking
- Divide & Conquer
- Merge Sort
- Quick Sort

Without recursion,

many solutions become much harder to write.

---

# 3. Components of Recursion

Every recursive function has **three parts**.

### 1. Base Case

Stops recursion.

```javascript
if (n === 0) return;
```

---

### 2. Recursive Case

Call the same function.

```javascript
solve(n - 1);
```

---

### 3. Progress

Each recursive call must move closer to the base case.

Bad

```javascript
solve(n);
```

Infinite recursion.

Good

```javascript
solve(n - 1);
```

---

# 4. The Call Stack

Every function call is stored on the **call stack**.

Example

```javascript
factorial(3)
```

Stack

```
factorial(3)

↓

factorial(2)

↓

factorial(1)
```

Now returns

```
factorial(1)

↓

factorial(2)

↓

factorial(3)
```

The stack grows during recursive calls and shrinks while returning.

---

# 5. Recursive Thinking

Instead of asking

> "How do I solve the whole problem?"

Ask

> "If the smaller problem is already solved, how do I use it?"

Example

Factorial

```
5!

=

5 × 4!
```

You don't compute 4! yourself.

You trust recursion to do it.

---

# 6. Time & Space Complexity

Depends on

- Number of recursive calls
- Work done per call

Example

Factorial

```
Calls

n
```

Time

```
O(n)
```

Space

```
O(n)
```

(Call Stack)

---

Fibonacci (naive)

```
O(2ⁿ)
```

Because every call creates two more calls.

---

# 7. Types of Recursion

## Linear Recursion

One recursive call.

```javascript
factorial(n-1)
```

---

## Binary Recursion

Two recursive calls.

```javascript
fib(n-1)

fib(n-2)
```

---

## Tree Recursion

Multiple recursive calls.

Example

DFS

Binary Trees

Graphs

---

## Tail Recursion

Recursive call is the last operation.

```javascript
return solve(n-1);
```

---

## Backtracking

Choose

↓

Explore

↓

Undo

---

# 8. Common Patterns

## Pattern 1

Reduce by One

Examples

- Factorial
- Fibonacci
- Climbing Stairs

---

## Pattern 2

Tree Traversal

Examples

- DFS
- Inorder
- Preorder
- Postorder

---

## Pattern 3

Graph DFS

Visit node

↓

Visit neighbors

---

## Pattern 4

Backtracking

Examples

- Generate Parentheses
- Permutations
- N Queens
- Sudoku

---

## Pattern 5

Divide & Conquer

Examples

- Merge Sort
- Quick Sort
- Binary Search

---

# 9. Generic Templates

## Basic Recursion

```javascript
function solve(n) {

    if (baseCase) {
        return;
    }

    solve(smallerProblem);

}
```

---

## Return Value

```javascript
function solve(n) {

    if (n === 0) return 0;

    return n + solve(n - 1);

}
```

---

## DFS

```javascript
function dfs(node) {

    if (!node) return;

    dfs(node.left);

    dfs(node.right);

}
```

---

## Backtracking

```javascript
function backtrack(path) {

    if (completed) {

        result.push([...path]);

        return;
    }

    for (...) {

        path.push(choice);

        backtrack(path);

        path.pop();

    }

}
```

---

# 10. Recursion vs Iteration

| Feature | Recursion | Iteration |
|----------|-----------|-----------|
| Uses Stack | Yes | No |
| Easier for Trees | ✅ | ❌ |
| Easier for Graph DFS | ✅ | ❌ |
| Memory | O(call stack) | O(1) |
| Faster | Usually No | Usually Yes |

---

# 11. JavaScript Notes

Recursive Function

```javascript
function solve(n) {

    if (n === 0) return;

    solve(n - 1);

}
```

---

Arrow Function

```javascript
const solve = (n) => {

    if (n === 0) return;

    solve(n - 1);

};
```

---

# 12. Common Mistakes

❌ Forgetting the base case.

Results in

```
Maximum call stack size exceeded
```

---

❌ Recursive call doesn't reduce the problem.

Infinite recursion.

---

❌ Modifying shared data incorrectly.

Especially in backtracking.

---

❌ Forgetting to return.

Example

```javascript
solve(n-1);
```

instead of

```javascript
return solve(n-1);
```

---

❌ Ignoring stack space.

Deep recursion can overflow.

---

# 13. Problems Covered

## Easy

- Fibonacci Number (#509)
- Climbing Stairs (#70)

---

## Medium

- Generate Parentheses (#22)
- Pow(x, n) (#50)
- Validate Binary Search Tree (#98)

---

## Hard

- N Queens (#51)
- Sudoku Solver (#37)
- Regular Expression Matching (#10)

---

# 14. Interview Questions

## Why use recursion?

It naturally models problems that can be divided into smaller subproblems.

---

## What is the base case?

The condition that stops recursive calls.

Without it,

the recursion never ends.

---

## Why does recursion use extra memory?

Because every function call is stored on the call stack.

---

## Difference between recursion and backtracking?

Recursion

Simply solves smaller subproblems.

Backtracking

Makes a choice,

explores,

then undoes the choice.

---

## Can recursion always be converted to iteration?

Yes.

Using an explicit stack.

---

# 15. Decision Tree

```
Problem gets smaller?

        │
        ▼
    Recursion

────────────────────

Tree?

        │
        ▼
 Recursive DFS

────────────────────

Graph?

        │
        ▼
 DFS

────────────────────

Need all combinations?

        │
        ▼
 Backtracking

────────────────────

Need divide into halves?

        │
        ▼
 Divide & Conquer
```

---

# 16. Problem Progression

## Level 1

- Fibonacci Number
- Climbing Stairs

---

## Level 2

- Generate Parentheses
- Pow(x, n)

---

## Level 3

- Binary Tree DFS
- Graph DFS

---

## Level 4

- N Queens
- Sudoku Solver

---

# 17. Revision Cheat Sheet

## Recognition

✔ Tree Traversal

✔ Graph DFS

✔ Backtracking

✔ Divide & Conquer

✔ Smaller Subproblem

---

## Components

1. Base Case
2. Recursive Call
3. Progress Toward Base Case

---

## Complexity

Time

Depends on

```
Number of Calls × Work per Call
```

Space

```
Call Stack
```

---

## Generic Skeleton

```javascript
function solve(problem) {

    if (baseCase) {
        return answer;
    }

    // Reduce the problem

    return solve(smallerProblem);

}
```

---

## Backtracking Skeleton

```javascript
function backtrack(path) {

    if (done) {
        result.push([...path]);
        return;
    }

    for (let choice of choices) {

        path.push(choice);

        backtrack(path);

        path.pop();

    }

}
```

---

## Golden Rules

1. **Every recursive function must have a base case.**
2. **Each recursive call must make the problem smaller.**
3. **Trust recursion to solve the smaller problem—don't try to solve everything yourself.**
4. **Remember that every recursive call is stored on the call stack.**
5. **Backtracking is recursion with an extra "undo" step.**

---

# 18. Complete Pattern Map

```
Recursion

│
├── Linear Recursion
│      ├── Factorial
│      ├── Fibonacci
│      └── Climbing Stairs
│
├── Tree Recursion
│      ├── Binary Tree DFS
│      ├── Inorder
│      ├── Preorder
│      └── Postorder
│
├── Graph DFS
│      ├── Number of Islands
│      ├── Clone Graph
│      └── Pacific Atlantic
│
├── Backtracking
│      ├── Generate Parentheses
│      ├── Permutations
│      ├── Subsets
│      ├── Combination Sum
│      └── N Queens
│
└── Divide & Conquer
       ├── Binary Search
       ├── Merge Sort
       ├── Quick Sort
       └── Fast Power
```

> **Interview Tip:** Before writing any recursive solution, ask yourself these three questions:
>
> 1. **What is the smallest problem I already know how to solve?** (Base Case)
> 2. **How can I reduce the current problem to a smaller one?** (Recursive Call)
> 3. **Am I guaranteed to eventually reach the base case?** (Progress)
>
> If you can answer these clearly, the recursive solution usually writes itself.