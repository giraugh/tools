/** Create an array of integers in the specified range
 * @param start start of range (inclusive)
 * @param end end of range (inclusive)
 * @param interval the jump between successive elements (defaults to 1)
 * @returns the range as an array of numbers
 * 
 * @example range(1, 3) === [1, 2, 3]
 * @example range(3, 8) === [3, 4, 5, 6, 7, 8]
 * @example range(5, 1, -1) === [5, 4, 3, 2, 1]
*/
export const range = (start: number, end: number, interval: number = 1): number[] =>
  Array.from({ length: 1+((end - start)/interval) }, (_, i) => start + interval*i)

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

/**
 * Group an array using a grouping function
 * @param array the array to create groups from
 * @param groupFn the keys to group by. Elements which return the same key when passed to this function will be in the same group
 * @returns groups built from the array 
 * 
 * @example groupArrayBy([1, 2, 3, 4], x => x % 2) === [[1, 3], [2, 4]]

 * @example
 * const peopleByAge = groupArrayBy([
 *  { name: 'John', age: 20 },
 *  { name: 'Claire', age: 20 },
 *  { name: 'Ben', age: 23 }
 * ], person => person.age)
 * peopleByAge === [[
 *    { name: 'John', age: 20 },
 *    { name: 'Claire', age: 20 }
 *  ], [
 *    { name: 'Ben', age: 23 }
 * ]]
 */
export const groupArrayBy = <T>(
  array: T[],
  groupFn: (element: T) => PropertyKey,
): T[][] => {
  const groups: Record<PropertyKey, T[]> = {}
  for (let element of array) {
    const key = groupFn(element)
    if (!groups[key]) {
      groups[key] = [element]
    } else {
      groups[key].push(element)
    }
  }
  return Object.values(groups)
}

/**
 * Filter an array in parallel using an async predicate function.
 * @param array the array to filter
 * @param asyncPredicateFn the predicate function as an async function
 * @returns a promise of the filtered array. it will resolve when all of the async predicates resolve
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
  return pairs.filter(([, include]) => include) as T[]
}


/**
 * Map an array in parallel using an async mapping function.
 * @param array the array to filter
 * @param asyncMapFn the mapping function as an async function
 * @returns a promise of the mapped array. it will resolve when all of the elements resolve
 */
export const mapAsync = async <A, B>(
  array: A[],
  asyncMapFn: (value: A, i: number, arr: A[]) => Promise<B>
): Promise<B[]> =>
  Promise.all(array.map((v, i, arr) => asyncMapFn(v, i, arr)))
