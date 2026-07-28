# 📚 Arrays

---

# Table of Contents

1. What is an Array?
2. Why Arrays?
3. Time Complexity
4. Memory Layout
5. Recognition Guide
6. Common Patterns
7. Generic Templates
8. Two-Pass vs One-Pass
9. Prefix & Suffix Technique
10. In-place Modification
11. Greedy with Arrays
12. Sorting + Arrays
13. Common Interview Tricks
14. Common Mistakes
15. JavaScript Array Methods
16. Problems Covered
17. Similar Problems
18. Interview Questions
19. Revision Cheat Sheet

---

# 1. What is an Array?

An array is a contiguous block of memory used to store multiple values of the same logical type.

Example

```
Index

0  1  2  3  4

Value

5  9  3  8  1
```

Each element can be accessed directly using its index.

```
arr[2] = 3
```

This direct access is what makes arrays extremely powerful.

---

# 2. Why Arrays?

Arrays provide

- Fast indexing
- Cache-friendly memory layout
- Simple traversal
- Easy sorting
- Foundation for many advanced data structures

Many interview questions eventually reduce to manipulating an array efficiently.

Examples

- Stock prices
- Temperatures
- User activity
- Sales reports
- Sensor readings

Almost everything can be represented as an array.

---

# 3. Time Complexity

| Operation           | Complexity     |
| ------------------- | -------------- |
| Access by index     | O(1)           |
| Update by index     | O(1)           |
| Traverse            | O(n)           |
| Search              | O(n)           |
| Insert at end       | O(1) amortized |
| Insert at beginning | O(n)           |
| Delete at end       | O(1)           |
| Delete at beginning | O(n)           |

---

# 4. Memory Layout

Arrays are stored in contiguous memory.

```
Address

100
104
108
112
116

Values

10
20
30
40
50
```

Because every element is stored next to the previous one,

finding

```
arr[3]
```

is simply

```
baseAddress + index × elementSize
```

This is why indexing is O(1).

---

# 5. How do I recognize an Array problem?

Ask yourself these questions.

✓ Is the input an array?

✓ Do I need to scan every element?

✓ Do I need maximum or minimum?

✓ Do I need prefix or suffix information?

✓ Do I need to rearrange elements?

✓ Do I need to find duplicates?

✓ Is sorting allowed?

If YES,

start thinking in terms of array patterns.

---

# 6. Common Array Patterns

## Pattern 1

Linear Traversal

```
for (let i = 0; i < nums.length; i++) {

}
```

Used for

- Maximum
- Minimum
- Count
- Sum
- Frequency

---

## Pattern 2

Forward + Backward Pass

Example

Product Except Self

```
Left Products

↓

Right Products

↓

Combine
```

---

## Pattern 3

Prefix Array

```
nums

1 2 3 4

↓

prefix

1 3 6 10
```

Useful for

- Range Sum
- Prefix Product

---

## Pattern 4

Suffix Array

```
nums

1 2 3 4

↓

suffix

24 24 12 4
```

---

## Pattern 5

Greedy

Keep track of

- Best answer
- Running maximum
- Running minimum

Example

Best Time to Buy and Sell Stock

---

## Pattern 6

Sorting

Sort first

↓

Solve later

Common in interview questions.

---

# 7. Generic Templates

## Find Maximum

```javascript
let max = nums[0];

for (let num of nums) {
  max = Math.max(max, num);
}

return max;
```

---

## Count Elements

```javascript
let count = 0;

for (let num of nums) {
  if (num > 10) {
    count++;
  }
}
```

---

## Running Sum

```javascript
let sum = 0;

for (let num of nums) {
  sum += num;
}
```

---

## Prefix Array

```javascript
let prefix = new Array(nums.length);

prefix[0] = nums[0];

for (let i = 1; i < nums.length; i++) {
  prefix[i] = prefix[i - 1] + nums[i];
}
```

---

## Reverse Traversal

```javascript
for (let i = nums.length - 1; i >= 0; i--) {}
```

---

# 8. One Pass vs Two Pass

## One Pass

```
0 → n
```

Example

Best Time to Buy and Sell Stock

Only one traversal needed.

Time

O(n)

---

## Two Pass

```
Left

↓

Right
```

Example

Product Except Self

Need information from both directions.

Still O(n).

---

# 9. Prefix & Suffix Technique

Example

```
nums

1 2 3 4

Prefix

1 2 6 24

Suffix

24 24 12 4
```

