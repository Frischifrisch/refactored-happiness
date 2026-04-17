#!/usr/bin/env node

/**
 * calculator.js — Node.js CLI Calculator
 *
 * Supported operations:
 *   add      (+)  Addition:       node calculator.js add 5 3       => 8
 *   subtract (-)  Subtraction:    node calculator.js subtract 10 4 => 6
 *   multiply (*)  Multiplication: node calculator.js multiply 3 7  => 21
 *   divide   (/)  Division:       node calculator.js divide 20 4   => 5
 *   modulo   (%)  Modulo:         node calculator.js modulo 10 3   => 1
 *   power    (^)  Exponentiation: node calculator.js power 2 3     => 8
 *   sqrt     (√)  Square Root:    node calculator.js sqrt 9        => 3
 *
 * Usage:
 *   node calculator.js <operation> <num1> <num2>
 *   node calculator.js sqrt <num>
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

function modulo(a, b) {
  if (b === 0) {
    throw new Error("Modulo by zero is not allowed.");
  }
  return a % b;
}

function power(a, b) {
  return a ** b;
}

function sqrt(a) {
  if (a < 0) {
    throw new Error("Square root of a negative number is not allowed.");
  }
  return Math.sqrt(a);
}

function printUsage() {
  console.error(
    "Usage:\n" +
    "  node calculator.js <operation> <num1> <num2>\n" +
    "  node calculator.js sqrt <num>\n" +
    "Operations: add, subtract, multiply, divide, modulo, power, sqrt"
  );
  process.exit(1);
}

if (require.main === module) {
  if (!operation) {
    printUsage();
  }

  const binaryOperations = { add, subtract, multiply, divide, modulo, power };
  const unaryOperations = { sqrt };

  if (!(operation in binaryOperations) && !(operation in unaryOperations)) {
    console.error(`Error: Unknown operation "${operation}".`);
    printUsage();
  }

  try {
    let result;

    if (operation in unaryOperations) {
      if (arg1 === undefined || arg2 !== undefined) {
        printUsage();
      }

      const a = Number(arg1);
      if (isNaN(a)) {
        console.error("Error: Argument must be a valid number.");
        process.exit(1);
      }

      result = unaryOperations[operation](a);
    } else {
      if (arg1 === undefined || arg2 === undefined) {
        printUsage();
      }

      const a = Number(arg1);
      const b = Number(arg2);
      if (isNaN(a) || isNaN(b)) {
        console.error("Error: Both arguments must be valid numbers.");
        process.exit(1);
      }

      result = binaryOperations[operation](a, b);
    }

    console.log(result);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

module.exports = { add, subtract, multiply, divide, modulo, power, sqrt };
