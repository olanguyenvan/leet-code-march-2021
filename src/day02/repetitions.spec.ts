
const { findErrorNums } = require('./repetitions');

describe("findErrorNums", () => {
  it.each([
    [[1, 2, 2, 4], [2, 3]],
    [[1, 1], [1, 2]],
    [[1, 2, 6, 4, 5, 6], [6, 3]],
    [[1, 2, 3, 4, 5, 3], [3, 6]],
  ])(" %s should be %s", (input, output) => {
    expect(findErrorNums(input)).toStrictEqual(output)
  })
});
