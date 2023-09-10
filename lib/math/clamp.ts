/**
 * Return a value that is clamped between two inclusive bounds.
 * @param value the value to clamp
 * @param min the minimum bound
 * @param max the maximum bound
 * @returns returns `value` if within bounds, otherwise the closest bound
 *
 * @example
 * clamp(10, 3, 12) === 10
 * clamp(1, 3, 12) === 3
 * clamp(20, 3, 12) === 12
 */
export const clamp = (value: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, value))

// Tests
if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('works for example 1', () => {
    expect(clamp(10, 3, 12)).toBe(10)
  })

  it('works for example 2', () => {
    expect(clamp(1, 3, 12)).toBe(3)
  })

  it('works for example 2', () => {
    expect(clamp(20, 3, 12)).toBe(12)
  })
}
