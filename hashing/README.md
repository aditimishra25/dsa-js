# #️⃣ Hashing

> **"Hashing is the art of trading extra memory for faster lookups."**

Hashing is one of the most important topics for coding interviews. If Arrays are the foundation of DSA, then Hashing is the first tool you should think of whenever you need **fast searching, counting, grouping, or duplicate detection**.

Many LeetCode Medium problems that seem complicated become straightforward with a `HashMap` or `HashSet`.

---

# Table of Contents

1. What is Hashing?
2. Why Hashing?
3. HashMap vs HashSet
4. Time Complexity
5. Internal Working
6. Recognition Guide
7. Common Hashing Patterns
8. Generic Templates
9. Frequency Counting
10. Prefix Sum + HashMap
11. Hashing + Arrays
12. Hashing + Strings
13. Common Interview Tricks
14. JavaScript HashMap & HashSet
15. Common Mistakes
16. Problems Covered
17. Similar Problems
18. Interview Questions
19. Revision Cheat Sheet

---

# 1. What is Hashing?

Hashing is a technique used to **store and retrieve data efficiently**.

Instead of searching through every element,

```
1 5 8 2 9 4
```

we directly jump to where the value is stored.

Think of it like a dictionary.

Instead of reading every page to find a word,

you immediately jump to its location.

---

## Real-Life Examples

### Contact List

```
"Aditi"

↓

Phone Number
```

You don't search every contact manually.

---

### Student Roll Number

```
101

↓

Student Details
```

---

### Username

```
john123

↓

User Object
```

---

### Product ID

```
P1023

↓

Product Information
```

---

Hashing is everywhere.

---

# 2. Why Hashing?

Without Hashing

Searching

```
1 4 6 2 8 9

Need to check

1

↓

4

↓

6

↓

2

↓

...
```

Time

```
O(n)
```

---

With Hashing

```
map.get(6)
```

Done instantly.

Time

```
O(1)
```

---

Hashing sacrifices a little extra memory to achieve much faster operations.

---

# 3. HashMap vs HashSet

## HashMap

Stores

```
Key

↓

Value
```

Example

```
"Aditi"

↓

24
```

JavaScript

```javascript
let map = new Map();

map.set("Aditi", 24);
```

---

## HashSet

Stores

```
Only Values
```

Example

```
Apple

Banana

Orange
```

JavaScript

```javascript
let set = new Set();

set.add("Apple");
```

---

### When to Use Which?

Use **HashMap** when you need to store additional information.

Example

```
Character

↓

Frequency
```

---

Use **HashSet** when you only need to know

```
Does this exist?
```

---

# 4. Time Complexity

| Operation | HashMap | HashSet |
|-----------|---------|---------|
| Insert | O(1) Average |
| Search | O(1) Average |
| Delete | O(1) Average |

Worst case

```
O(n)
```

because of collisions.

However,

interviews assume

```
Average O(1)
```

---

# 5. How Does Hashing Work?

Suppose we insert

```
42
```

Hash Function

```
42

↓

Hash Code

↓

Bucket 7
```

The value is stored in Bucket 7.

When searching,

the same hash function is applied.

```
42

↓

Bucket 7

↓

Found
```

---

## Hash Collision

Sometimes

```
42

↓

Bucket 7

and

82

↓

Bucket 7
```

Both land in the same bucket.

This is called a **collision**.

Languages solve collisions internally using techniques like:

- Chaining
- Open Addressing

You don't need to implement these for interviews.

---

# 6. Recognition Guide

Ask yourself

□ Need to find duplicates?

↓

HashSet

------------------------

□ Need frequencies?

↓

HashMap

------------------------

□ Need grouping?

↓

HashMap

------------------------

□ Need fast lookup?

↓

HashMap

------------------------

□ Need "have I seen this before?"

↓

HashSet

------------------------

□ Need pair lookup?

↓

HashMap

---

# 7. Common Hashing Patterns

## Pattern 1

Duplicate Detection

Example

```
1 2 3 2
```

Need

```
Seen Before?
```

Use HashSet.

---

## Pattern 2

Frequency Count

Example

```
A A B C A

↓

A → 3

B → 1

C → 1
```

Use HashMap.

---

## Pattern 3

Index Mapping

Example

Two Sum

```
Value

↓

Index
```

---

## Pattern 4

Grouping

Example

Group Anagrams

```
eat

tea

ate

↓

Same Group
```

---

## Pattern 5

Visited Tracking

Used in

- Graph DFS
- Graph BFS
- Clone Graph
- Number of Islands

---

## Pattern 6

Prefix Sum + HashMap

Very common interview pattern.

---

# 8. Generic Templates

## HashSet

```javascript
let set = new Set();

for (let num of nums) {

    if (set.has(num)) {
        return true;
    }

    set.add(num);
}
```

---

## Frequency Map

```javascript
let map = new Map();

for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
}
```

---

## Index Map

```javascript
let map = new Map();

for (let i = 0; i < nums.length; i++) {

    map.set(nums[i], i);

}
```

---

## Character Frequency

```javascript
let map = new Map();

for (let ch of str) {

    map.set(ch, (map.get(ch) || 0) + 1);

}
```

---

# 9. Frequency Counting

One of the most common interview techniques.

