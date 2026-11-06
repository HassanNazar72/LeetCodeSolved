/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
    let set = new Set(s);
    let a1 = [...set]
    return a1.length
};