Combine both arrays to answer questions efficiently.

Used in

- Product Except Self
- Trapping Rain Water (conceptually)
- Range Queries

---

# 10. In-place Modification

Sometimes interviewers don't allow extra space.

Instead of creating a new array,

modify the existing one.

Example

Move Zeroes

```
0 1 0 3 12

↓

1 3 12 0 0
```

No extra array.

---

# 11. Greedy with Arrays

Greedy means

"Take the best decision now."

Example

Stock Prices

```
7 1 5 3 6 4

Minimum So Far

↓

Maximum Profit
```

Only keep

```
minPrice

maxProfit
```

---

# 12. Sorting + Arrays

Many problems become easier after sorting.

Examples

- Merge Intervals
- Three Sum
- Two Sum II
- Meeting Rooms

Always ask

"Can I sort the array?"

If YES,

complexity often becomes

```
O(n log n)
```

---

# 13. Common Interview Tricks

## Running Minimum

Stock problem

---

## Running Maximum

Kadane

---

## Prefix Product

Product Except Self

---

## Prefix Sum

Subarray Sum

---

## Sorting

Three Sum

---

## Two Pass

Rain Water

---

## Frequency

Top K Frequent

---

# 14. Common Mistakes

❌ Off-by-one

```javascript
i <= nums.length;
```

Should be

```javascript
i < nums.length;
```

---

❌ Forgetting empty array

---

❌ Integer overflow (Java/C++)

---

❌ Modifying input accidentally

---

❌ Extra space when interviewer asked for O(1)

---

# 15. Useful JavaScript Methods

## Push

```javascript
arr.push(x);
```

---

## Pop

```javascript
arr.pop();
```

---

## Shift

```javascript
arr.shift();
```

O(n)

---

## Unshift

```javascript
arr.unshift(x);
```

O(n)

---

## Slice

```javascript
arr.slice(start, end);
```

Returns new array.

---

## Splice

```javascript
arr.splice(index, count);
```

Modifies original array.

---

## Reverse

```javascript
arr.reverse();
```

---

## Sort

```javascript
arr.sort((a, b) => a - b);
```

Always provide a comparator for numbers.

---

## Fill

```javascript
new Array(5).fill(0);
```

---

## Map

```javascript
nums.map((x) => x * 2);
```

---

## Filter

```javascript
nums.filter((x) => x > 0);
```

---

# 16. Problems Covered

Easy

- Two Sum
- Best Time to Buy and Sell Stock
- Move Zeroes

Medium

- Product of Array Except Self
- Maximum Subarray
- Trapping Rain Water

Hard

- First Missing Positive
- Candy

---

# 17. Similar Problems

Two Sum

↓

Two Sum II

↓

Three Sum

↓

Four Sum

---

Stock

↓

Stock II

↓

Stock III

↓

Stock IV

↓

Stock with Cooldown

---

Product Except Self

↓

Prefix Product

↓

Prefix Sum

↓

Subarray Product

---

# 18. Interview Questions

Q. Why is array indexing O(1)?

A. Because arrays are stored in contiguous memory and the address is computed directly using:

```
baseAddress + index × elementSize
```

---

Q. Why is inserting at the beginning O(n)?

Because every element must shift one position to the right.

---

Q. Why is appending usually O(1)?

Dynamic arrays allocate extra capacity, so most appends do not require reallocation. Occasionally, resizing makes an append O(n), but the amortized cost remains O(1).

---

Q. When should I sort an array?

When element order doesn't matter and sorting simplifies the logic enough to justify the O(n log n) cost.

---

# 19. Revision Cheat Sheet

## Recognition

✔ Sequential processing

✔ Maximum / Minimum

✔ Prefix / Suffix

✔ Rearrangement

✔ Sorting

---

## Patterns

- Linear Traversal
- Prefix Sum
- Prefix Product
- Two Pass
- Running Maximum
- Running Minimum
- Greedy
- Sorting

---

## Time Complexity

Access O(1)

Update O(1)

Traversal O(n)

Search O(n)

Sort O(n log n)

---

## Key Takeaways

- Arrays are the foundation of many interview problems.
- Always identify whether a one-pass, two-pass, or sorting-based approach is appropriate.
- Master prefix/suffix techniques—they appear in many medium-level questions.
- Think about space constraints early: can you solve it in-place?
- Before reaching for advanced data structures, ask if a simple array traversal is sufficient.
