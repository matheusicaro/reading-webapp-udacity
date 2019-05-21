import {
  values as getValuesOfObjectToOneArray
} from 'lodash'

export const parseObjectToArrayList = objects => {
  return getValuesOfObjectToOneArray(objects).map(object => {
    const newObject = {
      [object.id]: object
    }
    return newObject
  })
}
