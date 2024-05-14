const sumExtraHours = (salary, extraHours) => salary + extraHours;

const calculateDiscount = (salary, discount) => salary - discount;

const testCase = (title, expected, actual) => {
  if (expected === actual) {
    console.log(`\n ${title} passed`);
  } else {
    console.error(`\n ${title} failed`);
  }
};

testCase('sum extra hours', 2500, sumExtraHours(2000, 500));

testCase('calculate discount', 2200, calculateDiscount(2500, 300));