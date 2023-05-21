/**
 * Rotate the elements of an array by an amount specified.
 * Essentially increments the index of every element by the amount,
 * and elements at the end wrap round to the start.
 * @param arr array to rotate
 * @param amount number of elements to rotate by (default: 1)
 * @returns the rotated array
 *
 * @example rotateArray([1, 2, 3]) === [3, 1, 2]
 * @example rotateArray(['a', 'b', 'c'], -1) === ['b', 'c', 'a']
 * @example rotateArray(['🍎', '🍐', '🍋'], 2) === ['🍐', '🍋', '🍎']
*/
export const rotateArray = <T>(arr: T[], amount: number = 1): T[] =>
  arr.map((_, i) => arr[((( -amount + i ) % arr.length) + arr.length) % arr.length])


// Tests
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('works for example 1', () => {
    expect(rotateArray([1, 2, 3])).toEqual([3, 1, 2])
  })

  it('works for example 2', () => {
    expect(rotateArray(['a', 'b', 'c'], -1)).toEqual(['b', 'c', 'a'])
  })

  it('works for example 3', () => {
    expect(rotateArray(['🍎', '🍐', '🍋'], 2)).toEqual(['🍐', '🍋', '🍎'])
  })

  it('works for amounts higher than the array length', () => {
    expect(rotateArray(['a', 'b', 'c', 'd'], 6)).toEqual(['c', 'd', 'a', 'b'])
  })
}
