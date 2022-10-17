function dateSample(sampleActivity) {
  if (typeof sampleActivity != 'string') {
    return false
  }
  if (!parseFloat(sampleActivity) || parseFloat(sampleActivity) <= 0 || parseFloat(sampleActivity) > 15) {
    return false
  }
  if (arguments[0] == undefined) {
    return false
  }
  const halfLife = 5730
  let k = Math.log(2) / halfLife
  let t = Math.log(15 / parseFloat(sampleActivity)) / k
  return Math.ceil(t)
}

module.exports = {
  dateSample
};
