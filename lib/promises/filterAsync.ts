/**
 * Filter an array in parallel using an async predicate function.
 * @param array the array to filter
 * @param asyncPredicateFn the predicate function as an async function
 * @returns a promise of the filtered array. it will resolve when all of the async predicates resolve
 *
 * @example await filterAsync([1, 2, 3], x => Promise.resolve(x % 2 === 0)) === [2]
 */
export const filterAsync = async <T>(
  array: T[],
  asyncPredicateFn: (value: T, i: number, arr: T[]) => Promise<boolean>
): Promise<T[]> => {
  // Asyncronously determine whether each element should be included 
  const pairs: [T, boolean][] = await Promise.all(
    array.map(async (v, i, arr) => asyncPredicateFn(v, i, arr)
      .then(include => [v, include])))
  
  // Synchronously filter out the elements to be excluded 
  return pairs.flatMap(([value, include]) => include ? [value] : [])
}


// Tests
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('works for example 1', () => {
    expect(filterAsync(
      [1, 2, 3],
      x => Promise.resolve(x % 2 === 0)
    )).resolves.toStrictEqual([2])
  })
}
