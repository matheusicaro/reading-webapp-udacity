import { POSTS } from './actions'
import { like, dislike } from './../../assets/icons'

export const BUTTONS = {
  POST: {
    UP_VOTE: {
      action: POSTS.CHANGE_VOTE.UP_VOTE,
      icon: like
    },
    DOWN_VOTE: {
      action: POSTS.CHANGE_VOTE.DOWN_VOTE,
      icon: dislike
    }
  }
}
