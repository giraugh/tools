/**
 * Map the values of an object using a mapping function
 * @param obj the object to map values of
 * @param mapFn the mapping function
 * @returns `obj` with its values mapped using `mapFn`
 *
 * @example
 * const counts = mapValues({ a: 1, b: 2, c: 3 }, x => x + 1)
 * counts === { a: 2, b: 3, c: 4 }
 *
 * @example
 * const lengths = mapValues({ a: 'cat', b: 'elephant', c: 'mouse' }, a => a.length)
 * lengths === { a: 3, b: 8, c: 5 }
 */
export const mapValues = <
  TMapped,
  TObj extends Record<PropertyKey, any>
>(
  obj: TObj,
  mapFn: (t: TObj[keyof TObj]) => TMapped
): { [k in keyof TObj]: TMapped } => {
  const entries = Object.entries(obj).map(([k, v]) => [k, mapFn(v)])
  return Object.fromEntries(entries)
}


// Tests
if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('works for example 1', () => {
    const counts = mapValues({ a: 1, b: 2, c: 3 }, x => x + 1)
    expect(counts).toEqual({ a: 2, b: 3, c: 4 })
  })

  it('works for example 2', () => {
    const lengths = mapValues({ a: 'cat', b: 'elephant', c: 'mouse' }, a => a.length)
    expect(lengths).toEqual({ a: 3, b: 8, c: 5 })
  })
}

