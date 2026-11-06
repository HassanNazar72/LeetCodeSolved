/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let square = []
    for(let i=0;i<nums.length;i++){
        let numbersquare = nums[i]** 2
        square.push(numbersquare)
    }
    
    let left =0
    let right=square.length-1
    let output = []
    while(left <= right){
        if(square[right]>square[left]){
            output.push(square[right])
            right--
        }
        else
        {
            output.push(square[left])
            left++
        }
    }
    return output.reverse()
};
