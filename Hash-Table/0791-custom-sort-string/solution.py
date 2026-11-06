class Solution:

  def customSortString(self, order: str, s: str) -> str:
    # 1. Start with an empty result string
    result = ""

    # 2. Loop through 'order' from left to right
    for char in order:
      # Append every occurrence of this char from 's' directly to result
      for s_char in s:
        if s_char == char:
          result += s_char

    # 3. Loop through 's' for characters NOT in 'order' and append them directly
    for s_char in s:
      if s_char not in order:
        result += s_char

    return result
