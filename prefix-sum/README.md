
----------------------------------------------------------------------------------------------------------------------------
###### QUICK CHEATSHEET #######

# Prefix Sum

## Recognition

Use when:
- Range Sum
- Subarray Sum
- Running Total

## Formula

prefix[i]

=

prefix[i-1]

+

nums[i]

## Problems

- Subarray Sum Equals K

## Complexity

O(n)

----------------------------------------------------------------------------------------------------------------------------

###### DETAILED NOTES #######
# ➕ Prefix Sum

> **"Prefix Sum is a preprocessing technique that allows us to answer range sum queries in O(1) after an O(n) preprocessing step."**

One of the biggest interview mistakes is solving every subarray problem with nested loops.

Many of those problems can be reduced from

```
O(n²)

↓

O(n)
```

using **Prefix Sum**.

Prefix Sum is one of the most powerful patterns in Arrays and Hashing.

---

# Table of Contents

1. What is Prefix Sum?
2. Why Prefix Sum?
3. Intuition
4. Time Complexity
5. Recognition Guide
6. Building Prefix Sum
7. Range Sum Queries
8. Prefix Sum + HashMap
9. Prefix Product
10. 2D Prefix Sum
11. Common Patterns
12. Generic Templates
13. JavaScript Notes
14. Common Mistakes
15. Problems Covered
16. Interview Questions
17. Revision Cheat Sheet

---

# 1. What is Prefix Sum?

A Prefix Sum array stores the cumulative sum from the beginning of the array up to each index.

Example

```
nums

1 2 3 4 5
```

Prefix Sum

```
1 3 6 10 15
```

Meaning

```
prefix[0] = 1

prefix[1] = 1+2 = 3

prefix[2] = 1+2+3 = 6

prefix[3] = 10

prefix[4] = 15
```

---

# 2. Why Prefix Sum?

Suppose we want

```
Sum from index

2

to

5
```

Without Prefix Sum

```
Add every element

↓

O(n)
```

With Prefix Sum

```
prefix[5]

-

prefix[1]
```

Done instantly.

```
O(1)
```

---

# 3. Intuition

Imagine a running bank balance.

Transactions

```
₹100

₹200

₹300

₹400
```

Running Total

```
₹100

₹300

₹600

₹1000
```

The running total is exactly a Prefix Sum.

---

Another example

```
Rainfall

5

3

8

2

6
```

Prefix

```
5

8

16

18

24
```

Total rainfall up to any day is immediately available.

---

# 4. Time Complexity

| Operation | Complexity |
|-----------|------------|
| Build Prefix Sum | O(n) |
| Range Query | O(1) |
| Extra Space | O(n) |

---

# 5. Recognition Guide

Ask yourself

□ Need range sum?

↓

Prefix Sum

------------------------

□ Need cumulative sum?

↓

Prefix Sum

------------------------

□ Need many queries?

↓

Prefix Sum

------------------------

□ Need subarray sum?

↓

Prefix Sum

------------------------

□ Need count of subarrays?

↓

Prefix Sum + HashMap

------------------------

□ Need rectangle sum?

↓

2D Prefix Sum

---

# 6. Building Prefix Sum

Example

```
nums

2 4 1 6 3
```

Step 1

```
prefix[0]

=

2
```

Step 2

```
prefix[1]

=

2+4

=

6
```

Step 3

```
prefix[2]

=

6+1

=

7
```

Result

```
nums

2 4 1 6 3

↓

prefix

2 6 7 13 16
```

---

Template

```javascript
let prefix = new Array(nums.length);

prefix[0] = nums[0];

for (let i = 1; i < nums.length; i++) {

    prefix[i] = prefix[i - 1] + nums[i];

}
```

---

# 7. Range Sum Queries

Suppose

```
nums

2 4 1 6 3
```

Prefix

```
2 6 7 13 16
```

Need

```
Sum

1

to

3
```

Actual

```
4+1+6

=

11
```

Formula

```
prefix[right]

-

prefix[left-1]
```

```
13

-

2

=

11
```

General Formula

```
if(left==0)

answer

=

prefix[right]

else

answer

=

prefix[right]

-

prefix[left-1]
```

---

# 8. Prefix Sum + HashMap

One of the most common interview patterns.

Example

Subarray Sum Equals K

Suppose

```
nums

1 2 3
```

Prefix

```
1

3

6
```

Need

Subarray

=

3

Instead of checking every subarray,

store

```
Prefix Sum

↓

Frequency
```

HashMap

```
0 → 1

1 → 1

3 → 1

6 → 1
```

If

```
currentPrefix - k
```

already exists,

a valid subarray has been found.

Complexity

```
O(n)
```

instead of

```
O(n²)
```

---

Template

```javascript
let map = new Map();

map.set(0, 1);

let prefix = 0;

let count = 0;

for (let num of nums) {

    prefix += num;

    if (map.has(prefix - k)) {

        count += map.get(prefix - k);

    }

    map.set(prefix, (map.get(prefix) || 0) + 1);

}
```

---

# 9. Prefix Product

Instead of sums,

store products.

Example

```
nums

1 2 3 4
```

Prefix Product

```
1

2

6

24
```

Used in

- Product of Array Except Self
- Multiplication queries

---

# 10. 2D Prefix Sum

Matrix

```
1 2 3

4 5 6

7 8 9
```

Need

Rectangle Sum

Instead of recalculating every cell,

precompute

```
2D Prefix Matrix
```

Formula

```
prefix[row][col]

=

top

+

left

-

topLeft

+

current
```

Used in

- Range Sum Query 2D
- Image Processing
- Matrix Problems

---

# 11. Common Patterns

