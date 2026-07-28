````md id="sliding-window-readme"
# 🪟 Sliding Window

> **"Sliding Window is an optimization technique used to solve problems involving contiguous subarrays or substrings by maintaining a moving window instead of recomputing everything."**

One of the most common interview mistakes is solving every subarray or substring problem using nested loops.

Many of these problems can be optimized from

```
O(n²)

↓

O(n)
```

using the **Sliding Window** technique.

Sliding Window is one of the most important patterns for coding interviews.

---

# Table of Contents

1. What is Sliding Window?
2. Why Sliding Window?
3. Intuition
4. Fixed vs Variable Window
5. Time Complexity
6. Recognition Guide
7. Fixed Size Window
8. Variable Size Window
9. Two Pointer Relationship
10. Common Patterns
11. Generic Templates
12. JavaScript Notes
13. Common Mistakes
14. Problems Covered
15. Interview Questions
16. Revision Cheat Sheet

---

# 1. What is Sliding Window?

Sliding Window is a technique where we maintain a **continuous window** over an array or string.

Instead of recomputing every subarray,

we

```
Expand

↓

Shrink

↓

Move
```

the window.

---

Example

Array

```
2 5 1 8 2
```

Window size = 3

```
2 5 1

↓

5 1 8

↓

1 8 2
```

Instead of recalculating every window,

we update it in constant time.

---

# 2. Why Sliding Window?

Find

Maximum sum of

```
3
```

consecutive numbers.

Brute Force

```
2+5+1

5+1+8

1+8+2
```

Complexity

```
O(n*k)
```

Sliding Window

```
Remove left

+

Add right
```

Complexity

```
O(n)
```

---

# 3. Intuition

Imagine a camera window.

```
[ A B C ]

↓

  [ B C D ]

↓

    [ C D E ]
```

The window moves.

Only

- one element leaves
- one element enters

Everything else remains the same.

---

# 4. Fixed vs Variable Window

## Fixed Size Window

Window length never changes.

Example

```
Window Size = 4
```

Problems

- Maximum Sum
- Average
- Anagrams
- Permutation in String

---

## Variable Size Window

Window grows and shrinks.

Example

```
abcabcbb
```

Need longest substring without repeating characters.

Window changes dynamically.

Problems

- Longest Substring
- Minimum Window
- Fruits Into Basket
- Character Replacement

---

# 5. Time Complexity

| Operation | Complexity |
|-----------|------------|
| Fixed Window | O(n) |
| Variable Window | O(n) |
| Space | O(1) / O(k) |

Why O(n)?

Each element

- enters the window once
- leaves the window once

---

# 6. Recognition Guide

Ask yourself

□ Contiguous subarray?

↓

Sliding Window

----------------------

□ Contiguous substring?

↓

Sliding Window

----------------------

□ Longest?

↓

Variable Window

----------------------

□ Smallest?

↓

Variable Window

----------------------

□ Fixed length?

↓

Fixed Window

----------------------

□ Maximum sum?

↓

Fixed Window

----------------------

□ Frequency count?

↓

Sliding Window + HashMap

---

# 7. Fixed Size Window

Example

Maximum Average Subarray

Window

```
Size = k
```

Algorithm

```
Build first window

↓

Slide

↓

Remove left

↓

Add right

↓

Update answer
```

---

Template

```javascript
let sum = 0;

for (let i = 0; i < k; i++) {
    sum += nums[i];
}

let answer = sum;

for (let right = k; right < nums.length; right++) {

    sum += nums[right];

    sum -= nums[right - k];

    answer = Math.max(answer, sum);

}
```

---

# 8. Variable Size Window

Example

Longest Substring Without Repeating Characters

Window

```
Expand

↓

Duplicate?

↓

Shrink

↓

Continue
```

Template

```javascript
let left = 0;

for (let right = 0; right < s.length; right++) {

    while (conditionFails) {

        left++;

    }

}
```

---

General Pattern

```
Expand Right

↓

Window Invalid?

↓

Shrink Left

↓

Window Valid?

↓

Update Answer
```

---

# 9. Two Pointer Relationship

Sliding Window is built on **Two Pointers**.

```
left

↓

A B C D E

      ↑

    right
```

Difference

Two Pointers

May move independently.

Sliding Window

Always represents a valid continuous window.

---

# 10. Common Patterns

## Pattern 1

Fixed Window

Examples

- Maximum Average Subarray
- Maximum Points from Cards

---

## Pattern 2

Variable Window

Examples

- Longest Substring
- Fruits Into Basket

---

## Pattern 3

Frequency Map

Examples

- Minimum Window Substring
- Find All Anagrams

---

## Pattern 4

At Most K

Examples

- Longest Repeating Character Replacement
- Fruit Into Baskets

---

## Pattern 5

Exactly K

Often solved using

```
At Most K

-

At Most (K-1)
```

---

# 11. Generic Templates

## Fixed Window

```javascript
let sum = 0;

for (let i = 0; i < k; i++) {

    sum += nums[i];

}

let answer = sum;

for (let right = k; right < nums.length; right++) {

    sum += nums[right];

    sum -= nums[right - k];

    answer = Math.max(answer, sum);

}
```

---

## Variable Window

