function sum (array) {
  return array.reduce(function(accumulator, current) {
    return accumulator += current
  }, 0)
};

function productAll (array) {
  var matrix = array
  return matrix.reduce(function(outerAccumulator, innerArray, index, matrix) {
    return outerAccumulator * innerArray.reduce(function(innerAccumulator, currentNumber) {
      return innerAccumulator = innerAccumulator * currentNumber
    }, 1)
  }, 1)
};

function objectify (array) {
  return array.reduce(function(accumulator, current) {
    accumulator[current[0]] = current[1]
    return accumulator
  }, {})
};

function luckyNumbers (array) {
  return array.reduce(function(accumulator, currentNumber, index, array) {
    if (index === array.length - 1)
      return accumulator + 'and ' + currentNumber
    return accumulator + currentNumber + ', '
  }, 'Your lucky numbers are: ')
};

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
