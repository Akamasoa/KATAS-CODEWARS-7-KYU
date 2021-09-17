/*
Title:
  Basic JS - Building a calculator

Description:
  Let's build a calculator.
  This is very basic Javascript kata.
  The test expects you to provide a Calculator object with the following methods:
  Calculator.add()
  Calculator.subtract()
  Calculator.multiply()
  Calculator.divide()
  Each method expects two arguments, so for instance:
  Calculator.add(1,4) should return 5.
  Only integers are expected to be passed in as arguments,
  and the divide method should return 'false' when trying the divide by zero.
*/

const Calculator = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => (y === 0 ? false : x / y),
}

// Function Export
module.exports = Calculator

const Calculator = require('.')

//Test:
