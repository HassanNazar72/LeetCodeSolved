class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        minPrice = math.inf
        maxProfit = 0

        for i in range(len(prices)):
            if(prices[i]<minPrice):
                minPrice = prices[i]
            else:
                todayProfit = prices[i] -minPrice
                maxProfit = max(maxProfit,todayProfit)
        return maxProfit
