import { COMMENTS } from '../../app/constants/actions'

// let newState = {}

export const comments = (state = null, action) => {
  switch (action.type) {
    case COMMENTS.GET_BY_ID:
      return {
        ...action.payload
      }
    // case POST.CHANGE_VOTE[action.type]:
    //   newState = updatePostsInState(state, action.payload)
    //   return {
    //     ...newState
    //   }
    // case POST.DELETE:
    //   const newPosts = deletePostInState(state, action.payload)
    //   return {
    //     ...newPosts
    //   }
    // case POST.EDIT:
    //   newState = updatePostsInState(state, action.payload)
    //   return {
    //     ...newState
    //   }
    default:
      return state
  }
}
