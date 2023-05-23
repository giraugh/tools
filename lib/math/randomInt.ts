/**
 * Get a random integer within an inclusive range
 * @param min the lower bound of the range
 * @param max the upper bound of the range
 * @returns a random integer between the bounds
 *
 * @example
 * ```
 * const value = randomInt(-10, 10)
 * // value >= -10
 * // value <= 10
 * // Math.round(value) === value
 * ```
 */
export const randomInt = (min: number, max: number) =>
  Math.round((Math.random() * (max - min))) + min


// Tests
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('is always an integer', () => {
    for (let i = 0; i < 10000; i++) {
      const val = randomInt(-10, 10)
      expect(val).toEqual(Math.round(val))
    }
  })

  it('is always within range', () => {
    for (let i = 0; i < 10000; i++) {
      const val = randomInt(-10, 10)
      expect(val).toBeGreaterThanOrEqual(-10)
      expect(val).toBeLessThanOrEqual(10)
    }
  })
}

