type Resolved<Type> = { [k in keyof Type]: Awaited<Type[k]> }
type PromiseRecord = Record<string, Promise<unknown>>

/**
 * Resolve all of the fields of an object in parallel
 * @param object An object where every field is a promise 
 * @returns The same object with every field resolved
 */
const resolveObject = async <T extends PromiseRecord>(object: T): Promise<Resolved<T>> => {
  // Create promises for each entry 
  const entryPromises = Object.entries(object)
    .map(([key, promise]) => promise.then(value => [key, value]))
  
  // Resolve the promises
  const resolvedEntries = await Promise.all(entryPromises)
  
  // Reconstruct object
  return Object.fromEntries(resolvedEntries)
}

export default resolveObject
