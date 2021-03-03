export function missingNumber(nums: number[]): number {
    const n = nums.length + 1; 
    const expectedSum = ( 0 + n - 1) / 2 * n;

    const actualSum = nums.reduce((acc, num) => acc + num, 0)

    return expectedSum - actualSum;
}
