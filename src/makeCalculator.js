function makeCalculator() {
  return {
    result: 0,
    add(value) { this.result += value; return this; },
    subtract(value) { this.result -= value; return this; },
    multiply(value) { this.result *= value; return this; },
    divide(value) { this.result /= value; return this; },
    reset() { this.result = 0; return this; },
    operate(callback, number) {
      if (typeof callback === 'function') callback.call(this, number);
      return this;
    }
  };
}

module.exports = makeCalculator;
