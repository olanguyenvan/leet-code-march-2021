type CandyType = number[];

export function distributeCandies(candyType: CandyType): number {
    const allowedToEat: number = candyType.length / 2;
    const uniques: number = new Set(candyType).size;

    return Math.min(uniques, allowedToEat)
}
