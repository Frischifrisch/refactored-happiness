const { add, subtract, multiply, divide, modulo, power, squareRoot } = require("../calculator");

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
  test("5 % 2 = 1", () => expect(modulo(5, 2)).toBe(1));
  test("10 % 3 = 1", () => expect(modulo(10, 3)).toBe(1));
  test("9 % 3 = 0 (divisible)", () => expect(modulo(9, 3)).toBe(0));
  test("-7 % 3 = -1", () => expect(modulo(-7, 3)).toBe(-1));
  test("0 % 5 = 0", () => expect(modulo(0, 5)).toBe(0));
  test("modulo by zero throws", () =>
    expect(() => modulo(5, 0)).toThrow("Modulo by zero is not allowed."));
});

// Exponentiation (**)
describe("power", () => {
  test("2 ^ 3 = 8", () => expect(power(2, 3)).toBe(8));
  test("2 ^ 8 = 256", () => expect(power(2, 8)).toBe(256));
  test("5 ^ 0 = 1", () => expect(power(5, 0)).toBe(1));
  test("any ^ 1 = itself", () => expect(power(7, 1)).toBe(7));
  test("3 ^ -1 = 0.333...", () => expect(power(3, -1)).toBeCloseTo(0.333));
  test("-2 ^ 3 = -8", () => expect(power(-2, 3)).toBe(-8));
});

// Square root (√)
describe("squareRoot", () => {
  test("√16 = 4", () => expect(squareRoot(16)).toBe(4));
  test("√144 = 12", () => expect(squareRoot(144)).toBe(12));
  test("√0 = 0", () => expect(squareRoot(0)).toBe(0));
  test("√2 ≈ 1.414", () => expect(squareRoot(2)).toBeCloseTo(1.414));
  test("√1 = 1", () => expect(squareRoot(1)).toBe(1));
  test("negative number throws", () =>
    expect(() => squareRoot(-1)).toThrow("Square root of a negative number is not allowed."));
});
