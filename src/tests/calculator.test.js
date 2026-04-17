const { add, subtract, multiply, divide, modulo, power, sqrt } = require("../calculator");

// Addition (+)
describe("add", () => {
  test("2 + 3 = 5", () => expect(add(2, 3)).toBe(5));
  test("10 + 0 = 10", () => expect(add(10, 0)).toBe(10));
  test("-4 + 4 = 0", () => expect(add(-4, 4)).toBe(0));
  test("-3 + -7 = -10", () => expect(add(-3, -7)).toBe(-10));
  test("0.1 + 0.2 ≈ 0.3", () => expect(add(0.1, 0.2)).toBeCloseTo(0.3));
});

// Subtraction (-)
describe("subtract", () => {
  test("10 - 4 = 6", () => expect(subtract(10, 4)).toBe(6));
  test("5 - 5 = 0", () => expect(subtract(5, 5)).toBe(0));
  test("3 - 10 = -7", () => expect(subtract(3, 10)).toBe(-7));
  test("-5 - -3 = -2", () => expect(subtract(-5, -3)).toBe(-2));
  test("0 - 0 = 0", () => expect(subtract(0, 0)).toBe(0));
});

// Multiplication (*)
describe("multiply", () => {
  test("45 * 2 = 90", () => expect(multiply(45, 2)).toBe(90));
  test("3 * 7 = 21", () => expect(multiply(3, 7)).toBe(21));
  test("any * 0 = 0", () => expect(multiply(99, 0)).toBe(0));
  test("-3 * 4 = -12", () => expect(multiply(-3, 4)).toBe(-12));
  test("-3 * -4 = 12", () => expect(multiply(-3, -4)).toBe(12));
  test("0.5 * 4 = 2", () => expect(multiply(0.5, 4)).toBe(2));
});

// Division (/)
describe("divide", () => {
  test("20 / 5 = 4", () => expect(divide(20, 5)).toBe(4));
  test("10 / 2 = 5", () => expect(divide(10, 2)).toBe(5));
  test("7 / 2 = 3.5", () => expect(divide(7, 2)).toBe(3.5));
  test("0 / 5 = 0", () => expect(divide(0, 5)).toBe(0));
  test("-12 / 4 = -3", () => expect(divide(-12, 4)).toBe(-3));
  test("division by zero throws", () =>
    expect(() => divide(5, 0)).toThrow("Division by zero is not allowed."));
});

// Modulo (%)
describe("modulo", () => {
  test("10 % 3 = 1", () => expect(modulo(10, 3)).toBe(1));
  test("9 % 3 = 0", () => expect(modulo(9, 3)).toBe(0));
  test("-10 % 3 = -1", () => expect(modulo(-10, 3)).toBe(-1));
  test("modulo by zero throws", () =>
    expect(() => modulo(5, 0)).toThrow("Modulo by zero is not allowed."));
});

// Exponentiation (^)
describe("power", () => {
  test("2 ^ 3 = 8", () => expect(power(2, 3)).toBe(8));
  test("5 ^ 0 = 1", () => expect(power(5, 0)).toBe(1));
  test("4 ^ 0.5 = 2", () => expect(power(4, 0.5)).toBe(2));
});

// Square Root (√)
describe("sqrt", () => {
  test("sqrt(9) = 3", () => expect(sqrt(9)).toBe(3));
  test("sqrt(0) = 0", () => expect(sqrt(0)).toBe(0));
  test("sqrt(2) ≈ 1.414", () => expect(sqrt(2)).toBeCloseTo(1.41421356237));
  test("sqrt of negative number throws", () =>
    expect(() => sqrt(-1)).toThrow("Square root of a negative number is not allowed."));
});
