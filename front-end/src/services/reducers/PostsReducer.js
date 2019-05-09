import { POST } from '../../app/constants/actions'
import { deletePostInState, updatePostsInState } from '../../app/uteis/PostReducerUteis'

export const posts = (state = null, action) => {
  switch (action.type) {
    case POST.INITIAL_DATA:
      return {
        ...state,
        ...action.payload
      }
    case POST.CHANGE_VOTE[action.type]:
      const newState = updatePostsInState(state, action.payload)
      return {
        ...newState
      }
    case POST.DELETE:
      const newPosts = deletePostInState(state, action.payload)
      return {
        ...newPosts
      }
    default:
      return state
  }
}
