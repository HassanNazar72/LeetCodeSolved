/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let lowered = []
    let firstrow = "qwertyuiop"
    let secondrow = "asdfghjkl"
    let thirdrow = "zxcvbnm"
    let output = []

    for (let i = 0; i < words.length; i++) {
        lowered.push(words[i].toLowerCase())
    }

    for (let i = 0; i < lowered.length; i++) {
        let splitWord = lowered[i].split("")
        
        let inFirst = true
        let inSecond = true
        let inThird = true
        
        for (let j = 0; j < splitWord.length; j++) {
            let ch = splitWord[j]

            if (!firstrow.includes(ch)) inFirst = false
            if (!secondrow.includes(ch)) inSecond = false
            if (!thirdrow.includes(ch)) inThird = false
        }

        if (inFirst || inSecond || inThird) {
            output.push(words[i])
        }
    }

    return output
};
