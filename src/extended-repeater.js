import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;

  let result = '';
  let toAddition = '';

  if (addition !== '') {
    toAddition = repeater(addition, {
      repeatTimes: additionRepeatTimes,
      separator: additionSeparator,
    });
  }

  if (repeatTimes > 0) result = str + toAddition;
  repeatTimes -= 1;

  for (let i = 0; i < repeatTimes; ) {
    result += separator + str + toAddition;
    repeatTimes -= 1;
  }
  return result;
}
