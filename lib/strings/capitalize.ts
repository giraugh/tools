/** Capitalise a string
 * @param string string to capitalise
 * @returns the string with the first character in uppercase
 * 
 * @example capitalize('hello world') === 'Hello world'
 * @example capitalize('Hello world') === 'Hello world'
*/
export const capitalize = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1)


// Tests
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('works for example 1', () => {
    expect(capitalize('hello world')).toBe('Hello world')
  })

  it('works for example 2', () => {
    expect(capitalize('Hello world')).toBe('Hello world')
  })
}
