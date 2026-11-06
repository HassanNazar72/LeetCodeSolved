/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = {};
    let cols = {};
    let square = {};

    for (let i = 0; i < board.length; i++) {
        rows[i] = {};
        cols[i] = {};

        for (let j = 0; j < board.length; j++) {

            // ROW CHECK
            let rowVal = board[i][j];
            if (rowVal !== ".") {
                if (rows[i][rowVal]) {
                    return false;
                }
                rows[i][rowVal] = true;
            }

            // COLUMN CHECK
            let colVal = board[j][i];
            if (colVal !== ".") {
                if (cols[i][colVal]) {
                    return false;
                }
                cols[i][colVal] = true;
            }

            // SQUARE CHECK
            let squareVal = board[i][j];
            if (squareVal !== ".") {
                let squareIndex =
                    Math.floor(i / 3) * 3 + Math.floor(j / 3);

                if (!square[squareIndex]) {
                    square[squareIndex] = {};
                }

                if (square[squareIndex][squareVal]) {
                    return false;
                }

                square[squareIndex][squareVal] = true;
            }
        }
    }

    return true;
};



