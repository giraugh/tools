/**
 * Assert that a value is available.
 * Throw an error with the specified message if the provided value is null or undefined
 * @param value value to assert non-null for
 * @param errorMessage message to throw if the value is not defined
 * @returns the value
 */
export const expect = <T>(t: T | undefined | null, message='Expected argument to be defined') => {
  if (t === undefined || t === null)
    throw new Error(message)
  return t
}
