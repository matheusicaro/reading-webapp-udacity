export const logger = (store) => (next) => (action) => {
  console.group(action.type)

  console.log('Action: ')
  console.log(action)

  const result = next(action)

  console.log('New state: ')
  console.log(store.getState())

  console.groupEnd()

  return result
}
