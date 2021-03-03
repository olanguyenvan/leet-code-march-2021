
const { missingNumber } = require('./missing');

describe("missingNumber", () => {
  it.each([
      [[3, 0, 1], 2],
      [[0, 1], 2],
      [[9, 6, 4, 2, 3, 5, 7, 0, 1], 8],
      [[0], 1],
  ])(" %s should be %s", (input, output) => {
    expect(missingNumber(input)).toEqual(output)
  })
});
