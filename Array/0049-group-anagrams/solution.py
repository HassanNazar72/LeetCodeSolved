from collections import defaultdict


class Solution:

  def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
    anagram = defaultdict(list)

    for word in strs:
      sorted_word = "".join(sorted(word))  # Sort individual word as key
      anagram[sorted_word].append(word)  # Append original word to its list

    return list(anagram.values())  # Return only the values of the map
