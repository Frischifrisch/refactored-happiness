#!/usr/bin/env node

/**
 * calculator.js — Node.js CLI Calculator
 *
 * Supported operations:
 *   add      (+)  Addition:       node calculator.js add 5 3       => 8
 *   subtract (-)  Subtraction:    node calculator.js subtract 10 4 => 6
 *   multiply (*)  Multiplication: node calculator.js multiply 3 7  => 21
 *   divide   (/)  Division:       node calculator.js divide 20 4   => 5
 *
 * Usage: node calculator.js <operation> <num1> <num2>
 */

const [, , operation, arg1, arg2] = process.argv;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

function printUsage() {
  console.error(
    "Usage: node calculator.js <operation> <num1> <num2>\n" +
    "Operations: add, subtract, multiply, divide"
  );
  process.exit(1);
}

if (require.main === module) {
  if (!operation || arg1 === undefined || arg2 === undefined) {
    printUsage();
  }

  const a = Number(arg1);
  const b = Number(arg2);

  if (isNaN(a) || isNaN(b)) {
    console.error("Error: Both arguments must be valid numbers.");
    process.exit(1);
  }

  const operations = { add, subtract, multiply, divide };

  if (!(operation in operations)) {
    console.error(`Error: Unknown operation "${operation}".`);
    printUsage();
  }

  try {
    const result = operations[operation](a, b);
    console.log(result);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

module.exports = { add, subtract, multiply, divide };
