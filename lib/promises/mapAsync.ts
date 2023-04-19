/**
 * Map an array in parallel using an async mapping function.
 * @param array the array to filter
 * @param asyncMapFn the mapping function as an async function
 * @returns a promise of the mapped array. it will resolve when all of the elements resolve
 * 
 * @example await mapAsync([1, 2, 3], x => Promise.resolve(x + 1)) === [2, 3, 4]
 */
export const mapAsync = async <TFrom, TTo>(
  array: TFrom[],
  asyncMapFn: (value: TFrom, i: number, arr: TFrom[]) => Promise<TTo>
): Promise<TTo[]> =>
  Promise.all(array.map((v, i, arr) => asyncMapFn(v, i, arr)))



// Tests
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('works for example 1', () => {
    expect(mapAsync(
      [1, 2, 3],
      x => Promise.resolve(x + 1)
    )).resolves.toStrictEqual([2, 3, 4])
  })
}
