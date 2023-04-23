export type Resolved<Type> = { [k in keyof Type]: Awaited<Type[k]> }

/**
 * Resolve all of the fields of an object in parallel
 * @param object An object where every field is a promise 
 * @returns The same object with every field resolved
 * 
 * @example await resolveObject({
 *   a: Promise.resolve('a'),
 *   b: Promise.resolve('b'), 
 * }) === { a: 'a', b: 'b' }
 *
 * @example await resolveObject({
 *   a: Promise.resolve('a'),
 *   b: Promise.reject('b'), 
 * }) // throws error
 */
export const resolveObject = async <T extends Record<string, Promise<any>>>(object: T): Promise<Resolved<T>> => {
  // Create promises for each entry 
  const entryPromises = Object.entries(object)
    .map(([key, promise]) => promise.then(value => [key, value]))
  
  // Resolve the promises
  const resolvedEntries = await Promise.all(entryPromises)
  
  // Reconstruct object
  return Object.fromEntries(resolvedEntries)
}


// Tests
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('works for example 1', () => {
    expect(resolveObject({
      a: Promise.resolve('a'),
      b: Promise.resolve('b'),
    })).resolves.toStrictEqual({
      a: 'a',
      b: 'b'
    })
  })

  it('works for example 2', () => {
    expect(resolveObject({
      a: Promise.resolve('a'),
      b: Promise.reject('b'),
    })).rejects.toThrowError()
  })
}
