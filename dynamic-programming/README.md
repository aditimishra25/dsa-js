
----------------------------------------------------------------------------------------------------------------------------
###### QUICK CHEATSHEET #######

# Dynamic Programming

## Recognition

Optimal

+

Overlapping Subproblems

## Steps

State

↓

Transition

↓

Base Case

↓

Memoization / Tabulation

## Patterns

- 1D DP
- 2D DP
- Knapsack
- LIS
- Interval DP

## Problems

- Maximum Subarray

----------------------------------------------------------------------------------------------------------------------------

###### DETAILED NOTES #######

# 🧠 Dynamic Programming (DP)

> "Dynamic Programming is recursion + remembering answers."

Many candidates think DP is about memorizing 100 problems.

**It is not.**

Every DP problem is built on the same idea:

```
Can I solve this problem by solving smaller subproblems?
```

If YES,

think DP.

---

# Table of Contents

1. What is Dynamic Programming?
2. Why DP?
3. DP vs Recursion
4. DP vs Greedy
5. Recognition Guide
6. The 5-Step DP Framework
7. Memoization
8. Tabulation
9. Space Optimization
10. Common DP Patterns
11. State Design
12. Transition Formula
13. Dry Runs
14. Complexity
15. Common Interview Mistakes
16. JavaScript Templates
17. Problems Covered
18. DP Roadmap
19. Interview Questions
20. Revision Cheat Sheet

---

# 1. What is Dynamic Programming?

Dynamic Programming is a technique used to solve problems that have

- Optimal Substructure
- Overlapping Subproblems

Instead of solving the same problem repeatedly,

we solve it once,

store the answer,

and reuse it.

Example

Suppose we want

```
fib(6)
```

Recursion does

```
fib(6)

↓

fib(5)
fib(4)

↓

fib(4)
fib(3)

↓

fib(3)
fib(2)
```

Notice

```
fib(4)

fib(3)

fib(2)
```

are calculated again and again.

DP stores them.

---

# 2. Why DP?

Without DP

```
fib(40)

≈ 330 million recursive calls
```

With DP

```
Only 40 states
```

Huge improvement.

---

# 3. DP vs Recursion

## Recursion

```
Solve

↓

Break into smaller problems

↓

Solve again

↓

Repeat
```

Same problems are solved multiple times.

---

## DP

```
Solve

↓

Store Answer

↓

Reuse Later
```

No repeated work.

---

# 4. DP vs Greedy

Greedy

```
Take best decision NOW.
```

Never looks back.

Example

```
Stock Problem
```

---

DP

```
Try every possibility

↓

Remember best answer
```

Example

```
House Robber

Coin Change

LIS
```

---

# 5. Recognition Guide

Ask yourself

□ Maximum?

□ Minimum?

□ Number of Ways?

□ Can Choose / Skip?

□ Longest?

□ Shortest?

□ Can problem be broken into smaller versions?

□ Same computation repeated?

If YES,

think DP.

---

Examples

Maximum Profit

↓

DP

---

Minimum Cost

↓

DP

---

Longest Increasing

↓

DP

---

Count Ways

↓

DP

---

Choose / Skip

↓

DP

---

# 6. Two Properties Required

Dynamic Programming works ONLY if BOTH exist.

---

## Property 1

Optimal Substructure

Best answer

depends on

best answers of smaller problems.

Example

```
Climbing Stairs

Ways(5)

=

Ways(4)

+

Ways(3)
```

---

## Property 2

Overlapping Subproblems

Same problem appears repeatedly.

Example

```
fib(5)

↓

fib(4)

↓

fib(3)

↓

fib(2)
```

Many duplicates.

---

# 7. The 5-Step DP Framework

Every DP problem can be solved using these five questions.

---

## Step 1

What is the STATE?

Example

House Robber

```
dp[i]

=

Maximum money till house i
```

---

## Step 2

What is the DECISION?

Example

House Robber

```
Rob

or

Skip
```

---

## Step 3

Write the TRANSITION

Example

```
dp[i]

=

max(

rob,

skip

)
```

---

## Step 4

Base Case

Example

```
dp[0]

=

nums[0]
```

---

## Step 5

Answer

Usually

```
dp[n-1]
```

or

```
max(dp)
```

---

# 8. Memoization (Top Down)

Start from the answer.

Use recursion.

Store answers.

Template

```javascript
let memo = new Map();

function dfs(i){

    if(base case){

        return value;

    }

    if(memo.has(i)){

        return memo.get(i);

    }

    let answer = ...

    memo.set(i, answer);

    return answer;

}
```

