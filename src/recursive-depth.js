const { NotImplementedError } = require('../extensions/index.js');

class DepthCalculator {
calculateDepth(arr) {
  let counter = 0
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      counter = Math.max(counter, this.calculateDepth(arr[i]))
    }
    counter++
  }
  return counter
  }
}

module.exports = {
  DepthCalculator
};
