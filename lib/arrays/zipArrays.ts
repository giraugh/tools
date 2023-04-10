export type Zipped<TArrs extends unknown[][]> = ({ [TArr in keyof TArrs]: TArrs[TArr] extends (infer V)[] ? V : never })[]

/**
 * Zip a collection of arrays to create an array of tuples from matching indices.
 * @param ...arrays the arrays to zip
 * @returns the zipped array
 * @note the zipped array has the length of the shortest input array
 * 
 * @example zipArrays([1, 2, 3], ['a', 'b', 'c']) === [[1, 'a'], [2, 'b'], [3, 'c']]
 * @example zipArrays([1], ['a', 'b', 'c']) === [[1, 'a']]
 */
export const zipArrays = <TArrs extends unknown[][]>(...arrays: TArrs): Zipped<TArrs> => {
  const shortestArray = arrays.length
    ? arrays.map(arr => arr.length).reduce((a, b) => Math.min(a, b), Infinity)
    : 0
  
  // @ts-expect-error: ts can't handle this conversion from unkown
  return Array.from(Array(shortestArray).keys(), i => arrays.map(arr => arr[i]))
}


// Tests
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('works for example 1', () => {
    expect(zipArrays([1, 2, 3], ['a', 'b', 'c'])).toStrictEqual([[1, 'a'], [2, 'b'], [3, 'c']])
  })

  it('works for example 2', () => {
    expect(zipArrays([1], ['a', 'b', 'c'])).toStrictEqual([[1, 'a']])
  })

  it('returns an empty zip for no inputs', () => {
    expect(zipArrays()).toStrictEqual([])
  })
}
