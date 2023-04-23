/**
 * Filter the entries of an object using a predicate function
 * @param obj the object to filter
 * @param predFn the predicate function
 * @returns `obj` with entries removed as determined by `predFn`
 *
 * @example
 * const people = { john: { age: 32 }, alice: { age: 23 } }
 * const olderPeople = filterObject(people, (_name, person) => person.age > 25)
 * olderPeople === { john: { age: 32 } }
 * 
 * @example
 * const people = { john: { age: 32 }, alice: { age: 23 } }
 * const aPeople = filterObject(people, (name, _person) => name.startsWith('a'))
 * expect(aPeople).toEqual({ alice: { age: 23 } })
 */
export const filterObject = <TObj extends Record<PropertyKey, any>>(
  obj: TObj,
  predFn: (key: keyof TObj, value: TObj[keyof TObj], object: TObj) => boolean
): Partial<TObj> => {
  const entries = Object.entries(obj).filter(([k, v]) => predFn(k, v, obj))
  return Object.fromEntries(entries) as Partial<TObj>
}


// Tests
if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest
  
  it('works for example 1', () => {
    const people = { john: { age: 32 }, alice: { age: 23 } }
    const olderPeople = filterObject(people, (_name, person) => person.age > 25)
    expect(olderPeople).toEqual({ john: { age: 32 } })
  })
  
  it('works for example 2', () => {
    const people = { john: { age: 32 }, alice: { age: 23 } }
    const aPeople = filterObject(people, (name, _person) => name.startsWith('a'))
    expect(aPeople).toEqual({ alice: { age: 23 } })
  })
}
