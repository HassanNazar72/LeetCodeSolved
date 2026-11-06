class Solution:

  def firstUniqChar(self, s: str) -> int:
    count = {}
    for n in s:
      count[n] = count.get(n, 0) + 1

    # Loop through the string by index and return the first char with count == 1
    for i in range(len(s)):
      if count[s[i]] == 1:
        return i

    return -1
