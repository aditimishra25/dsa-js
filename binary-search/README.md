
----------------------------------------------------------------------------------------------------------------------------
###### QUICK CHEATSHEET #######

# Binary Search

## Recognition

Use Binary Search when:

- Sorted array
- Rotated sorted array
- Monotonic function
- Binary Search on Answer
- First / Last occurrence

## Template

while(left <= right)

↓

mid

↓

Discard half

## Time

O(log n)

## Problems

- Binary Search
- Search 2D Matrix
- Search Rotated Array
- Find Minimum Rotated Array
- Time Based Key Value Store
- Median of Two Sorted Arrays

## Common Mistakes

- Mid overflow
- Infinite loops
- Wrong boundaries

----------------------------------------------------------------------------------------------------------------------------

###### DETAILED NOTES #######

# 🔍 Binary Search

> "Binary Search is not about searching in a sorted array.
> It's about eliminating half of the search space every step."

One of the biggest mistakes interview candidates make is thinking Binary Search is only useful for finding an element.

In reality, Binary Search is used for:

- Searching
- Optimization
- Finding boundaries
- Answer space
- Rotated arrays
- Monotonic functions
- Time-based queries

Many Hard interview questions are simply applications of Binary Search.

---

# Table of Contents

1. What is Binary Search?
2. Why Binary Search Works
3. Recognition Guide
4. Time Complexity
5. Binary Search Template
6. Variations
7. Lower Bound
8. Upper Bound
9. First Occurrence
10. Last Occurrence
11. Rotated Arrays
12. Binary Search on Answer
13. Binary Search on Objects
14. Common Interview Patterns
15. Common Mistakes
16. JavaScript Notes
17. Problems Covered
18. Interview Questions
19. Revision Cheat Sheet

---

# 1. What is Binary Search?

Binary Search repeatedly divides the search space into two halves.

Instead of checking every element,

```
1
2
3
4
5
6
7
8
9
```

it checks the middle.

Suppose we want to find 8.

Step 1

```
1 2 3 4 5 6 7 8 9
        ^
        5
```

8 > 5

Discard the entire left half.

Now search

```
6 7 8 9
```

Again choose the middle.

```
6 7 8 9
  ^
  7
```

Discard left again.

```
8 9
```

Found.

Instead of checking 9 numbers,
we checked only 3.

---

# 2. Why Binary Search Works

Binary Search only works because the search space is ordered.

Examples

Sorted Array

```
1 2 4 7 9 13 20
```

Rotated Sorted Array

```
6 7 8 1 2 3 5
```

Monotonic Function

```
F F F F T T T
```

Binary Search keeps asking

Can I eliminate half?

If yes,

Binary Search is probably applicable.

---

# 3. Recognition Guide

Ask yourself

□ Is the input sorted?

↓

YES

Think Binary Search

------------------------

□ Can I discard half after every comparison?

↓

YES

Think Binary Search

------------------------

□ Am I searching for

- first occurrence
- last occurrence
- minimum
- maximum
- boundary

↓

Binary Search

------------------------

□ Does the answer become

```
False False False True True True
```

or

```
True True True False False
```

↓

Binary Search on Answer

------------------------

□ Are timestamps sorted?

↓

Binary Search

(Time Based Key Value Store)

---

# 4. Time Complexity

| Operation | Complexity |
|-----------|------------|
| Binary Search | O(log n) |

Space

Iterative

```
O(1)
```

Recursive

```
O(log n)
```

---

# 5. Classic Binary Search Template

```javascript
let left = 0;
let right = nums.length - 1;

while (left <= right) {

    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
        return mid;
    }

    if (nums[mid] < target) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }

}

return -1;
```

---

# Dry Run

Array

```
1 3 5 7 9 11
```

Target

```
9
```

Step 1

```
L       M       R

1 3 5 7 9 11
      ^
```

5 < 9

Discard left.

Step 2

```
7 9 11
  ^
```

Found.

---

# 6. Why mid is calculated like this?

Instead of

```javascript
(left + right) / 2
```

many languages use

```javascript
left + Math.floor((right - left) / 2)
```

Why?

Because

```
left + right
```

can overflow in Java/C++.

JavaScript numbers don't overflow like integers,
but interviewers still like the safer formula.

---

# 7. Lower Bound

Lower Bound means

First element

```
>= target
```

Example

```
1 2 4 4 4 7 9
```

Target

```
4
```

Answer

First 4

Index 2

Template

```javascript
while(left <= right){

    let mid = Math.floor((left + right)/2)

    if(nums[mid] >= target){

        answer = mid
        right = mid - 1

    }else{

        left = mid + 1

    }

}
```

---

# 8. Upper Bound

Upper Bound means

First element

```
> target
```

Example

```
1 2 4 4 4 7 9
```

Target

4

Answer

7

---

# 9. First Occurrence

Binary Search

↓

Found target

↓

Continue searching LEFT

Why?

Maybe another copy exists.

---

# 10. Last Occurrence

Binary Search

↓

Found target

↓

Continue searching RIGHT

---

