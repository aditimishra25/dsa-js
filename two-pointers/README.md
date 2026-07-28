````md id="two-pointers-readme"
# 👈👉 Two Pointers

> **"Two Pointers is a technique where two indices move through an array or string to efficiently solve problems that would otherwise require nested loops."**

Two Pointers is one of the most frequently asked interview patterns. It helps optimize many problems from

```
O(n²)

↓

O(n)
```

by intelligently moving two pointers instead of checking every pair.

This pattern appears in Arrays, Strings, Linked Lists, Binary Search, Sliding Window, and even Dynamic Programming.

---

# Table of Contents

1. What are Two Pointers?
2. Why Two Pointers?
3. Intuition
4. Types of Two Pointers
5. Time Complexity
6. Recognition Guide
7. Opposite Direction
8. Same Direction
9. Fast & Slow Pointers
10. Common Patterns
11. Generic Templates
12. JavaScript Notes
13. Common Mistakes
14. Problems Covered
15. Interview Questions
16. Revision Cheat Sheet

---

# 1. What are Two Pointers?

Instead of using nested loops,

we maintain **two indices** that move through the data.

Example

```
Array

1 2 3 4 5
```

Pointers

```
L               R

1 2 3 4 5
```

The pointers move according to the problem's condition.

---

# 2. Why Two Pointers?

Suppose we need to find

```
Two numbers whose sum = target
```

Brute Force

```
Check every pair

↓

O(n²)
```

Two Pointers (sorted array)

```
Left

↓

1 2 4 7 11

          ↑

        Right
```

If sum is too small

```
Left++
```

If sum is too large

```
Right--
```

Complexity

```
O(n)
```

---

# 3. Intuition

Imagine two people walking toward each other.

```
A B C D E F G

↑           ↑

L           R
```

After every comparison,

at least one pointer moves.

Eventually,

they meet.

---

# 4. Types of Two Pointers

## Opposite Direction

```
L → ← R
```

Used for

- Sorted arrays
- Palindrome
- Container With Most Water
- Trapping Rain Water

---

## Same Direction

```
L →

R →
```

Used for

- Remove Duplicates
- Move Zeroes
- Partition Arrays

---

## Fast & Slow

```
Slow →

Fast →→
```

Used for

- Cycle Detection
- Middle of Linked List
- Happy Number

---

# 5. Time Complexity

| Pattern | Time | Space |
|----------|------|--------|
| Opposite | O(n) | O(1) |
| Same | O(n) | O(1) |
| Fast & Slow | O(n) | O(1) |

Why O(n)?

Each pointer moves at most

```
n
```

times.

---

# 6. Recognition Guide

Ask yourself

□ Sorted array?

↓

Opposite Pointers

----------------------

□ Need pair?

↓

Opposite Pointers

----------------------

□ Reverse?

↓

Opposite Pointers

----------------------

□ Palindrome?

↓

Opposite Pointers

----------------------

□ Remove duplicates?

↓

Same Direction

----------------------

□ Move elements?

↓

Same Direction

----------------------

□ Detect cycle?

↓

Fast & Slow

----------------------

□ Find middle?

↓

Fast & Slow

---

# 7. Opposite Direction

Pointers start at opposite ends.

```
L           R

1 2 3 4 5
```

Example

Container With Most Water

Algorithm

```
Compute Area

↓

Move Smaller Height

↓

Repeat
```

Reason

Moving the taller height cannot improve the answer because the width always decreases.

---

Example

Valid Palindrome

```
Compare

↓

Equal?

↓

Move Both

Else

False
```

---

Template

```javascript
let left = 0;
let right = nums.length - 1;

while (left < right) {

    if (condition) {

        left++;

    } else {

        right--;

    }

}
```

---

# 8. Same Direction

Both pointers move forward.

```
Slow

↓

Fast

↓

1 2 3 4 5
```

Used when

- keeping valid elements
- overwriting values
- partitioning

Example

Move Zeroes

```
Fast finds non-zero

↓

Slow places it

↓

Continue
```

---

Example

Remove Duplicates

```
Slow

↓

Unique region

↓

Fast scans array
```

---

Template

```javascript
let slow = 0;

for (let fast = 0; fast < nums.length; fast++) {

    if (condition) {

        nums[slow] = nums[fast];

        slow++;

    }

}
```

---

# 9. Fast & Slow Pointers

Fast moves twice.

```
S →

F →→
```

Applications

- Linked List Cycle
- Middle of Linked List
- Happy Number

Example

Middle Node

```javascript
while (fast && fast.next) {

    slow = slow.next;

    fast = fast.next.next;

}
```

When fast reaches the end,

slow is at the middle.

---

# 10. Common Patterns

## Pattern 1

Opposite Ends

Problems

- Valid Palindrome
- Two Sum II
- Container With Most Water

---

## Pattern 2

Same Direction

Problems

- Move Zeroes
- Remove Duplicates
- Sort Colors (DNF variation)

---

## Pattern 3

Fast & Slow

Problems

- Linked List Cycle
- Middle of Linked List
- Happy Number

---

## Pattern 4

Partitioning

Problems

- Dutch National Flag
- Quick Sort Partition

---

## Pattern 5

Water Problems

Problems

- Trapping Rain Water
- Container With Most Water

---

# 11. Generic Templates

## Opposite Pointers

```javascript
let left = 0;
let right = nums.length - 1;

while (left < right) {

    if (condition) {

        left++;

    } else {

        right--;

    }

}
```

