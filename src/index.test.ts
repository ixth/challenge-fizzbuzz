import { fizzbuzz } from "./index";

const everyItemToContain =
  (items: string[], value: string) => items.every((item) => item.includes(value));

const everyNth = (n: number, array: any[]) => array.filter((_, i) => (i + 1) % n === 0);

expect.extend({ everyItemToContain });

const expectedResult = [1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz", 16, 17, "fizz", 19, "buzz", "fizz", 22, 23, "fizz", "buzz", 26, "fizz", 28, 29, "fizzbuzz", 31, 32, "fizz", 34, "buzz", "fizz", 37, 38, "fizz", "buzz", 41, "fizz", 43, 44, "fizzbuzz", 46, 47, "fizz", 49, "buzz", "fizz", 52, 53, "fizz", "buzz", 56, "fizz", 58, 59, "fizzbuzz", 61, 62, "fizz", 64, "buzz", "fizz", 67, 68, "fizz", "buzz", 71, "fizz", 73, 74, "fizzbuzz", 76, 77, "fizz", 79, "buzz", "fizz", 82, 83, "fizz", "buzz", 86, "fizz", 88, 89, "fizzbuzz", 91, 92, "fizz", 94, "buzz", "fizz", 97, 98, "fizz", "buzz"];

describe("fizzbuzz", () => {
  const result = fizzbuzz();

  test("should start from 1", () => {
    expect(result[0]).toEqual(1);
  });

  test("should contain fizz if number is divisible by 3", () => {
    expect(everyNth(3, result)).everyItemToContain('fizz');
  });

  test("should contain fizz if number is divisible by 5", () => {
    expect(everyNth(5, result)).everyItemToContain('buzz');
  });

  test("should return expected result", () => {
    expect(result).toEqual(expectedResult);
  });
});
