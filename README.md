# LeetCode Interview Preparation

A structured collection of LeetCode solutions organized by patterns, data structures, and interview concepts.

*************************************************************************************
*************************************************************************************

# Pattern Cheat Sheet

## Arrays
- Two Sum → HashMap lookup
- Best Time to Buy and Sell Stock → Running minimum
- Product of Array Except Self → Prefix + Suffix products

## Hashing
- Contains Duplicate → HashSet
- Valid Anagram → Frequency counting
- Group Anagrams → Canonical key generation
- Longest Consecutive Sequence → Sequence detection with Set

--------------------------------------------------------------------------------------

## Two Pointers

### Opposite Direction
- Valid Palindrome
- Container With Most Water
- Trapping Rain Water

Pattern:
- left = start
- right = end
- Move pointers based on condition

### Placement Pointers
- Move Zeroes
- Remove Duplicates from Sorted Array

Pattern:
- Read pointer
- Write pointer

### Fixed + Two Pointers
- Three Sum

Pattern:
- Sort
- Fix one element
- Search remaining array using left/right

### Dutch National Flag
- Sort Colors

Pattern:
- 0-zone
- 1-zone
- Unknown-zone
- 2-zone

Pointers:
- left
- current
- right

--------------------------------------------------------------------------------------

## Sliding Window

### Fixed Size
- Maximum Average Subarray
- Find All Anagrams in a String
- Permutation in String
- Maximum Points You Can Obtain from Cards

### Variable Size
- Longest Substring Without Repeating Characters
- Longest Repeating Character Replacement
- Fruits Into Baskets
- Minimum Window Substring
- Minimum Size Subarray Sum

Pattern:
- Expand
- Violate condition
- Shrink
- Repeat

--------------------------------------------------------------------------------------

## Prefix Sum
- Subarray Sum Equals K

Pattern:
- Running prefix sum
- HashMap lookup

--------------------------------------------------------------------------------------

## Stack
- Valid Parentheses
- Min Stack
- Evaluate Reverse Polish Notation
- Decode String
- Asteroid Collision

## Monotonic Stack
- Daily Temperatures
- Next Greater Element I
- Next Greater Element II
- Car Fleet
- Largest Rectangle in Histogram

--------------------------------------------------------------------------------------

## Binary Search
- Binary Search
- First Bad Version

Pattern:
- Mid
- Eliminate half

--------------------------------------------------------------------------------------

## Linked List
- Reverse Linked List
- Middle of Linked List
- Cycle Detection
- Merge Lists
- LRU Cache

--------------------------------------------------------------------------------------

## Trees

### DFS
- Max Depth
- Balanced Tree
- Diameter
- Path Sum
- Good Nodes
- Maximum Path Sum
- Same Tree
- Subtree
- LCA

### BFS
- Level Order
- Right Side View
- Zigzag
- Average of Levels

## BST
- Search
- Insert
- Delete
- Validate
- Kth Smallest
- LCA

## Graphs
- Number of Islands → DFS
- Word Ladder → BFS shortest path

## Heap
- Top K Frequent
- Kth Largest

--------------------------------------------------------------------------------------

## Recursion
- Fibonacci
- Climbing Stairs
- Generate Parentheses

--------------------------------------------------------------------------------------

## Dynamic Programming
- Maximum Subarray
- Fibonacci
- Climbing Stairs

*************************************************************************************
*************************************************************************************

# Repository Structure

## Arrays
- Two Sum
- Best Time to Buy and Sell Stock
- Product of Array Except Self

## Hashing
- Contains Duplicate
- Valid Anagram
- Group Anagrams
- Longest Consecutive Sequence

## Two Pointers
- Valid Palindrome
- Move Zeroes
- Remove Duplicates
- Container With Most Water
- Three Sum
- Trapping Rain Water

### Dutch National Flag Algorithm
- Sort Colors

## Sliding Window

### Fixed Size
- Maximum Average Subarray
- Find All Anagrams in a String
- Permutation in String
- Maximum Points You Can Obtain from Cards

### Variable Size
- Longest Substring Without Repeating Characters
- Longest Repeating Character Replacement
- Fruits Into Baskets
- Minimum Window Substring
- Minimum Size Subarray Sum

## Prefix Sum
- Subarray Sum Equals K

## Stack
- Valid Parentheses
- Min Stack
- Evaluate Reverse Polish Notation
- Decode String
- Asteroid Collision

## Monotonic Stack
- Daily Temperatures
- Next Greater Element I
- Next Greater Element II
- Car Fleet
- Largest Rectangle in Histogram

## Binary Search
- Binary Search
- First Bad Version

## Linked List
- Reverse Linked List
- Middle of Linked List
- Remove Nth Node From End
- Merge Two Sorted Lists
- Reorder List
- Linked List Cycle
- Linked List Cycle II
- Copy List With Random Pointer
- Find Duplicate Number
- Merge K Sorted Lists
- Reverse Nodes In K Group
- LRU Cache

## Trees

### DFS
- Maximum Depth
- Invert Binary Tree
- Same Tree
- Balanced Binary Tree
- Diameter Of Binary Tree
- Path Sum
- Subtree Of Another Tree
- Count Good Nodes
- Lowest Common Ancestor Of Binary Tree
- Binary Tree Maximum Path Sum

### BFS
- Level Order Traversal
- Right Side View
- Zigzag Level Order
- Average Of Levels

### Traversals
- Inorder
- Preorder
- Postorder

### Tree Construction
- Preorder + Inorder
- Inorder + Postorder
- Preorder + Postorder

### Serialization
- Serialize And Deserialize Binary Tree

## BST
- Search In BST
- Insert Into BST
- Delete Node In BST
- Validate BST
- Kth Smallest Element
- Lowest Common Ancestor
- Convert Sorted Array To BST

## Graphs
- Number Of Islands
- Word Ladder

## Heap
- Top K Frequent Elements
- Kth Largest Element

## Recursion
- Fibonacci Number
- Climbing Stairs
- Generate Parentheses

## Dynamic Programming
- Maximum Subarray (Kadane's Algorithm)

*************************************************************************************
*************************************************************************************

# Complexity Cheat Sheet

## Arrays
- Traversal → O(n)
- Nested Loops → O(n²)

## HashMap / HashSet
- Insert → O(1)
- Lookup → O(1)
- Delete → O(1)

## Stack
- Push → O(1)
- Pop → O(1)

## Queue
- Push → O(1)
- Pop → O(1)

## Binary Search
- Time → O(log n)

## Heap
- Push → O(log n)
- Pop → O(log n)
- Peek → O(1)

## DFS
- Time → O(n)
- Space → O(h)

## BFS
- Time → O(n)
- Space → O(w)

*************************************************************************************
*************************************************************************************