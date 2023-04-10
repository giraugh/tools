/**
 * Take a string and pluralize it depending on a count
 * @param str The singular form of the word
 * @param count The amount of things you have
 * @param plural Optionally, a plural form of the word. This is `str` with an `s` on the end by default.
 *
 * @example pluralize('cake', 1) === 'cake'
 * @example pluralize('cake', 2) === 'cakes'
 * @example pluralize('cake', 0) === 'cakes'
 * @example pluralize('child', 2, 'children') === 'children'
 */
export const pluralize = (str: string, count: number, plural = `${str}s`) =>
  count === 1 ? str : plural

// Tests
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('works for example 1', () => {
    expect(pluralize('cake', 1)).toBe('cake')
  })

  it('works for example 2', () => {
    expect(pluralize('cake', 2)).toBe('cakes')
  })

  it('works for example 3', () => {
    expect(pluralize('cake', 0)).toBe('cakes')
  })

  it('works for example 4', () => {
    expect(pluralize('child', 2, 'children')).toBe('children')
  })
}
