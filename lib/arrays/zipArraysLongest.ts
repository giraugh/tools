export type ZippedLongest<TFill, TArrs extends unknown[][]> = ({ [TArr in keyof TArrs]: TArrs[TArr] extends (infer V)[] ? (V | TFill) : never })[]

/**
 * Zip a collection of arrays to create an array of tuples from matching indices.
 * Use the length of the longest array for the output, filling the rest with the provided value.
 * @param fill the value to fill empty indices with.
 * @param ...arrays the arrays to zip
 * @returns the zipped array
 * @note the zipped array has the length of the longest input array
 *
 * @example zipArraysLongest(null, [1, 2, 3], ['a', 'b', 'c']) === [[1, 'a'], [2, 'b'], [3, 'c']]
 * @example zipArraysLongest(null, [1], ['a', 'b', 'c']) === [[1, 'a'], [null, 'b'], [null, 'c']]
 */
export const zipArraysLongest = <TArrs extends unknown[][], TFill>(fill: TFill, ...arrays: TArrs): ZippedLongest<typeof fill, TArrs> => {
  const longestArray = arrays.map(arr => arr.length).reduce((a, b) => Math.max(a, b), 0)
  
  // @ts-expect-error: ts can't handle this conversion from unkown
  return Array.from(Array(longestArray).keys(), i => arrays.map(arr => arr[i] ?? fill))
}

// Tests
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('works for example 1', () => {
    expect(zipArraysLongest(null, [1, 2, 3], ['a', 'b', 'c'])).toStrictEqual([[1, 'a'], [2, 'b'], [3, 'c']])
  })

  it('works for example 2', () => {
    expect(zipArraysLongest(null, [1], ['a', 'b', 'c'])).toStrictEqual([[1, 'a'], [null, 'b'], [null, 'c']])
  })

  it('returns an empty zip for no inputs', () => {
    expect(zipArraysLongest(null)).toStrictEqual([])
  })
}
