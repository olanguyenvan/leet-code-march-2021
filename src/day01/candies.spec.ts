
const { distributeCandies } = require('./candies');

describe("distributeCandies", () => {
  it.each([
    [[1, 1, 2, 2, 3, 3], 3],
    [[1, 1, 2, 3], 2],
    [[6, 6, 6, 6], 1],
    [[2, 3], 1],
    [[2, 2], 1],
    [[2, 2, 4, 4], 2],
  ])(" %s should be %s", (input, output) => {
    expect(distributeCandies(input)).toBe(output)
  })
});
