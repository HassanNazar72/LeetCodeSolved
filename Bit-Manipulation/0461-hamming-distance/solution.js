/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let binary_x = x.toString(2);
    let binary_y = y.toString(2);
    
    let maxLen = Math.max(binary_x.length, binary_y.length);
    binary_x = binary_x.padStart(maxLen, "0");
    binary_y = binary_y.padStart(maxLen, "0");

    let output = 0;

    for (let i = 0; i < maxLen; i++) {
        if (binary_x[i] !== binary_y[i]) {
            output++;
        }
    }

    return output;
};
