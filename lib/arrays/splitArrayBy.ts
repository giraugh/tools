/**
 * Split an array when a predicate function returns true and return all the groups
 * @param arr the array to split
 * @param splitFn a function over pairs of elements in the array that returns true when the elements should be in different groups
 * @returns the array of groups split as per the `splitFn`
 *
 * @example
 * const runs = splitArrayBy([1, 2, 3, 10, 11, 12], (a, b) => b - a > 1)
 * runs // [[1, 2, 3], [10, 11, 12]]
 */
export const splitArrayBy = <T>(arr: T[], splitFn: (a: T, b: T) => boolean): T[][] => {
  // Handle special case of empty array
  if (arr.length === 0) return []

  let groups: T[][] = [[]]
  while (true) {
    // Shift one element and peak the next element
    if (arr.length === 0) break
    let [x, y] = [arr.shift()!, arr.at(0)]

    // Add element to current group
    groups.at(-1)!.push(x)

    // Start new group?
    if (arr.length > 0 && splitFn(x, y!))
      groups.push([])
  }

  return groups
}

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('works for example 1', () => {
    const runs = splitArrayBy([1, 2, 3, 10, 11, 12], (x, y) => Math.abs(y - x) > 1)
    expect(runs).toEqual([[1, 2, 3], [10, 11, 12]])
  })

  it('handles single group', () => {
    const groups = splitArrayBy([1, 2, 3], () => false)
    expect(groups).toEqual([[1, 2, 3]])
  })

  it('handles many splits', () => {
    const groups = splitArrayBy([1, 2, 3], () => true)
    expect(groups).toEqual([[1], [2], [3]])
  })

  it('handles special case of empty array', () => {
    const groups = splitArrayBy([], () => true)
    expect(groups).toEqual([])
  })

  it('handles falsy values', () => {
    const groups = splitArrayBy([1, 1, 1, undefined, undefined, 2, 2, 2], (x, y) => !!x !== !!y)
    expect(groups).toEqual([[1, 1, 1 ], [undefined, undefined], [2, 2, 2]])
  })
}

