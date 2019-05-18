import { values as getValuesOfObjectToOneArray } from 'lodash'

import { POST_TYPE_ACTION } from '../../services/actions/post'
import { deletePostInState, updateChageInState } from '../../utils'

let newState = {}

const addNewDataInState = (newData, state) => {
  return state.push({ [newData.id]: newData })
}

const parseObjectToArrayList = objects => {
  return getValuesOfObjectToOneArray(objects).map(object => {
    const newObject = {
      [object.id]: object
    }
    return newObject
  })
}

export const posts = (state = null, action) => {
  switch (action.type) {
    case POST_TYPE_ACTION.INITIAL_DATA:
      newState = parseObjectToArrayList(action.payload)
      return newState

    case POST_TYPE_ACTION.CREATE_NEW_POST:
      newState = addNewDataInState(action.payload, state)
      return newState

    case POST_TYPE_ACTION.CHANGE_VOTE[action.type]:
      newState = addNewDataInState(action.payload, state)
      return {
        ...newState
      }
    case POST_TYPE_ACTION.DELETE:
      const newPosts = deletePostInState(state, action.payload.post)
      return {
        ...newPosts
      }
    case POST_TYPE_ACTION.EDIT:
      newState = updateChageInState(state, action.payload)
      return {
        ...newState
      }
    default:
      return state
  }
}
