/** Truncate a string if its too long, adding an ellipsis if truncation occurs
 * @param string the string to truncate 
 * @param maxLength the maximum length of the returned string
 * @param ellipsis the ellipsis to add to the string. Defaults to an ellipsis character
 * @note the ellipsis should be shorter than the maxlength for proper results
 * @returns the truncated string with length <= `maxLength`
 * 
 * @example truncateWithEllipsis('hello there', 3) === 'he…'
 * @example truncateWithEllipsis('hello there', 30) === 'hello there'
 * @example truncateWithEllipsis('hello there', 7, '...') === 'hell...'
*/
export const truncateWithEllipsis = (string: string, maxLength = 50, ellipsis='…') => 
  string.length > maxLength
    ? `${string.substring(0, maxLength - ellipsis.length)}${ellipsis}`
    : string


// Tests
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('works for example 1', () => {
    expect(truncateWithEllipsis('hello there', 3)).toBe('he…')
  })

  it('works for example 2', () => {
    expect(truncateWithEllipsis('hello there', 30)).toBe('hello there')
  })

  it('works for example 3', () => {
    expect(truncateWithEllipsis('hello there', 7, '...')).toBe('hell...')
  })

  it('takes the length of the ellipsis into account', () => {
    expect(truncateWithEllipsis('0123456789', 7, '...')).toBe('0123...')
    expect(truncateWithEllipsis('0123456789', 8, '...')).toBe('01234...')
    expect(truncateWithEllipsis('0123456789', 9, '...')).toBe('012345...')
    expect(truncateWithEllipsis('0123456789', 10, '...')).toBe('0123456789')
  })
}
