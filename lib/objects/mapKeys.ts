/**
 * Map the keys of an object using a mapping function
 * @param obj the object to map the keys of
 * @param mapFn the mapping function
 * @returns `obj` with its keys mapped using `mapFn`
 *
 * @example
 * const capitalNames = mapKeys({ john: 10, alice: 20 }, k => k.toUpperCase())
 * capitalNames === { JOHN: 10, ALICE: 20 }
 */
export const mapKeys = <
  TMapped extends PropertyKey,
  TObj extends Record<PropertyKey, any>
>(
  obj: TObj,
  mapFn: (t: keyof TObj) => TMapped
): { [k in keyof TObj as TMapped]: TObj[k] } => {
  const entries = Object.entries(obj).map(([k, v]) => [mapFn(k), v])
  return Object.fromEntries(entries)
}


// Tests
if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('works for example 1', () => {
    const capitalNames = mapKeys({ john: 10, alice: 20 }, k => k.toUpperCase())
    expect(capitalNames).toEqual({ JOHN: 10, ALICE: 20 })
  })
}
