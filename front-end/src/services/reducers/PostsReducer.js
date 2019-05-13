import { POST } from '../../app/constants/actions'
import { deletePostInState, updatePostsInState } from '../../utils'

let newState = {}

export const posts = (state = null, action) => {
  switch (action.type) {
    case POST.INITIAL_DATA:
      return {
        ...state,
        ...action.payload
      }
    case POST.CHANGE_VOTE[action.type]:
      newState = updatePostsInState(state, action.payload)
      return {
        ...newState
      }
    case POST.DELETE:
      const newPosts = deletePostInState(state, action.payload)
      return {
        ...newPosts
      }
    case POST.EDIT:
      newState = updatePostsInState(state, action.payload)
      return {
        ...newState
      }
    default:
      return state
  }
}
