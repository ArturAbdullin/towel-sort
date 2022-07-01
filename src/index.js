
// You should implement your task here.

module.exports = function towelSort (n) {
  return n === undefined || n.length === 0 ? [] : n.reduce((a, c, i) => {
    return a.concat(i % 2 === 0 ? c : c.reverse())
}, []);
}