Flow

```
Answer

↓

Recursion

↓

Memo

↓

Return
```

---

Advantages

Easy to write.

Closer to recursive thinking.

---

Disadvantages

Stack overflow.

Extra recursion cost.

---

# 9. Tabulation (Bottom Up)

No recursion.

Build answer from smallest state.

Template

```javascript
let dp = new Array(n);

dp[0] = ...

for(let i=1;i<n;i++){

    dp[i]=...

}
```

Flow

```
Small

↓

Medium

↓

Large

↓

Answer
```

---

Advantages

Fast.

No recursion.

Interview favourite.

---

# 10. Memoization vs Tabulation

Memoization

```
Top Down

Recursive

Lazy
```

Tabulation

```
Bottom Up

Iterative

Eager
```

Both usually

```
O(n)
```

---

# 11. Space Optimization

Many DP problems only need

previous states.

Example

Fibonacci

Instead of

```
0

1

1

2

3

5

8
```

Store only

```
prev2

prev1
```

Space becomes

```
O(1)
```

instead of

```
O(n)
```

---

# 12. Common DP Patterns

## Pattern 1

Linear DP

Examples

- Climbing Stairs
- House Robber
- Min Cost Climbing Stairs

---

## Pattern 2

Grid DP

Examples

- Unique Paths
- Minimum Path Sum

---

## Pattern 3

Knapsack

Examples

- Target Sum
- Partition Equal Subset Sum

---

## Pattern 4

Longest Subsequence

Examples

- LIS
- LCS

---

## Pattern 5

Interval DP

Examples

- Burst Balloons
- Matrix Chain Multiplication

---

## Pattern 6

String DP

Examples

- Edit Distance
- Word Break
- Decode Ways

---

## Pattern 7

Tree DP

Examples

- Binary Tree Maximum Path Sum
- House Robber III

---

## Pattern 8

Bitmask DP

Advanced.

Mostly hard problems.

---

# 13. State Design

This is the hardest part.

Examples

Fibonacci

```
State

i
```

House Robber

```
State

House Index
```

Coin Change

```
State

Remaining Amount
```

Longest Common Subsequence

```
State

(i,j)
```

---

# 14. Transition Formula

Transition answers

"What do I need from previous states?"

Example

House Robber

```
dp[i]

=

max(

dp[i-1],

nums[i]+dp[i-2]

)
```

---

Coin Change

```
dp[amount]

=

min(

current,

coin

)
```

---

# 15. Dry Run

Example

Climbing Stairs

```
n=5
```

```
dp[1]=1

dp[2]=2

dp[3]=3

dp[4]=5

dp[5]=8
```

Each answer

depends on previous two.

---

Example

House Robber

```
2

7

9

3

1
```

```
House

0

↓

2

House

1

↓

7

House

2

↓

11

House

3

↓

11

House

4

↓

12
```

Answer

```
12
```

---

# 16. Complexity

Memoization

Time

```
O(number of states)
```

Space

```
O(number of states)
```

-

Recursion Stack

---

Tabulation

Time

```
O(number of states)
```

Space

```
O(number of states)
```

Can often become

```
O(1)
```

---

# 17. Common Interview Mistakes

❌ Starting to code without defining the state.

---

❌ Wrong transition.

---

❌ Forgetting base case.

---

❌ Mixing indices.

---

❌ Using recursion without memoization.

---

❌ Not recognizing repeated subproblems.

---

❌ Forgetting space optimization.

---

# 18. JavaScript Templates

## Memoization

```javascript
const memo = new Map();

function dfs(i){

    if(base case){

        return value;

    }

    if(memo.has(i)){

        return memo.get(i);

    }

    let answer = ...

    memo.set(i,answer);

    return answer;

}
```

---

## Tabulation

```javascript
let dp = new Array(n).fill(0);

dp[0]=...

for(let i=1;i<n;i++){

    dp[i]=...

}

return dp[n-1];
```

---

## Space Optimized

```javascript
let prev2 = ...;

let prev1 = ...;

for(let i=2;i<n;i++){

    let current = ...

    prev2 = prev1;

    prev1 = current;

}

return prev1;
```

---

# 19. Problems Covered

## Beginner

- Fibonacci
- Climbing Stairs
- Min Cost Climbing Stairs

---

## Linear DP

- House Robber
- House Robber II
- Delete and Earn

---

## Grid DP

- Unique Paths
- Minimum Path Sum
- Dungeon Game

---

## Knapsack

- Coin Change
- Coin Change II
- Partition Equal Subset Sum
- Target Sum

