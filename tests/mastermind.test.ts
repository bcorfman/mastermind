import { evaluate } from "../src/mastermind";

test('one secret, one guess, no match', () => {
  expect(evaluate(["blue"], ["red"])).toStrictEqual([0, 0]);
});

test('one secret, one guess, one match', () => {
  expect(evaluate(["blue"], ["blue"])).toStrictEqual([1, 0]);
});

test('two secret, two guesses, one misplaced', () => {
  expect(evaluate(["red", "yellow"], ["blue", "red"])).toStrictEqual([0, 1]);
});

test('four secret, four guesses, two correct, two misplaced', () => {
  expect(evaluate(["blue", "red", "purple", "yellow"], ["blue", "red", "yellow", "purple"])).toStrictEqual([2, 2]);
});

test('error: repeated color in secret list', () => {
  expect(() => evaluate(["blue", "red", "purple", "blue"], ["blue", "red", "yellow", "purple"])).toThrow("repeated color in secret list");
});

test('error: secret and guess are different lengths', () => {
  expect(() => evaluate(["blue", "red", "purple"], ["blue", "red", "yellow", "purple"])).toThrow("secret and guess are different lengths");
});