```javascript
let left = 0;

for (let right = 0; right < nums.length; right++) {

    // Expand

    while (windowInvalid) {

        // Shrink

        left++;

    }

}
```

---

## Frequency Map

```javascript
let map = new Map();

for (let right = 0; right < s.length; right++) {

    map.set(s[right], (map.get(s[right]) || 0) + 1);

}
```

---

# 12. JavaScript Notes

Frequency

```javascript
map.set(ch, (map.get(ch) || 0) + 1);
```

---

Decrease

```javascript
map.set(ch, map.get(ch) - 1);
```

---

Delete

```javascript
if (map.get(ch) === 0) {

    map.delete(ch);

}
```

---

Window Length

```javascript
right - left + 1
```

---

# 13. Common Mistakes

❌ Using nested loops.

Usually

```
O(n²)
```

---

❌ Forgetting

```
right - left + 1
```

---

❌ Shrinking only once.

Sometimes

Need

```
while

not

if
```

---

❌ Updating answer before window becomes valid.

---

❌ Forgetting to remove left element.

---

# 14. Problems Covered

## Fixed Window

### Easy

- Maximum Average Subarray I (#643)

---

### Medium

- Maximum Points You Can Obtain from Cards (#1423)
- Find All Anagrams in a String (#438)
- Permutation in String (#567)

---

## Variable Window

### Medium

- Longest Substring Without Repeating Characters (#3)
- Longest Repeating Character Replacement (#424)
- Fruits Into Baskets (#904)
- Minimum Size Subarray Sum (#209)
- Minimum Window Substring (#76)

---

### Hard

- Sliding Window Maximum (#239)

---

# 15. Interview Questions

## When should I use Sliding Window?

Whenever the problem involves

- contiguous subarrays
- contiguous substrings

and asks for

- longest
- shortest
- maximum
- minimum

---

## Fixed vs Variable Window?

Fixed

Window size never changes.

Variable

Window size changes dynamically.

---

## Why is Sliding Window O(n)?

Because

Every element

enters once

leaves once

Total

```
2n

=

O(n)
```

---

## Sliding Window vs Prefix Sum?

Sliding Window

Best for

Moving contiguous windows.

Prefix Sum

Best for

Range sum queries.

---

## Sliding Window vs Two Pointers?

Sliding Window

Always maintains a valid window.

Two Pointers

Pointers may move independently.

---

# 16. Decision Tree

```
Need Contiguous?

        │
        ▼
 Sliding Window

────────────────────

Fixed Size?

        │
        ▼
 Fixed Window

────────────────────

Longest?

        │
        ▼
 Variable Window

────────────────────

Minimum?

        │
        ▼
 Variable Window

────────────────────

Need Character Counts?

        │
        ▼
 HashMap + Window

────────────────────

Need Exactly K?

        │
        ▼
 AtMost(K) - AtMost(K-1)
```

---

# 17. Problem Progression

## Level 1

- Maximum Average Subarray
- Minimum Size Subarray Sum

---

## Level 2

- Longest Substring Without Repeating Characters
- Fruits Into Basket

---

## Level 3

- Longest Repeating Character Replacement
- Find All Anagrams

---

## Level 4

- Permutation in String
- Minimum Window Substring

---

## Level 5

- Sliding Window Maximum

---

# 18. Revision Cheat Sheet

## Recognition

✔ Contiguous Subarray

✔ Contiguous Substring

✔ Longest

✔ Smallest

✔ Maximum

✔ Minimum

---

## Types

Fixed Window

Variable Window

---

## Core Formula

Window Length

```javascript
right - left + 1
```

---

## Fixed Window

```
Remove Left

+

Add Right
```

---

## Variable Window

```
Expand

↓

Invalid?

↓

Shrink

↓

Update Answer
```

---

## Complexity

Time

```
O(n)
```

Space

```
O(1)

or

O(k)
```

---

## Golden Rules

1. **Sliding Window only works for contiguous elements.**
2. **Fixed-size window → add one element, remove one element.**
3. **Variable-size window → expand first, shrink while invalid.**
4. **Most string problems use a HashMap or frequency array inside the window.**
5. **Each element enters and leaves the window at most once, giving O(n) complexity.**

---

# 19. Complete Pattern Map

```
Sliding Window

│
├── Fixed Size
│      ├── Maximum Average Subarray
│      ├── Maximum Points from Cards
│      ├── Find All Anagrams
│      └── Permutation in String
│
├── Variable Size
│      ├── Longest Substring
│      ├── Character Replacement
│      ├── Fruits Into Basket
│      ├── Minimum Size Subarray
│      └── Minimum Window
│
├── Frequency Window
│      ├── HashMap
│      ├── Array[26]
│      └── Character Counts
│
├── At Most K
│      ├── Fruits Into Basket
│      ├── Character Replacement
│      └── Distinct Characters
│
└── Exactly K
       ├── Binary Subarrays With Sum
       ├── Nice Subarrays
       └── AtMost(K) - AtMost(K-1)
```

> **Interview Tip:** The first question to ask is **"Does the problem involve a contiguous subarray or substring?"** If the answer is **yes**, Sliding Window should be one of the first approaches you consider. Then decide whether the window size is **fixed** or **variable**—that choice determines almost the entire solution pattern.
````
