import assert from "node:assert";

const sumExtraHours = (salary, extraHours) => salary + extraHours;

const calculateDiscount = (salary, discount) => salary - discount;

const expect = (actual) => {
  const assertions = {
    toEqual: (expected) => {
      assert.strictEqual(actual, expected);
    },
  };

  return assertions;
};

const test = (title, callback) => {
  try {
    callback();

    console.log(`\n ${title} passed`);
  } catch (error) {
    console.error(error);
    console.error(`\n ${title} failed`);
  }
};

test("sum extra hours", () => {
  const expected = 2500;
  const actual = sumExtraHours(2000, 500);

  expect(actual).toEqual(expected);
});

test("calculate discount", () => {
  const expected = 2200;
  const actual = calculateDiscount(2500, 300);

  expect(actual).toEqual(expected);
});
