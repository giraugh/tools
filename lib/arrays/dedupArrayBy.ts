/**
 * Deduplicate the values in an array using a specified key function.
 * Preserves order.
 * @param array the array to deduplicate
 * @param keyFn a function to generate a key to dedup by
 *
 * @example
 * const animals = [
 *   { id: 1, animal: 'whale' },
 *   { id: 1, animal: 'gorilla' },
 *   { id: 2, animal: 'ant' },
 * ]
 * dedupArrayBy(animals, animal => animal.id) === [
 *   { id: 1, animal: 'whale' },
 *   { id: 2, animal: 'ant' },
 * ]
 */
export const dedupArrayBy = <T extends unknown>(array: T[], keyFn: (t: T) => PropertyKey) =>
  array.filter((value, i, a) => a.findIndex(otherValue => keyFn(otherValue) === keyFn(value)) === i)


// Tests
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('works for example 1', () => {
    expect(dedupArrayBy([
      { id: 1, animal: 'whale' },
      { id: 1, animal: 'gorilla' },
      { id: 2, animal: 'ant' },
    ], a => a.id)).toStrictEqual([
      { id: 1, animal: 'whale' },
      { id: 2, animal: 'ant' }
    ])
  })

  it('preserves order while deduping', () => {
    const animals = [
      { id: 1, animal: 'whale' },
      { id: 1, animal: 'gorilla' },
      { id: 2, animal: 'ant' },
    ]
    expect(dedupArrayBy(animals, a => a.id)).toStrictEqual([{ id: 1, animal: 'whale' }, { id: 2, animal: 'ant' }])
    expect(dedupArrayBy(animals, a => a.animal)).toStrictEqual(animals)
  })
}
