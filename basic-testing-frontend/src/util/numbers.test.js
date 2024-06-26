import { describe, it, expect } from "vitest";
import { cleanNumbers, transformToNumber } from "./numbers";

describe("transformToNumber()", () => {
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
});

describe("cleanNumbers()", () => {
  it("should return an array of number values if an array of string number values is provided", () => {
    //integration test
    const numberValues = ["1", "2"];

    const cleanedNumbers = cleanNumbers(numberValues);

    expect(cleanedNumbers[0]).toBeTypeOf("number");
    // expect(cleanedNumbers).toBe([1, 2]);
    expect(cleanedNumbers).toEqual([1, 2]);
  });

  it("should throw an error if an array with at least one empty string is provided", () => {
    const numberValues = ["", 1];

    const cleanFn = () => {
      cleanNumbers(numberValues);
    };

    expect(cleanFn).toThrow();
  });
});
