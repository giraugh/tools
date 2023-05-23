/**
 * Utility for checking if a key exists in an object.
 * Note this is a type guard, and will inform typescript that the
 * key definitely exists in that object.
 *
 * This uses Object.hasOwn, which only checks for keys that exist
 * as it's own property, not inherited properties.
 *
 * @param key the key that may or may not exist
 * @param obj the object to check
 * @returns a boolean indicating whether the key exists
 *
 * @example isKeyOfObject('name', { name: 'John' }) === true
 * @example isKeyOfObject('toString', { name: 'John' }) === false
 * @example isKeyOfObject('age', { name: 'John' }) === false
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn | MDN reference for Object.hasOwn}
 */
export const isKeyOfObject = <T extends object>(
  key: PropertyKey,
  obj: T,
): key is keyof T => Object.hasOwn(obj, key)


// Tests
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('works for example 1', () => {
    expect(isKeyOfObject('name', { name: 'John' })).toBeTruthy()
  })
  it('works for example 2', () => {
    expect(isKeyOfObject('toString', { name: 'John' })).toBeFalsy()
  })
  it('works for example 3', () => {
    expect(isKeyOfObject('age', { name: 'John' })).toBeFalsy()
  })
}
