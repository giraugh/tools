/**
 * Return a sorted array using a comparison function that returns a sorting key
 * @param array the array to sort
 * @param keyFn the key to sort by. The elements of the array will be sorted using standard `>` and `<` operations on this key.
 * @param order - whether ascending or descending. 'asc' by default.
 * @returns the array sorted using the keyFn.
 * 
 * @example
 * const sorted = sortArrayBy(events, event => event.date.valueOf())
 */
export const sortArrayBy = <T, K extends number | string>(
  array: T[],
  keyFn: (element: T) => K,
  order: 'asc' | 'desc' = 'asc',
): T[] => {
  const fw = order === 'asc' ? 1 : -1;
  return array
    .toSorted((a, b) => keyFn(a) > keyFn(b) ? fw : -fw)
}

// Tests
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('works for example 1', () => {
    const events = [
      { message: 'Checked into hotel', date: new Date('2026-03-03 08:00') },
      { message: 'Plane took off', date: new Date('2026-03-02 13:00') },
      { message: 'Arrived at the airport', date: new Date('2026-03-02 10:00') },
      { message: 'Arrived in Italy', date: new Date('2026-03-03 05:00') },
    ]

    const sorted = sortArrayBy(events, e => e.date.valueOf())
    expect(sorted.map(s => s.message)).toEqual([
      'Arrived at the airport',
      'Plane took off',
      'Arrived in Italy',
      'Checked into hotel',
    ])
  })
}
