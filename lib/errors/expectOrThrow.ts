/**
 * Assert that a value is available.
 * Throw an error with the specified message if the provided value is null or undefined
 * @param value value to assert non-null for
 * @param errorMessage message to throw if the value is not defined
 * @returns the value
 * 
 * @example expectOrThrow(1) === 1
 * @example expectOrThrow(null) // throws error
 * @example expectOrThrow(null, ':(') // throws error w/ message ':('
 */
export const expectOrThrow = <T>(t: T | undefined | null, message='Expected argument to be defined') => {
  if (t === undefined || t === null)
    throw new Error(message)
  return t
}


// Tests
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('works for example 1', () => {
    expect(expectOrThrow(1)).toEqual(1)
  })

  it('works for example 2', () => {
    expect(() => expectOrThrow(null)).toThrow()
  })

  it('works for example 3', () => {
    expect(() => expectOrThrow(null, ':(')).toThrowError(':(')
  })
}
