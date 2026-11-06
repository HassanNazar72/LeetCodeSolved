/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let reference = strs[0];
    let output = "";

    for (let i = 0; i < reference.length; i++) {
        let char = reference[i];

        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== char) {
                return output;
            }
        }

        output += char;
    }

    return output;
};
