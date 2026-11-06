# [1. Two Sum](https://leetcode.com/problems/two-sum/)

[Array](../README.md) / [All problems](../../README.md)

| Difficulty | Status | Submissions | First tried | Solved on |
| --- | --- | --- | --- | --- |
| Easy | Solved | 13 | 2024-06-19 | 2024-06-19 |

**Topics:** Array, Hash Table

## My code

| Language | Result | Runtime | Memory | Date |
| --- | --- | --- | --- | --- |
| [javascript](solution.js) | Accepted | 1 ms | 55.5 MB | 2026-04-04 |
| [python3](solution.py) | Accepted | 1 ms | 20.4 MB | 2026-11-05 |

## Submission history

| Date | Result | Language | Runtime | Memory |
| --- | --- | --- | --- | --- |
| 2026-11-05 | Accepted | python3 | 1 ms | 20.4 MB |
| 2026-10-02 | Accepted | python3 | - | - |
| 2026-04-08 | Wrong Answer | javascript | - | - |
| 2026-04-04 | Accepted | javascript | 1 ms | 55.5 MB |
| 2025-12-11 | Accepted | javascript | - | - |
| 2025-12-11 | Accepted | javascript | - | - |
| 2025-12-10 | Accepted | javascript | - | - |
| 2025-12-10 | Accepted | javascript | - | - |
| 2025-12-10 | Runtime Error | javascript | - | - |
| 2025-12-10 | Wrong Answer | javascript | - | - |
| 2025-11-30 | Accepted | javascript | - | - |
| 2025-11-30 | Wrong Answer | javascript | - | - |
| 2024-06-19 | Accepted | javascript | - | - |

## Problem

<details>
<summary>Show description</summary>

<p>You are given an array of integers <code>nums</code>&nbsp;and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>

<p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.</p>

<p>You can return the answer in any order.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<p><strong>Input:</strong> <code>nums = [2,7,11,15], target = 9</code></p>

<p><strong>Output:</strong> <code>[0,1]</code></p>

<p><strong>Explanation:</strong></p>

<p>The sum of <code>nums[0]</code> and <code>nums[1]</code> is <code>2 + 7 = 9</code>, which equals the target. Therefore, the indices <code>[0, 1]</code> are returned.</p>

<p><strong>Example 2:</strong></p>

<p><strong>Input:</strong> <code>nums = [3,2,4], target = 6</code></p>

<p><strong>Output:</strong> <code>[1,2]</code></p>

<p><strong>Explanation:</strong></p>

<p>The sum of <code>nums[1]</code> and <code>nums[2]</code> is <code>2 + 4 = 6</code>, which equals the target. Therefore, the indices <code>[1, 2]</code> are returned.</p>

<p><strong>Example 3:</strong></p>

<p><strong>Input:</strong> <code>nums = [3,3], target = 6</code></p>

<p><strong>Output:</strong> <code>[0,1]</code></p>

<p><strong>Explanation:</strong></p>

<p>The sum of <code>nums[0]</code> and <code>nums[1]</code> is <code>3 + 3 = 6</code>, which equals the target. Therefore, the indices <code>[0, 1]</code> are returned.</p>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>
	<li><strong>Only one valid answer exists.</strong></li>
</ul>

<p>&nbsp;</p>
<strong>Follow-up:&nbsp;</strong>Can you come up with an algorithm that is less than <code>O(n<sup>2</sup>)</code><font face="monospace">&nbsp;</font>time complexity?

</details>
