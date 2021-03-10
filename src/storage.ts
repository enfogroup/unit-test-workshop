// istanbul ignore file

let ephemeralStorage: number;

/**
 * Stores data on disk.
 * @param data 
 * Data as number to store
 */
export const storeData = (data: number): void => {
  console.log(`Storing ${data}`)
  ephemeralStorage = data
}

/**
 * Loads data from disk
 */
export const loadData = (): number => {
  throw new Error('Unable to read memory')
}