---

## Same Direction

```javascript
let slow = 0;

for (let fast = 0; fast < nums.length; fast++) {

    if (condition) {

        nums[slow] = nums[fast];

        slow++;

    }

}
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

# 12. JavaScript Notes

Initialize

```javascript
let left = 0;
let right = nums.length - 1;
```

---

Swap

```javascript
[nums[left], nums[right]] = [nums[right], nums[left]];
```

---

Move

```javascript
left++;

right--;
```

---

# 13. Common Mistakes

❌ Using Two Pointers on an unsorted array.

Opposite pointers usually require sorted data.

---

❌ Moving the wrong pointer.

Example

Container With Most Water

Always move the

```
Smaller Height
```

---

❌ Forgetting

```javascript
left < right
```

---

❌ Incrementing both pointers unnecessarily.

Only move the pointer dictated by the condition.

---

❌ Confusing Sliding Window with Two Pointers.

Sliding Window always maintains a **continuous valid window**.

Two Pointers is a broader technique and does not always represent a window.

---

# 14. Problems Covered

## Easy

- Valid Palindrome (#125)
- Move Zeroes (#283)
- Remove Duplicates from Sorted Array (#26)

---

## Medium

- Two Sum II (#167)
- Container With Most Water (#11)
- 3Sum (#15)
- Sort Colors (#75)

---

## Hard

- Trapping Rain Water (#42)

---

## Linked List

- Middle of the Linked List (#876)
- Linked List Cycle (#141)
- Linked List Cycle II (#142)

---

# 15. Interview Questions

## When should I use Two Pointers?

When the problem involves

- pairs
- sorted arrays
- reversing
- removing elements
- partitioning
- linked list traversal

---

## Difference between Two Pointers and Sliding Window?

Two Pointers

Pointers move based on problem logic.

Sliding Window

Pointers always define a valid contiguous window.

Sliding Window is a specialized form of Two Pointers.

---

## Why does Opposite Pointer work on sorted arrays?

Because the order tells us which pointer should move.

If the sum is too small,

move left.

If too large,

move right.

---

## Why use Fast & Slow?

It lets us detect cycles and find the middle in a single traversal.

---

## Why is Two Pointers O(n)?

Each pointer only moves forward (or inward) and never revisits positions.

---

# 16. Decision Tree

```
Sorted Array?

        │
        ▼
Opposite Pointers

────────────────────

Need Pair?

        │
        ▼
Opposite Pointers

────────────────────

Need Remove?

        │
        ▼
Same Direction

────────────────────

Need Rearrange?

        │
        ▼
Same Direction

────────────────────

Linked List?

        │
        ▼
Fast & Slow

────────────────────

Need Middle?

        │
        ▼
Fast & Slow
```

---

# 17. Problem Progression

## Level 1

- Valid Palindrome
- Move Zeroes
- Remove Duplicates

---

## Level 2

- Two Sum II
- Container With Most Water
- Sort Colors

---

## Level 3

- 3Sum
- Linked List Cycle
- Middle of Linked List

---

## Level 4

- Trapping Rain Water
- Linked List Cycle II

---

# 18. Revision Cheat Sheet

## Recognition

✔ Sorted Array

✔ Pair Search

✔ Reverse

✔ Palindrome

✔ Remove Duplicates

✔ Move Elements

✔ Cycle Detection

✔ Find Middle

---

## Core Patterns

### Opposite Direction

```
L → ← R
```

Used for

- Two Sum II
- Palindrome
- Container
- Rain Water

---

### Same Direction

```
Slow →

Fast →
```

Used for

- Move Zeroes
- Remove Duplicates
- Sort Colors

---

### Fast & Slow

```
Slow →

Fast →→
```

Used for

- Linked List Cycle
- Middle Node
- Happy Number

---

## Complexity

Time

```
O(n)
```

Space

```
O(1)
```

---

## Golden Rules

1. **If the array is sorted and you're looking for a pair, think Opposite Two Pointers.**
2. **If you're removing or rearranging elements in-place, think Same Direction pointers.**
3. **If you're working with linked lists, think Fast & Slow pointers.**
4. **Each pointer should move with a clear purpose—never move both blindly.**
5. **Sliding Window is a specialized form of Two Pointers where the pointers always define a valid contiguous window.**

---

# 19. Complete Pattern Map

```
Two Pointers

│
├── Opposite Direction
│      ├── Two Sum II
│      ├── Valid Palindrome
│      ├── Container With Most Water
│      ├── Trapping Rain Water
│      └── Reverse String
│
├── Same Direction
│      ├── Move Zeroes
│      ├── Remove Duplicates
│      ├── Remove Element
│      ├── Sort Colors
│      └── Partition Array
│
├── Fast & Slow
│      ├── Middle of Linked List
│      ├── Linked List Cycle
│      ├── Linked List Cycle II
│      └── Happy Number
│
└── Advanced
       ├── 3Sum
       ├── 4Sum
       ├── Dutch National Flag
       └── Partition Problems
```

> **Interview Tip:** Before writing code, identify **which type of Two Pointers** the problem needs:
>
> - **Opposite Ends** → Sorted arrays, pair problems, palindromes.
> - **Same Direction** → In-place modifications, filtering, partitioning.
> - **Fast & Slow** → Linked lists, cycle detection, middle node.
>
> Choosing the correct pointer pattern usually reveals the solution immediately.
````
