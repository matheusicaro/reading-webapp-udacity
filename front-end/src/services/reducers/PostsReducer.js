import { POST } from '../../app/constants/actions'
import { deletePostInState } from '../../app/uteis/HomeUteis'

export const posts = (state = null, action) => {
  switch (action.type) {
    case POST.INITIAL_DATA:
      return {
        ...state,
        ...action.payload
      }
    case POST.CHANGE_VOTE.upVote || POST.CHANGE_VOTE.downVote:
      console.log('estate', state)
      return {
        ...state,
        ...action.payload
      }
    case POST.DELETE:
      const newPosts = deletePostInState(state, action.payload)
      console.log(newPosts)
      return {
        posts: newPosts
      }
    default:
      return state
  }
}