# 11. Rotated Sorted Array

Example

```
4 5 6 7 0 1 2
```

Question

Which half is sorted?

Every iteration

identify

```
Left Half

or

Right Half
```

One half is always sorted.

Then decide

Should target lie there?

Discard the other half.

Problems

- Search in Rotated Sorted Array
- Find Minimum in Rotated Sorted Array

---

# 12. Binary Search on Answer

One of the most important interview techniques.

You are NOT searching an array.

You are searching the answer.

Example

Minimum Speed

```
Can speed = 10 finish?

No

Can speed = 20?

Yes

Can speed = 15?

Yes

Can speed = 12?

No
```

Results

```
False
False
False
True
True
True
```

Whenever answers look like

```
FFFFTTTT
```

Binary Search works.

Examples

- Koko Eating Bananas
- Capacity To Ship Packages
- Split Array Largest Sum
- Min Days to Make Bouquets

---

# 13. Binary Search on Objects

Example

Time Based Key Value Store

Store

```
apple

(1,"a")

(3,"b")

(10,"c")
```

Searching timestamp

```
7
```

Need greatest timestamp

<= 7

Binary Search

on timestamps.

---

# 14. Common Interview Patterns

Pattern 1

Classic Search

Example

Binary Search

---

Pattern 2

Rotated Array

Example

Search Rotated Sorted Array

---

Pattern 3

Find Minimum

Example

Find Minimum Rotated Array

---

Pattern 4

Boundary Search

Example

First Bad Version

---

Pattern 5

Search on Objects

Example

Time Based Key Value Store

---

Pattern 6

Binary Search on Answer

Examples

Koko Eating Bananas

Ship Packages

Aggressive Cows

Painter Partition

Median of Two Sorted Arrays

---

# 15. Common Mistakes

❌ Using

```javascript
while(left < right)
```

instead of

```javascript
while(left <= right)
```

when searching an exact value.

---

❌ Infinite loop

Forgetting

```
mid + 1

mid - 1
```

---

❌ Returning immediately after finding target

Sometimes

need

First Occurrence

or

Last Occurrence.

---

❌ Wrong boundary updates

If target is greater

```
left = mid + 1
```

NOT

```
left = mid
```

---

❌ Forgetting empty array

---

# 16. JavaScript Notes

Middle

```javascript
let mid = Math.floor((left + right)/2);
```

Sorted Numbers

```javascript
nums.sort((a,b)=>a-b);
```

Never use

```javascript
nums.sort();
```

because it sorts lexicographically.

---

# 17. Problems Covered

Easy

- Binary Search (#704)
- First Bad Version (#278)

Medium

- Search a 2D Matrix (#74)
- Search in Rotated Sorted Array (#33)
- Find Minimum in Rotated Sorted Array (#153)
- Time Based Key Value Store (#981)

Hard

- Median of Two Sorted Arrays (#4)
- Koko Eating Bananas (#875)
- Split Array Largest Sum (#410)
- Capacity To Ship Packages (#1011)

---

# 18. Interview Questions

Q. Why is Binary Search O(log n)?

Because every iteration removes half of the remaining search space.

Example

```
1024

↓

512

↓

256

↓

128

↓

64

↓

32

↓

16

↓

8

↓

4

↓

2

↓

1
```

Only

```
log₂(n)
```

steps.

---

Q. When can't Binary Search be used?

- Unsorted data (unless another monotonic property exists)
- No way to eliminate half
- Linear relationships without ordering

---

Q. Can Binary Search work without a sorted array?

Yes.

If the answer space is monotonic.

Example

```
FFFFTTTT
```

This is called **Binary Search on Answer**.

---

Q. Difference between Lower Bound and Upper Bound?

Lower Bound

First value

```
>= target
```

Upper Bound

First value

```
> target
```

---

# 19. Binary Search Decision Tree

```
Is data sorted?

        │
       YES
        │
Classic Binary Search
        │
────────┼────────
        │
Duplicates?
        │
        ▼
Lower/Upper Bound

────────┼────────

Rotated?

        ▼

Rotated Binary Search

────────┼────────

Objects?

        ▼

Binary Search on Objects

────────┼────────

Searching answer?

        ▼

Binary Search on Answer
```

---

# 20. Revision Cheat Sheet

## Recognition

✔ Sorted Array

✔ Rotated Array

✔ Monotonic Function

✔ Boundary Search

✔ Time-based Queries

✔ Search Space Reduction

---

## Core Templates

- Classic Binary Search
- Lower Bound
- Upper Bound
- Rotated Array
- Binary Search on Answer

---

## Time Complexity

Search      O(log n)

Space       O(1) iterative

Space       O(log n) recursive

---

## Key Takeaways

- Binary Search is about eliminating half of the search space, not just searching arrays.
- Always identify the monotonic property before writing code.
- Learn the five core templates—they solve the majority of interview questions.
- Master rotated arrays and Binary Search on Answer; they appear frequently in product-company interviews.
- Be careful with boundary conditions (`left`, `right`, and `mid`)—most bugs come from incorrect updates.