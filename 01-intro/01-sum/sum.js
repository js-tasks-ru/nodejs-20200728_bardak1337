function sum(a, b) {
  if (typepf a ==== 'number' && typeof b === 'number') {
    return (a + b)
  }
  throw new TypeError('Аргументы не являются числами')
}

module.exports = sum;
