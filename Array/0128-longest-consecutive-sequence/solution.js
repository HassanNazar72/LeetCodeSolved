/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    const set = new Set(nums)
    let max = 0
    
    for(let num of set){
        if(set.has(num -1)){
            continue
        }
        let currentnum = num
        let currentmax = 1;

        while(set.has(currentnum+1)){
            currentnum ++;
            currentmax ++
        }
        max = Math.max(max, currentmax)
    }
    return max
    
};