## Pattern 1

Range Sum

Example

Range Sum Query

---

## Pattern 2

Subarray Sum

Example

Subarray Sum Equals K

---

## Pattern 3

Running Sum

Example

Running Sum of 1D Array

---

## Pattern 4

Prefix Product

Example

Product Except Self

---

## Pattern 5

2D Prefix Sum

Example

Range Sum Query 2D

---

# 12. Generic Templates

## Prefix Sum

```javascript
let prefix = new Array(nums.length);

prefix[0] = nums[0];

for (let i = 1; i < nums.length; i++) {

    prefix[i] = prefix[i - 1] + nums[i];

}
```

---

## Running Sum (Without Extra Array)

```javascript
let sum = 0;

for (let num of nums) {

    sum += num;

}
```

---

## Prefix Sum + HashMap

```javascript
let map = new Map();

map.set(0, 1);

let prefix = 0;

for (let num of nums) {

    prefix += num;

}
```

---

# 13. JavaScript Notes

Create Prefix Array

```javascript
let prefix = new Array(nums.length).fill(0);
```

---

Running Sum

```javascript
let sum = 0;
```

---

HashMap

```javascript
let map = new Map();
```

---

Frequency

```javascript
map.set(x, (map.get(x) || 0) + 1);
```

---

# 14. Common Mistakes

❌ Forgetting

```javascript
map.set(0,1)
```

This represents an empty prefix before the array starts.

---

❌ Wrong range formula.

Correct

```
prefix[right]

-

prefix[left-1]
```

---

❌ Forgetting

```
left == 0
```

edge case.

---

❌ Using nested loops.

Many Prefix Sum problems can be reduced to O(n).

---

❌ Updating HashMap before checking.

Always

```
Check

↓

Then Insert
```

---

# 15. Problems Covered

## Easy

- Running Sum of 1D Array (#1480)
- Range Sum Query Immutable (#303)

---

## Medium

- Subarray Sum Equals K (#560)
- Continuous Subarray Sum (#523)
- Product of Array Except Self (#238)
- Maximum Average Subarray I (#643)

---

## Hard

- Range Sum Query 2D Immutable (#304)
- Count of Range Sum (#327)

---

# 16. Interview Questions

## Why use Prefix Sum?

To answer multiple range sum queries efficiently.

---

## Why is Prefix Sum O(1) for queries?

Because each query only performs

```
Two array accesses

+

One subtraction
```

---

## Why combine Prefix Sum with HashMap?

To efficiently count or detect subarrays with a given sum.

---

## Difference between Prefix Sum and Sliding Window?

Sliding Window

✔ Window size or condition changes dynamically.

Prefix Sum

✔ Calculates cumulative totals and supports arbitrary range queries.

---

## Prefix Sum vs Running Sum?

Running Sum is simply the cumulative total while iterating.

Prefix Sum stores those cumulative totals for future queries.

---

# 17. Decision Tree

```
Need Range Sum?

        │
        ▼
   Prefix Sum

────────────────────

Need Subarray Sum?

        │
        ▼
Prefix Sum + HashMap

────────────────────

Need Rectangle Sum?

        │
        ▼
 2D Prefix Sum

────────────────────

Need Running Total?

        │
        ▼
 Running Sum

────────────────────

Need Product?

        │
        ▼
Prefix Product
```

---

# 18. Problem Progression

## Level 1

- Running Sum of 1D Array
- Range Sum Query

---

## Level 2

- Product of Array Except Self
- Maximum Average Subarray

---

## Level 3

- Subarray Sum Equals K
- Continuous Subarray Sum

---

## Level 4

- Range Sum Query 2D
- Count of Range Sum

---

# 19. Revision Cheat Sheet

## Recognition

✔ Range Sum

✔ Running Total

✔ Subarray Sum

✔ Multiple Queries

✔ Rectangle Sum

✔ Prefix Product

---

## Core Patterns

- Prefix Sum
- Running Sum
- Prefix Sum + HashMap
- Prefix Product
- 2D Prefix Sum

---

## Formula

```
Range Sum

=

prefix[right]

-

prefix[left-1]
```

---

## Complexity

Build

```
O(n)
```

Query

```
O(1)
```

Space

```
O(n)
```

---

## Golden Rules

1. **If you're repeatedly calculating sums over ranges, build a Prefix Sum array.**
2. **If the problem asks for the number of subarrays with a given sum, think Prefix Sum + HashMap.**
3. **Always initialize the HashMap with `0 → 1` when counting subarrays—it represents the empty prefix.**
4. **Remember the range formula: `prefix[right] - prefix[left - 1]`.**
5. **For matrix range sums, extend the idea to a 2D Prefix Sum.**

---

# 20. Complete Pattern Map

```
Prefix Sum

│
├── Running Sum
│      ├── Running Sum of 1D Array
│      └── Cumulative Total
│
├── Range Sum
│      ├── Range Sum Query
│      ├── Immutable Arrays
│      └── Multiple Queries
│
├── Prefix Sum + HashMap
│      ├── Subarray Sum Equals K
│      ├── Continuous Subarray Sum
│      ├── Count of Range Sum
│      └── Binary Subarrays With Sum
│
├── Prefix Product
│      ├── Product Except Self
│      └── Product Queries
│
└── 2D Prefix Sum
       ├── Range Sum Query 2D
       ├── Rectangle Sum
       └── Matrix Problems
```

> **Interview Tip:** Whenever you catch yourself recomputing the sum of overlapping subarrays, stop. That's usually a sign that Prefix Sum can reduce the solution from **O(n²)** to **O(n)** or allow **O(1)** range queries after preprocessing.
````
