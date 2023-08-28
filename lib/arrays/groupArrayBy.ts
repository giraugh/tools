/**
 * Group an array using a grouping function into an object
 * @param array the array to create groups from
 * @param groupFn the keys to group by. Elements which return the same key when passed to this function will be in the same group
 * @returns an object containing ararys with an entry for each group
 * 
 * @example
 * const { odd, even } = groupArrayBy([1, 2, 3, 4], x => x % 2 === 0 ? 'even' : 'odd')
 * // odd === [1, 3]
 * // even === [2, 4]

 * @example
 * const peopleByAge = groupArrayBy([
 *  { name: 'John', age: 20 },
 *  { name: 'Claire', age: 20 },
 *  { name: 'Ben', age: 23 }
 * ], person => person.age)
 * peopleByAge === {
 *  20: [
 *    { name: 'John', age: 20 },
 *    { name: 'Claire', age: 20 }
 *  ],
 *  23: [
 *    { name: 'Ben', age: 23 }
 *  ]
 * }
 */
export const groupArrayBy = <T, K extends PropertyKey>(
  array: T[],
  groupFn: (element: T) => K,
): Record<K, T[]> => {
  const groups: Record<PropertyKey, T[]> = {}
  for (let element of array) {
    const key = groupFn(element)
    if (!groups[key]) {
      groups[key] = [element]
    } else {
      groups[key].push(element)
    }
  }

  return groups
}


// Tests
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  
  it('works for example 1', () => {
    const groups = groupArrayBy([1, 2, 3, 4], x => x % 2 === 0 ? 'even' : 'odd')
    expect(groups).toEqual({ odd: [1, 3], even: [2, 4] })
  })

  it('works for example 2', () => {
    const peopleByAge = groupArrayBy([
    { name: 'John', age: 20 },
    { name: 'Claire', age: 20 },
    { name: 'Ben', age: 23 }
    ], person => person.age)
    expect(peopleByAge).toEqual({
      20: [
        { name: 'John', age: 20 },
        { name: 'Claire', age: 20 },
      ],
      23: [
        { name: 'Ben', age: 23 },
      ]
    })
  })
}
