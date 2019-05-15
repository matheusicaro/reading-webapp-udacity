import { CARD_BUTTON as COMMENTS } from '../../app/constants/actions'
import { deletePostInState, updateChageInState } from '../../utils'

let newState = {}

export const comments = (state = null, action) => {
  if (action.type === COMMENTS.CHANGE_VOTE.downVote || action.type === COMMENTS.CHANGE_VOTE.upVote) console.log(state, action)
  switch (action.type) {
    case COMMENTS.GET_BY_ID:
      return {
        ...action.payload
      }
    case COMMENTS.CHANGE_VOTE[action.type]:
      newState = updateChageInState(state, action.payload)
      return {
        ...newState
      }
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
