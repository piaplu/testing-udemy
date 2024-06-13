import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

it("should transform a numeric string to a number of type number", () => {
  const input = "1";

  const result = transformToNumber(input);

  expect(result).toBe(+input);
});

it("should transform a boolean to a number of type number", () => {
  const input = true;

  const result = transformToNumber(input);

  expect(result).toBeTypeOf("number");
});

it("should yield NaN for non-transformable values", () => {
  const input = "apple";

  const result = transformToNumber(input);

  expect(result).toBeNaN();
});
