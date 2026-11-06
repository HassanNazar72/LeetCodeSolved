import re

class Solution:
    def isPalindrome(self, s: str) -> bool:
        count = 0
        lower = s.lower()
        result = re.sub(r'[^a-z0-9]', '', lower)
        n = len(result)

        for i in range(n):
            if result[i] == result[n - 1 - i]:
                count += 1

        if count == n:
            return True
        else:
            return False

