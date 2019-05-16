import { CARD_BUTTON as ACTION_COMMENTS } from '../../app/constants/actions'
import { updateChageInState, deletePostInState, addNewObjInState } from '../../utils'

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
      const newPosts = deletePostInState(state, action.payload)
      return {
        ...newPosts
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
