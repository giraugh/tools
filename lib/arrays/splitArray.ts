/**
 * Split an array when a predicate function determines an element is a predicate
 * (similiar to String.prototype.split but for arrays)
 * @param arr the array to split
 * @param splitFn a function over elements in the array that determines whether an element is a delimeter.
 * @returns the array of groups split as per the `splitFn`
 *
 * @example
 * const groups = splitArrayBy([1, 3, 5, 6, 7, 9, 11], (x) => x % 2 === 0) // [[1, 3, 5], [7, 9, 11]]
 */
export const splitArray = <T>(arr: T[], splitFn: (t: T) => boolean): T[][] => {
  // Handle special case of empty array
  if (arr.length === 0) return []

  let groups: T[][] = [[]]
  while (true) {
    // Shift one element and peak the next element
    if (arr.length === 0) break
    const next = arr.shift()!

    // Split?
    if (splitFn(next)) {
      groups.push([])
    } else {
      // Add element to current group
      groups[groups.length - 1]!.push(next)
    }
  }

  return groups
}

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('works for example 1', () => {
    const runs = splitArray([1, 3, 5, 6, 7, 9, 11], (x) => x % 2 === 0) 
    expect(runs).toEqual([[1, 3, 5], [7, 9, 11]])
  })

}
