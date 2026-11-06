/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let count = 0
    let arr = Array.from(String(x));

    for(let i =0;i<arr.length;i++){
        if(arr[i]==arr[arr.length-1-i]){
            count += 1
        } 
    }
    if(count == arr.length){
        return true
    }
    else{
        return false
    }
};
