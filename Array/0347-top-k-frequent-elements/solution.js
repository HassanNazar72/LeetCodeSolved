/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // Step 1: count frequency of each number
    const map = {};
    for (const num of nums) {
        map[num] = (map[num] || 0) + 1;
    }

    // Step 2: create empty buckets where index = frequency
    const buckets = [];
    for (let i = 0; i <= nums.length; i++) {
        buckets[i] = [];
    }
    // Step 3: place each number into bucket matching its frequency
    for(const num in map){
        const freq = map[num]
        buckets[freq].push(Number(num))
    }
    // Step 4: read from right to left, grab k elements
    const result = [];
    for (let i = buckets.length - 1; i >= 0; i--) {
        for (const num of buckets[i]) {
            result.push(num);
            if (result.length === k) return result;
        }
    }
};
