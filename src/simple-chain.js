import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  chainState: [],

  getLength() {
    return this.chainState.length;
  },
  addLink(value) {
    if (String(value)) {
      this.chainState.push('( ' + String(value) + ' )');
      return this;
    }
    this.chainState.push('( )');
    return this;
  },
  removeLink(position) {
    if (
      position > this.chainState.length ||
      position <= 0 ||
      typeof position !== 'number'
    ) {
      this.chainState = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    this.chainState.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chainState.reverse();
    return this;
  },
  finishChain() {
    let final = this.chainState.join('~~');
    this.chainState = [];
    return final;
  },
};
