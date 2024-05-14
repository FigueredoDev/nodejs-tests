import { calculateDiscount, sumExtraHours } from "../index.js";

describe("payRoll", () => {
  it("should return a sum of extra hours", () => {
    const salary = 1000;
    const extraHours = 100;

    const expected = 1100;
    const actual = sumExtraHours(salary, extraHours);

    expect(actual).toBe(expected);
  });

  it("should return a salary with discount", () => {
    const salary = 1000;
    const discount = 100;

    const expected = 900;
    const actual = calculateDiscount(salary, discount);

    expect(actual).toBe(expected);
  });
});
