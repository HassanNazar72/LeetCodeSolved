class Solution:
    def frequencySort(self, s: str) -> str:
        freq = [[] for i in range(len(s)+1)]
        count = {}

        for n in s:
            count[n] = count.get(n,0)+1
        for n,c in count.items():
            freq[c].append(n * c)

        result = []

        for i in range(len(freq)-1,0,-1):
            for item in freq[i]:
                result.append(item)
            
        return "".join(result)

