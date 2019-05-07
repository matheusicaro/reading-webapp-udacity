import { POST } from '../../app/constants/actions'

export const posts = (state = null, action) => {
  switch (action.type) {
    case POST.INITIAL_DATA:
      return {
        ...state,
        ...action.payload
      }
    case POST.CHANGE_VOTE.upVote || POST.CHANGE_VOTE.downVote:
      return {
        ...state
        // ...action.payload
      }
    default:
      return state
  }
}
