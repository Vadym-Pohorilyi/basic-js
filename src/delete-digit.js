const { NotImplementedError } = require('../extensions/index.js');

function deleteDigit(n) {
  let numbers = []
  let nArr = String(n).split('')
  for (let i = 0; i < nArr.length; i++) {
    let arr = [...nArr]
    arr.splice(i, 1)
    numbers.push(+arr.join(''))
  }
  return Math.max(...numbers)
}

module.exports = {
  deleteDigit
};
