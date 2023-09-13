/**
 * Settle all of the fields of an object in parallel
 * @param object An object where every field is a promise
 * @returns The same object with every field settled
 *
 * @example await settleObject({
 *   a: Promise.resolve('a'),
 *   b: Promise.resolve('b'),
 * }) === {
 *   a: { status: 'fulfilled', value: 'a' },
 *   b: { status: 'fulfilled', value: 'b' },
 * }
 *
 * @example await settleObject({
 *   a: Promise.resolve('a'),
 *   b: Promise.reject('b'),
 * }) === {
 *   a: { status: 'fulfilled', value: 'a' },
 *   b: { status: 'rejected', reason: 'b' },
 * }
 *
 * @see {@link resolveObject} if you want to fail on any promise rejection
 */
export const settleObject = async <T extends Record<PropertyKey, Promise<unknown>>>(object: T): Promise<{ [k in keyof T]: PromiseSettledResult<T[k]> }> => {
  // Turn into entries
  const entries = Object.entries(object)

  // Settle the promises
  const settledValues = await Promise.allSettled(entries.map(e => e[1]))

  // Match keys with settled values
  const settledEntries = settledValues.map((v, i) => [entries[i][0], v] as const)

  // Reconstruct object
  return Object.fromEntries(settledEntries) as { [k in keyof T]: PromiseSettledResult<T[k]> }
}

// Tests
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('works for example 1', () => {
    expect(settleObject({
      a: Promise.resolve('a'),
      b: Promise.resolve('b'),
    })).resolves.toStrictEqual({
      a: { status: 'fulfilled', value: 'a' },
      b: { status: 'fulfilled', value: 'b' },
    })
  })

  it('works for example 2', () => {
    expect(settleObject({
      a: Promise.resolve('a'),
      b: Promise.reject('b'),
    })).resolves.toStrictEqual({
      a: { status: 'fulfilled', value: 'a' },
      b: { status: 'rejected', reason: 'b' },
    })
  })
}
