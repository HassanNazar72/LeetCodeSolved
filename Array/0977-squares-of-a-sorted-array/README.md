# [977. Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/)

[Array](../README.md) / [All problems](../../README.md)

| Difficulty | Status | Submissions | First tried | Solved on |
| --- | --- | --- | --- | --- |
| Easy | Solved | 7 | 2026-04-07 | 2026-04-07 |

**Topics:** Array, Two Pointers, Sorting

## My code

| Language | Result | Runtime | Memory | Date |
| --- | --- | --- | --- | --- |
| [javascript](solution.js) | Accepted | 3 ms | 62.3 MB | 2026-04-07 |

## Submission history

| Date | Result | Language | Runtime | Memory |
| --- | --- | --- | --- | --- |
| 2026-04-07 | Accepted | javascript | 3 ms | 62.3 MB |
| 2026-04-07 | Accepted | javascript | - | - |
| 2026-04-07 | Runtime Error | javascript | - | - |
| 2026-04-07 | Accepted | javascript | - | - |
| 2026-04-07 | Wrong Answer | javascript | - | - |
| 2026-04-07 | Wrong Answer | javascript | - | - |
| 2026-04-07 | Wrong Answer | javascript | - | - |

## Problem

<details>
<summary>Show description</summary>

<p>Given an integer array <code>nums</code> sorted in <strong>non-decreasing</strong> order, return <em>an array of <strong>the squares of each number</strong> sorted in non-decreasing order</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [-4,-1,0,3,10]
<strong>Output:</strong> [0,1,9,16,100]
<strong>Explanation:</strong> After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [-7,-3,2,3,11]
<strong>Output:</strong> [4,9,9,49,121]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code><span>1 &lt;= nums.length &lt;= </span>10<sup>4</sup></code></li>
	<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
	<li><code>nums</code> is sorted in <strong>non-decreasing</strong> order.</li>
</ul>

<p>&nbsp;</p>
<strong>Follow up:</strong> Squaring each element and sorting the new array is very trivial, could you find an <code>O(n)</code> solution using a different approach?

</details>
