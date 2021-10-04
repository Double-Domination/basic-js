import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;
  const coeficent = Math.LN2 / HALF_LIFE_PERIOD;

  if (typeof sampleActivity !== 'string') {
    return false;
  }

  sampleActivityProcessed = parseFloat(sampleActivity);
  if (isNaN(sampleActivityProcessed)) {
    return false;
  }

  if (sampleActivity > MODERN_ACTIVITY) {
    return false;
  }
  //if zero or less
  if (sampleActivityProcessed === 0 || sampleActivityProcessed < 0) {
    return false;
  }

  let result = Math.log(MODERN_ACTIVITY / sampleActivityProcessed) / coeficent;
  return Math.ceil(result);
}
