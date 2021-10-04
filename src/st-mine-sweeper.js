import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  const tmp = [...matrix].map((x) =>
    x.map((y) => (y === false ? Number(y) : y)),
  );

  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      if (matrix[x][y] === true) {
        Number.isInteger(tmp[x - 1] && tmp[x - 1][y]) && tmp[x - 1][y]++;
        Number.isInteger(tmp[x] && tmp[x][y - 1]) && tmp[x][y - 1]++;
        Number.isInteger(tmp[x + 1] && tmp[x + 1][y]) && tmp[x + 1][y]++;
        Number.isInteger(tmp[x] && tmp[x][y + 1]) && tmp[x][y + 1]++;
        Number.isInteger(tmp[x - 1] && tmp[x - 1][y - 1]) &&
          tmp[x - 1][y - 1]++;
        Number.isInteger(tmp[x + 1] && tmp[x + 1][y + 1]) &&
          tmp[x + 1][y + 1]++;
        Number.isInteger(tmp[x - 1] && tmp[x - 1][y + 1]) &&
          tmp[x - 1][y + 1]++;
        Number.isInteger(tmp[x + 1] && tmp[x + 1][y - 1]) &&
          tmp[x + 1][y - 1]++;
      }
    }
  }

  return tmp.map((x) => x.map((y) => (y === true ? 1 : y)));
}
