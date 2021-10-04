import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  const sorted = [...arr].sort((a, b) => a - b).filter((x) => x !== -1);

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    arr[i] === -1 ? result.push(-1) : result.push(sorted.shift());
  }

  return result;
}
