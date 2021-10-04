import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  constructor(direct = true) {
    this.straight = direct;
  }

  encrypt(msg, key, str = '', x = 0) {
    if (!msg || !key) {
      throw new Error('Incorrect arguments!');
    }

    key = key.toUpperCase();

    msg = msg.toUpperCase();

    for (let i = 0; i < msg.length; i++) {
      if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90) {
        str += String.fromCharCode(
          ((msg.charCodeAt(i) + key.charCodeAt(x % key.length) - 130) % 26) +
            65,
        );
        x++;
      } else {
        str += msg[i];
      }
    }

    return this.straight ? str : str.split('').reverse().join('');
  }

  decrypt(msg, key, str = '', x = 0) {
    if (!msg || !key) {
      throw new Error('Incorrect arguments!');
    }

    key = key.toUpperCase();

    msg = msg.toUpperCase();

    for (let i = 0; i < msg.length; i++) {
      if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90) {
        str += String.fromCharCode(
          ((msg.charCodeAt(i) + 26 - key.charCodeAt(x % key.length)) % 26) + 65,
        );
        x++;
      } else {
        str += msg[i];
      }
    }
    return this.straight ? str : str.split('').reverse().join('');
  }
}