---

## Subsequences

- Longest Increasing Subsequence
- Longest Common Subsequence

---

## Strings

- Decode Ways
- Word Break
- Edit Distance
- Distinct Subsequences

---

## Interval

- Burst Balloons

---

## Advanced

- Regular Expression Matching
- Wildcard Matching

---

# 20. DP Problem Solving Checklist

Whenever you see a DP problem, ask:

□ What is my state?

↓

□ What choices do I have?

↓

□ What is the recurrence?

↓

□ What are the base cases?

↓

□ What is the final answer?

↓

□ Can I optimize space?

Never skip these six questions.

---

# 21. Interview Questions

Q. Why use DP instead of recursion?

Because recursion recomputes identical subproblems.

DP stores answers and avoids repeated work.

---

Q. Memoization or Tabulation?

Memoization

- Easier
- Recursive
- Good for sparse states

Tabulation

- Faster
- No recursion
- Preferred in interviews

---

Q. How do I know a problem is DP?

Look for

- Maximum
- Minimum
- Count Ways
- Longest
- Choose/Skip
- Repeated subproblems

---

Q. Can every recursive solution become DP?

No.

Only if the problem has:

1. Optimal Substructure
2. Overlapping Subproblems

---

# 22. DP Roadmap (Recommended Order)

## Level 1 - Basics

- Fibonacci
- Climbing Stairs
- Min Cost Climbing Stairs

---

## Level 2 - Linear DP

- House Robber
- House Robber II

---

## Level 3 - Grid DP

- Unique Paths
- Minimum Path Sum

---

## Level 4 - Knapsack

- Coin Change
- Coin Change II
- Target Sum
- Partition Equal Subset Sum

---

## Level 5 - Subsequences

- Longest Increasing Subsequence
- Longest Common Subsequence

---

## Level 6 - Strings

- Decode Ways
- Word Break
- Edit Distance

---

## Level 7 - Advanced

- Burst Balloons
- Regular Expression Matching
- Wildcard Matching

---

# 23. Decision Tree

```
Maximum / Minimum?

        │
        ▼
        DP

──────────────

Count Ways?

        │
        ▼
        DP

──────────────

Longest?

        │
        ▼
        DP

──────────────

Choose / Skip?

        │
        ▼
        DP

──────────────

Repeated Computation?

        │
        ▼
        DP

──────────────

State depends on previous states?

        │
        ▼
        DP
```

---

# 24. Revision Cheat Sheet

## Recognition

✔ Maximum

✔ Minimum

✔ Longest

✔ Count Ways

✔ Choose / Skip

✔ Repeated Subproblems

✔ Optimization Problems

---

## DP Framework

1. Define State
2. Define Choice
3. Write Transition
4. Base Case
5. Return Answer
6. Optimize Space

---

## Patterns

- Linear DP
- Grid DP
- Knapsack
- LCS / LIS
- String DP
- Interval DP
- Tree DP
- Bitmask DP

---

## Complexity

Memoization

Time

```
O(states)
```

Space

```
O(states)
```

---

Tabulation

Time

```
O(states)
```

Space

```
O(states)
```

---

## Golden Rule

> **If a problem asks for the best, shortest, longest, minimum, maximum, or number of ways—and the answer for a larger problem can be built from smaller problems—stop and ask whether Dynamic Programming is the right tool.**

DP is less about memorizing solutions and more about learning to identify **state**, **transition**, and **base cases**.
````

// ****************DP Template (Save this!)***************************

// Every time you see a DP problem, follow this checklist:

// 1. Define the state
//    What does dp[i] or dfs(i) represent?

// 2. Identify the choices
//    What decisions can I make from this state?

// 3. Write the recurrence
//    How is the current state computed from smaller states?

// 4. Define the base cases
//    What are the smallest subproblems with known answers?

// 5. Optimize
//    - Brute Force
//    - Memoization
//    - Bottom-Up
//    - Space Optimization (if possible)

// ****************DP Patterns (Save this!)***************************
| Problem         | State             | Choices          | Combine      | Base Case              |
| --------------- | ----------------- | ---------------- | ------------ | ---------------------- |
| Climbing Stairs | `i`               | 1 step / 2 steps | `+`          | `return 1`             |
| House Robber    | `i`               | Rob / Skip       | `Math.max()` | `return 0`             |
| Coin Change     | `amount`          | Choose any coin  | `Math.min()` | `0`, `Infinity`        |
| Coin Change II  | `(amount, index)` | Take / Skip      | `+`          | `return 1`, `return 0` |
