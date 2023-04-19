/**
 * Split an array into two subarrays using a predicate function
 * @param array the array to partition
 * @param predicateFn the boolean predicate to split along
 * @returns the two partitions
 * 
 * @example 
 * const [even, odd] = partitionArray([1, 2, 3, 4], x => x % 2 === 0)
 * even === [2, 4]
 * odd === [1, 3]
 */
export const partitionArray = <T>(array: T[], predicateFn: (t: T) => boolean): [T[], T[]] => {
  let [a, b]: [T[], T[]] = [[], []]
  for (let el of array) (predicateFn(el) ? a : b).push(el)
  return [a, b]
}


// Tests
if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('works for example 1', () => {
    const [even, odd] = partitionArray([1, 2, 3, 4], x => x % 2 === 0)
    expect(even).toStrictEqual([2, 4])
    expect(odd).toStrictEqual([1, 3])
  })
}
