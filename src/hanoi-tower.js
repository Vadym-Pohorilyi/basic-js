function calculateHanoi(disksNumber, turnsSpeed) {
  turns = 2 ** disksNumber - 1
  return {
    turns,
    seconds: Math.floor((3600 / turnsSpeed) * this.turns),
  }
}

module.exports = {
  calculateHanoi
};
