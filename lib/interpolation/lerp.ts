/**
 * Get a value linearly interpolated between two endpoints.
 * @param a the end point for the interpolation
 * @param b the start point for the interpolation 
 * @param t the amount to interpolate. A value in the range `0<=t<=1`
 * @returns the value that is `t%` from `a` to `b`
 * 
 * @example lerp(0, 4, 0) === 0
 * @example lerp(0, 4, 0.5) === 2
 * @example lerp(0, 4, 1) === 4
 */
export const lerp = (a: number, b: number, t: number) =>
  a + ( b - a ) * t


// Tests
if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('should work for example 1', () => {
    expect(lerp(0, 4, 0)).toEqual(0)
  })

  it('should work for example 2', () => {
    expect(lerp(0, 4, .5)).toEqual(2)
  })

  it('should work for example 3', () => {
    expect(lerp(0, 4, 1)).toEqual(4)
  })
}
