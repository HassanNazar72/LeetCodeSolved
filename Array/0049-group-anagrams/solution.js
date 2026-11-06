/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let map = {};

    for (let word of strs) {

        // create 26 zeros for each letter a-z
        let count = new Array(26).fill(0);

        // count each letter in the word
        for (let char of word) {
            let index = char.charCodeAt(0) - 97;
            count[index] = count[index] + 1;
        }

        // turn count array into a string key
        let key = count.join(",");

        // if key doesn't exist yet, create empty array
        if (!map[key]) {
            map[key] = [];
        }

        // add the word to its group
        map[key].push(word);
    }

    return Object.values(map);
};


