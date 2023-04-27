/**
 * Accepts a parameter, logs it and then returns it
 * @param t the value to log
 * @param msg an optional message to log with
 * @returns the value passed in `t`
 * 
 * @example
 * logAndReturn(2) === 2 // also logs "2"
 * @example
 * logAndReturn(2, 'my value') === 2 // also logs "my value 2"
 */
export const logAndReturn = <T>(t: T, msg: string = ""): T => {
  console.log(msg, t)
  return t
}


// Tests
if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('works for example 1', () => {
    expect(logAndReturn(2)).toBe(2)
  })

  it('works for example 2', () => {
    expect(logAndReturn(2, 'my value')).toBe(2)
  })
}
