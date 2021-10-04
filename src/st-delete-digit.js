import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let arr = n
    .toString()
    .split('')
    .map((x) => Number(x));
  let minimum = arr.indexOf(Math.min(...arr));
  arr.splice(minimum, 1);
  return Number(arr.join(''));
}
