module.exports = function reverse (n) {
  return  parseFloat(('' + Math.abs(n)).split("").reverse().join(""));
}
