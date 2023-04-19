/**
 * Attempt to call a function or call a handler if an error occurs.
 * @param fnRes the function to call
 * @param fnErr the handler to call if an error occurs
 * @returns the result of fnRes if succesfull or the result of fnErr
 * @note the type of the return is always the same regardless of if an error occurs
 * 
 * @example
 * attemptOrElse(() => { throw new Error() }, (err) => 'oh no') // returns 'oh no'
 * @example
 * attemptOrElse(() => 'hello', (err) => 'oh no') === 'hello'
 * @example
 * const isDebugEnv = attemptOrElse(() => process.env.NODE_ENV === 'debug', () => false)
 */
export const attemptOrElse = <TReturn, TError extends Error>(fnRes: () => TReturn, fnErr: (err: TError) => TReturn): TReturn => {
  try {
    return fnRes()
  } catch (err) {
    return fnErr(err as TError)
  }
}


// Tests
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('works for example 1', () => {
    const err = new Error()
    expect(attemptOrElse(() => { throw err }, () => 'oh no')).toEqual('oh no')
  })

  it('works for example 2', () => {
    expect(attemptOrElse(() => 'hello', () => 'oh no')).toEqual('hello')
  })
}
