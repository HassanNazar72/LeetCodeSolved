# [242. Valid Anagram](https://leetcode.com/problems/valid-anagram/)

[Hash Table](../README.md) / [All problems](../../README.md)

| Difficulty | Status | Submissions | First tried | Solved on |
| --- | --- | --- | --- | --- |
| Easy | Solved | 3 | 2025-12-02 | 2025-12-02 |

**Topics:** Hash Table, String, Sorting

## My code

| Language | Result | Runtime | Memory | Date |
| --- | --- | --- | --- | --- |
| [javascript](solution.js) | Accepted | 14 ms | 61.1 MB | 2026-04-04 |
| [python3](solution.py) | Accepted | 13 ms | 19.2 MB | 2026-11-05 |

## Submission history

| Date | Result | Language | Runtime | Memory |
| --- | --- | --- | --- | --- |
| 2026-11-05 | Accepted | python3 | 13 ms | 19.2 MB |
| 2026-04-04 | Accepted | javascript | 14 ms | 61.1 MB |
| 2025-12-02 | Accepted | javascript | - | - |

## Problem

<details>
<summary>Show description</summary>

<p>Given two strings <code>s</code> and <code>t</code>, return <code>true</code> if <code>t</code> is an <span data-keyword="anagram">anagram</span> of <code>s</code>, and <code>false</code> otherwise.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;anagram&quot;, t = &quot;nagaram&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">true</span></p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;rat&quot;, t = &quot;car&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">false</span></p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length, t.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>s</code> and <code>t</code> consist of lowercase English letters.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> What if the inputs contain Unicode characters? How would you adapt your solution to such a case?</p>

</details>
