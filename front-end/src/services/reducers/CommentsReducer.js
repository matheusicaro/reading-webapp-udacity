import { values as getValuesOfObject } from 'lodash'

import { CARD_BUTTON as ACTION_COMMENTS } from '../../app/constants/actions'

let newState = {}

export const comments = (state = null, action) => {
  switch (action.type) {
    case ACTION_COMMENTS.CREATE_COMMENT:
      newState = addNewObjInState(action.payload, state)
      return {
        ...newState
      }
    case ACTION_COMMENTS.GET_BY_ID:
      return {
        ...action.payload
      }
    case ACTION_COMMENTS.CHANGE_VOTE[action.type]:
      newState = action.payload.comment ? updateChageInState(state, action.payload.comment) : state
      return {
        ...newState
      }
    case ACTION_COMMENTS.DELETE:
      const newComments = deleteInState(state, action.payload)
      return {
        ...newComments
      }
    case ACTION_COMMENTS.EDIT:
      newState = updateChageInState(state, action.payload)
      return {
        ...newState
      }
    default:
      return state
  }
}

export const addNewObjInState = (object, state) => {
  const newState = getValuesOfObject(state)
  newState.push(object)
  return { ...newState }
}

export const updateChageInState = (posts, newPost) => {
  let newPosts = getValuesOfObject(posts)
  let indexLocale
  newPosts = newPosts.filter((post, index) => {
    if (post.id === newPost.id) indexLocale = index
    return post.id !== newPost.id
  })
  newPosts.splice(indexLocale, 0, newPost)
  return { ...newPosts }
}

export const deleteInState = (posts, id) => {
  const newPosts = getValuesOfObject(posts).filter(post => post.id !== id)
  return { ...newPosts }
}
