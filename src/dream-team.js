const { NotImplementedError } = require('../extensions/index.js');

function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  }
  let membersArr = members.filter((el) => typeof el === 'string')
  let firstLettersArr = []
  membersArr.forEach((el) => {
    let trim = el.trim()
    firstLettersArr.push(trim[0].toUpperCase())
  })
  let sortedArr = firstLettersArr.sort()
  return sortedArr.join('')
}

module.exports = {
  createDreamTeam
};
