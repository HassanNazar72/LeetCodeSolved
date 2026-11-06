# [217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)

[Array](../README.md) / [All problems](../../README.md)

| Difficulty | Status | Submissions | First tried | Solved on |
| --- | --- | --- | --- | --- |
| Easy | Solved | 9 | 2025-12-02 | 2025-12-02 |

**Topics:** Array, Hash Table, Sorting

## My code

| Language | Result | Runtime | Memory | Date |
| --- | --- | --- | --- | --- |
| [javascript](solution.js) | Accepted | 15 ms | 74.1 MB | 2026-04-04 |
| [python3](solution.py) | Accepted | 17 ms | 33.2 MB | 2026-10-29 |

## Submission history

| Date | Result | Language | Runtime | Memory |
| --- | --- | --- | --- | --- |
| 2026-10-29 | Accepted | python3 | 17 ms | 33.2 MB |
| 2026-04-04 | Accepted | javascript | 15 ms | 74.1 MB |
| 2025-12-02 | Accepted | javascript | - | - |
| 2025-12-02 | Accepted | javascript | - | - |
| 2025-12-02 | Time Limit Exceeded | javascript | - | - |
| 2025-12-02 | Time Limit Exceeded | javascript | - | - |
| 2025-12-02 | Wrong Answer | javascript | - | - |
| 2025-12-02 | Wrong Answer | javascript | - | - |
| 2025-12-02 | Wrong Answer | javascript | - | - |

## Problem

<details>
<summary>Show description</summary>

<p>Given an integer array <code>nums</code>, return <code>true</code> if any value appears <strong>at least twice</strong> in the array, and return <code>false</code> if every element is distinct.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,2,3,1]</span></p>

<p><strong>Output:</strong> <span class="example-io">true</span></p>

<p><strong>Explanation:</strong></p>

<p>The element 1 occurs at the indices 0 and 3.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,2,3,4]</span></p>

<p><strong>Output:</strong> <span class="example-io">false</span></p>

<p><strong>Explanation:</strong></p>

<p>All elements are distinct.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,1,1,3,3,4,3,2,4,2]</span></p>

<p><strong>Output:</strong> <span class="example-io">true</span></p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>

</details>
