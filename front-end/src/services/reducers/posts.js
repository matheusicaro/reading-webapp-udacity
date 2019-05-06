import { POSTS } from '../../app/uteis/constants/actions'

export const posts = (state = null, action) => {
  switch (action.type) {
    case POSTS.INITIAL_DATA:
      return {
        ...state,
        ...action.payload
      }
    case POSTS.CHANGE_VOTE.upVote || POSTS.CHANGE_VOTE.downVote:
      return {
        ...state
        // ...action.payload
      }
    default:
      return state
  }
}
