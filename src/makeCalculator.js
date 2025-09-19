const calculator = makeCalculator();

calculator.operate(calculator.add, 21);
console.log(calculator.result);

calculator.reset();
console.log(calculator.result);

calculator
  .operate(calculator.add, 10)
  .reset()
  .operate(calculator.subtract, 20)
  .operate(calculator.divide, 5)
  .operate(calculator.multiply, 7);

console.log(calculator.result);

module.exports = makeCalculator;
