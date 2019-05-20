import {
  values as getValuesOfObjectToOneArray
} from 'lodash'

import { POST_TYPE_ACTION } from '../../services/actions/post'

let newState = {}

export const posts = (state = null, action) => {
  switch (action.type) {
    case POST_TYPE_ACTION.INITIAL_DATA:
      newState = parseObjectToArrayList(action.payload)
      return newState

    case POST_TYPE_ACTION.CREATE_NEW_POST:
      newState = addNewDataInState(action.payload, state)
      return newState

    case POST_TYPE_ACTION.CHANGE_VOTE[action.type]:
      const { comment } = action.payload
      if (comment) {
        return state
      } else {
        newState = updateChageInState(state, action.payload.post)
        return newState
      }
    case POST_TYPE_ACTION.DELETE:
      newState = deletePostInState(state, action.payload)
      return newState

    case POST_TYPE_ACTION.EDIT:
      newState = updateChageInState(state, action.payload)
      return newState
    default:
      return state
  }
}

const addNewDataInState = (newData, state) => {
  return state.push({ [newData.id]: newData })
}

export const parseObjectToArrayList = objects => {
  return getValuesOfObjectToOneArray(objects).map(object => {
    const newObject = {
      [object.id]: object
    }
    return newObject
  })
}

const deletePostInState = (oldState, idPost) => {
  const newPosts = oldState.filter(existPostWith => !(existPostWith[idPost]))
  return newPosts
}

const updateChageInState = (oldState, updatedPost) => {
  const id = updatedPost.id
  let positionOldPost = ''
  const newPost = { [id]: updatedPost }

  const newState = oldState.filter((existPostWith, index) => {
    if (existPostWith[id]) {
      positionOldPost = index
      return false
    } else { return true }
  })

  newState.splice(positionOldPost, 0, newPost)
  return newState
}
