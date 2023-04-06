/**
 * Merge the values of an array of objects using the specified merging function
 * @param objects the array of objects to merge
 * @param mergeFn a function which defines the merging operation 

 * @example
 * const obj = mergeObjectValues([{ test: 'some' }, { test: null }], (a, b) => a || b)
 * obj.test === 'some'
 */
export const mergeObjectValues = <
  TKeys extends PropertyKey,
  TObj extends Record<TKeys, unknown>
>(
  objects: TObj[],
  mergeFn: (a: TObj[TKeys], b: TObj[TKeys]) => TObj[TKeys]
): TObj =>
  objects.reduce((merged, object) => Object.fromEntries(
    Object.entries(object).map(([key, value]) => [key, mergeFn(value as TObj[TKeys], merged[key as keyof typeof merged])])
  ), {}) as TObj
