export function findErrorNums(nums: number[]): [number, number] {
    const numsLength: number = nums.length;
    
    if (numsLength < 2) {
        throw new Error('Input was invalid. Minimum length of nums is 2.')
    }

    nums.sort((a, b) => a - b);;

    let duplicated: number = NaN;
    let i = 1;

    while (i < numsLength) {
        if (nums[i] === nums[i - 1]) {
            duplicated = nums[i];
            break;
        }
        i+= 1;
    }

    let missed: number = 1;

    i = 1;

    while (i < numsLength) {
        if (nums[i -1] + 2 === nums[i]) {
            missed = nums[i] - 1;
        }

        i+= 1;
    }
    
    if (nums[numsLength - 1] != numsLength) {
        missed = numsLength;
    }

    return [duplicated, missed]
};
