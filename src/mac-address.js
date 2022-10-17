function isMAC48Address(n) {
  let arr = n.split('-')
  if (arr.length !== 6) {
    return false
  }
  let isTrue = true
  arr.forEach((el) => {
    if (isNaN(parseInt(el, 16))) {
      isTrue = false
    }
  })
  return isTrue
}
module.exports = {
  isMAC48Address
};
