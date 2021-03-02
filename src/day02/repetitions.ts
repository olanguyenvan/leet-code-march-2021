export function findErrorNums(nums: number[]): number[] {
    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            return [nums[i], i + 1]
        }
    }
};