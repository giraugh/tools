/**
 * Attempt to call a function returning either the result or an error if one occurs
 * @param f the function to call
 * @returns either the result of f or an error
 * 
 * @example
 * attemptOrCatch(() => { throw new Error() }) // returns error
 * @example
 * attemptOrCatch(() => 'hello') === 'hello'
 */
export const attemptOrCatch = <TErr extends Error, TReturn>(f: () => TReturn): TErr | TReturn => {
  try {
    return f()
  } catch (err) {
    return err as TErr
  }
}


// Tests
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('works for example 1', () => {
    const err = new Error()
    expect(attemptOrCatch(() => { throw err })).toBe(err)
  })

  it('works for example 2', () => {
    expect(attemptOrCatch(() => 'hello')).toBe('hello')
  })
}
