/** Create an array of integers in the specified range
 * @param start start of range (inclusive)
 * @param end end of range (inclusive)
 * @param interval the jump between successive elements (defaults to 1)
 * @returns the range as an array of numbers
 * 
 * @example range(1, 3) === [1, 2, 3]
 * @example range(3, 8) === [3, 4, 5, 6, 7, 8]
 * @example range(5, 1, -1) === [5, 4, 3, 2, 1]
*/
export const range = (start: number, end: number, interval: number = 1): number[] =>
  Array.from({ length: 1+((end - start)/interval) }, (_, i) => start + interval*i)


// Tests
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('works for example 1', () => {
    expect(range(1, 3)).toEqual([1, 2, 3])
  })

  it('works for example 2', () => {
    expect(range(3, 8)).toEqual([3, 4, 5, 6, 7, 8])
  })
  
  it('works for example 3', () => {
    expect(range(5, 1, -1)).toEqual([5, 4, 3, 2, 1])
  })
}
