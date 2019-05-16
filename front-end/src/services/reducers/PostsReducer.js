import { CARD_BUTTON as ACTION_POST } from '../../app/constants/actions'
import { deletePostInState, updateChageInState } from '../../utils'

let newState = {}

export const posts = (state = null, action) => {
  switch (action.type) {
    case ACTION_POST.INITIAL_DATA:
      return {
        ...state,
        ...action.payload
      }
    case ACTION_POST.CHANGE_VOTE[action.type]:
      newState = action.payload.post ? updateChageInState(state, action.payload.post) : state
      return {
        ...newState
      }
    case ACTION_POST.DELETE:
      const newPosts = deletePostInState(state, action.payload.post)
      return {
        ...newPosts
      }
    case ACTION_POST.EDIT:
      newState = updateChageInState(state, action.payload)
      return {
        ...newState
      }
    default:
      return state
  }
}
