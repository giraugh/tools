/** 
 * Higher order function to get a key from an object 
 * @param key the key to retrieve
 * @returns function that retrieves the key from an object
 * 
 * @example getKey('name')({ name: 'John' }) === 'John'
 */
export const getKey = <TObj>(key: keyof TObj) =>
  (obj: TObj) =>
    obj[key]


// Tests
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('works for example 1', () => {
    expect(getKey('name')({ name: 'John'})).toEqual('John')
  })
}
