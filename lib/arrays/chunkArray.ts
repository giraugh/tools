/**
 * Chunk array into an array of chunks of given size
 * @param array array to chunk
 * @param chunkSize number of items in each chunk
 * @returns array of chunks
 * @note this can return partial chunks
 * 
 * @example chunkArray([1, 2, 3, 4, 5, 6], 3) === [[1, 2, 3], [4, 5, 6]]
 * @example chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3], [4, 5, 6], [7]]
 */
export const chunkArray = <T>(array: T[], chunkSize: number) => {
  if (chunkSize === 0) throw new Error('Chunk size of 0 is invalid')

  return array.reduce((chunked: T[][], item, i) => {
    const chunk = Math.floor(i / chunkSize)
    chunked[chunk] = [...chunked[chunk] || [], item]
    return chunked
  }, [])
}


// Tests
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('works for example 1', () => {
    const chunks = chunkArray([1, 2, 3, 4, 5, 6], 3)
    expect(chunks).toHaveLength(2)
    expect(chunks).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ])
  })

  it('works for example 2', () => {
    const chunks = chunkArray([1, 2, 3, 4, 5, 6, 7], 3)
    expect(chunks).toHaveLength(3)
    expect(chunks).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7]
    ])
  })
}
