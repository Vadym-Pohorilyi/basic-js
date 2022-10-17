function sortByHeight(arr) {
  let arrWithoutOne = arr.filter((el) => el !== -1)
  let sorted = arrWithoutOne.sort((a, b) => a - b)
  arr.forEach((el, idx) => {
    if (el === -1) {
      sorted.splice(idx, 0, el)
    }
  })
  return sorted
}

module.exports = {
  sortByHeight
};
