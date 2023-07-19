/**
 * Intersperse a seperator element between every element of a given array
 * @param arr the array to intersperse into
 * @param sep a seperator element to distribute throughout `arr`
 * @returns `arr` with `sep` interspersed between every pair of elements
 *
 * @example
 * intersperseArray([[1, 2], [3, 4], [5, 6]], []) // [[1, 2], [], [3, 4], [], [5, 6]]

 * @example
 * intersperseArray(['alpha', 'beta', 'gamma'], '!') // ['alpha', '!', 'beta', '!', 'gamma']
 */
export const intersperseArray = <T>(arr: T[], sep: T): T[] => {
  const gen = function*() {
    while (arr.length > 0) {
      yield arr.shift()!
      if (arr.length > 0) yield sep
    }
  }
  return Array.from(gen())
}


if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('works for example 1', () => {
    const inter = intersperseArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [])
    expect(inter).toEqual([[1, 2, 3], [], [4, 5, 6], [], [7, 8, 9]])
  })

  it('works for example 2', () => {
    const inter = intersperseArray(['alpha', 'beta', 'gamma'], '!')
    expect(inter).toEqual(['alpha', '!', 'beta', '!', 'gamma'])
  })
  
  it('does nothing to an empty array', () => {
    expect(intersperseArray([] as string[], 'hello')).toEqual([])
  })
  
  it('does nothing to an array with one element', () => {
    expect(intersperseArray(['suave'], '$')).toEqual(['suave'])
  })
}