Example

```
apple

↓

a → 1

p → 2

l → 1

e → 1
```

Template

```javascript
let freq = new Map();

for (let ch of word) {

    freq.set(ch, (freq.get(ch) || 0) + 1);

}
```

---

# 10. Prefix Sum + HashMap

One of the most important hashing patterns.

Example

Subarray Sum Equals K

Instead of checking every possible subarray,

store

```
Prefix Sum

↓

Frequency
```

Example

```
nums

1 2 3

Prefix

1

3

6
```

HashMap

```
Sum

↓

Occurrences
```

This reduces

```
O(n²)

↓

O(n)
```

---

# 11. Hashing + Arrays

Examples

- Two Sum
- Contains Duplicate
- Longest Consecutive Sequence
- Subarray Sum Equals K

---

# 12. Hashing + Strings

Examples

- Valid Anagram
- Group Anagrams
- Isomorphic Strings
- Find All Anagrams in a String

---

# 13. Common Interview Tricks

## Value → Index

Example

Two Sum

```
Value

↓

Index
```

---

## Value → Frequency

Example

Top K Frequent Elements

---

## Character → Frequency

Example

Valid Anagram

---

## Prefix Sum → Count

Example

Subarray Sum Equals K

---

## Visited

Example

Clone Graph

---

# 14. JavaScript HashMap & HashSet

## Create

```javascript
let map = new Map();
let set = new Set();
```

---

## Insert

```javascript
map.set(key, value);

set.add(value);
```

---

## Search

```javascript
map.has(key);

set.has(value);
```

---

## Get

```javascript
map.get(key);
```

---

## Delete

```javascript
map.delete(key);

set.delete(value);
```

---

## Size

```javascript
map.size;

set.size;
```

---

## Iterate Map

```javascript
for (let [key, value] of map) {

}
```

---

## Iterate Set

```javascript
for (let value of set) {

}
```

---

# 15. Common Mistakes

❌ Forgetting to initialize count.

Correct

```javascript
(map.get(x) || 0) + 1
```

---

❌ Using Object instead of Map without understanding differences.

Objects convert keys to strings.

Map supports any data type as a key.

---

❌ Forgetting to update frequency.

---

❌ Using Array.includes()

```
O(n)
```

instead of

```
HashSet.has()

O(1)
```

---

❌ Forgetting to mark visited.

---

# 16. Problems Covered

## Easy

- Two Sum (#1)
- Contains Duplicate (#217)
- Valid Anagram (#242)

---

## Medium

- Group Anagrams (#49)
- Longest Consecutive Sequence (#128)
- Subarray Sum Equals K (#560)
- Top K Frequent Elements (#347)

---

## Hard

- Minimum Window Substring (#76)
- Alien Dictionary (#269) *(uses HashMap + Graph)*

---

# 17. Similar Problems

Contains Duplicate

↓

Contains Duplicate II

↓

Contains Duplicate III

---

Valid Anagram

↓

Group Anagrams

↓

Find All Anagrams

---

Two Sum

↓

Two Sum II

↓

Three Sum

↓

Four Sum

---

Prefix Sum

↓

Subarray Sum Equals K

↓

Continuous Subarray Sum

↓

Binary Subarrays With Sum

---

# 18. Interview Questions

## Why is HashMap O(1)?

Because the hash function computes the bucket directly, avoiding a linear search in the average case.

---

## HashMap vs Array?

Use an array when indices are continuous and known.

Use a HashMap when keys can be arbitrary values like strings or sparse numbers.

---

## HashSet vs HashMap?

HashSet stores only values.

HashMap stores key-value pairs.

---

## Can duplicate keys exist?

No.

A key is unique.

Adding the same key again updates its value.

---

## Why use a Set for duplicate detection?

Checking

```javascript
set.has(x)
```

is O(1) on average, while searching an array with

```javascript
includes()
```

is O(n).

---

# 19. Decision Tree

```
Need Fast Lookup?

        │
        ▼
     HashMap

──────────────

Need Duplicates?

        │
        ▼
      HashSet

──────────────

Need Frequency?

        │
        ▼
     HashMap

──────────────

Need Grouping?

        │
        ▼
     HashMap

──────────────

Need Visited?

        │
        ▼
      HashSet

──────────────

Need Prefix Sum?

        │
        ▼
 HashMap + Prefix Sum
```

---

# 20. Revision Cheat Sheet

## Recognition

✔ Duplicates

✔ Frequency

✔ Fast Lookup

✔ Grouping

✔ Visited

✔ Prefix Sum

---

## Common Patterns

- Duplicate Detection
- Frequency Counting
- Value → Index Mapping
- Prefix Sum + HashMap
- Character Counting
- Grouping
- Visited Tracking

---

## Core Data Structures

HashMap

```
Key → Value
```

HashSet

```
Value Only
```

---

## Complexity

Insert

```
O(1)
```

Search

```
O(1)
```

Delete

```
O(1)
```

Average Case

---

## Golden Rule

> **Whenever you find yourself repeatedly searching for an element, counting occurrences, grouping items, or checking whether something has already been seen, pause and ask: "Can a HashMap or HashSet reduce this from O(n²) to O(n)?"**

In interviews, that single question often leads to the optimal solution.