#!/usr/bin/env node

/**
 * calculator.js — Node.js CLI Calculator
 *
 * Supported operations:
 *   add        (+)   Addition:        node calculator.js add 5 3         => 8
 *   subtract   (-)   Subtraction:     node calculator.js subtract 10 4   => 6
 *   multiply   (*)   Multiplication:  node calculator.js multiply 3 7    => 21
 *   divide     (/)   Division:        node calculator.js divide 20 4     => 5
 *   modulo     (%)   Modulo:          node calculator.js modulo 10 3     => 1
 *   power      (**)  Exponentiation:  node calculator.js power 2 8       => 256
 *   sqrt             Square root:     node calculator.js sqrt 144        => 12
 *
 * Usage: node calculator.js <operation> <num1> [num2]
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

function power(base, exponent) {
  return base ** exponent;
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error("Square root of a negative number is not allowed.");
  }
  return Math.sqrt(n);
}

function printUsage() {
  console.error(
    "Usage: node calculator.js <operation> <num1> [num2]\n" +
    "Operations: add, subtract, multiply, divide, modulo, power, sqrt"
  );
  process.exit(1);
}

if (require.main === module) {
  if (!operation || arg1 === undefined) {
    printUsage();
  }

  const operations = { add, subtract, multiply, divide, modulo, power };
  const unaryOperations = { sqrt: squareRoot };

  const a = Number(arg1);
  if (isNaN(a)) {
    console.error("Error: Arguments must be valid numbers.");
    process.exit(1);
  }

  try {
    if (operation in unaryOperations) {
      console.log(unaryOperations[operation](a));
    } else if (operation in operations) {
      if (arg2 === undefined) {
        console.error(`Error: Operation "${operation}" requires two arguments.`);
        process.exit(1);
      }
      const b = Number(arg2);
      if (isNaN(b)) {
        console.error("Error: Arguments must be valid numbers.");
        process.exit(1);
      }
      console.log(operations[operation](a, b));
    } else {
      console.error(`Error: Unknown operation "${operation}".`);
      printUsage();
    }
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
