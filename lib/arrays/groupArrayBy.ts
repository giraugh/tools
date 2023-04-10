/**
 * Group an array using a grouping function
 * @param array the array to create groups from
 * @param groupFn the keys to group by. Elements which return the same key when passed to this function will be in the same group
 * @returns groups built from the array 
 * 
 * @example groupArrayBy([1, 2, 3, 4], x => x % 2) === [[1, 3], [2, 4]]

 * @example
 * const peopleByAge = groupArrayBy([
 *  { name: 'John', age: 20 },
 *  { name: 'Claire', age: 20 },
 *  { name: 'Ben', age: 23 }
 * ], person => person.age)
 * peopleByAge === [[
 *    { name: 'John', age: 20 },
 *    { name: 'Claire', age: 20 }
 *  ], [
 *    { name: 'Ben', age: 23 }
 * ]]
 */
export const groupArrayBy = <T>(
  array: T[],
  groupFn: (element: T) => PropertyKey,
): T[][] => {
  const groups: Record<PropertyKey, T[]> = {}
  for (let element of array) {
    const key = groupFn(element)
    if (!groups[key]) {
      groups[key] = [element]
    } else {
      groups[key].push(element)
    }
  }
  return Object.values(groups)
}


// Tests
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  
  it('works for example 1', () => {
    const groups = groupArrayBy([1, 2, 3, 4], x => x % 2)
    expect(groups).toHaveLength(2)
    expect(groups).toContainEqual([1, 3])
    expect(groups).toContainEqual([2, 4])
  })

  it('works for example 2', () => {
    const peopleByAge = groupArrayBy([
    { name: 'John', age: 20 },
    { name: 'Claire', age: 20 },
    { name: 'Ben', age: 23 }
    ], person => person.age)
    expect(peopleByAge).toHaveLength(2)
    expect(peopleByAge).toContainEqual([
      { name: 'John', age: 20, },
      { name: 'Claire', age: 20, },
    ])
    expect(peopleByAge).toContainEqual([
      { name: 'Ben', age: 23, },
    ])
  })
}
