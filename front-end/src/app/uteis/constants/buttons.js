import { POSTS } from './actions'
import { like, dislike, menuDots } from './../../assets/icons'

export const BUTTONS = {
  POST: {
    UP_VOTE: {
      action: POSTS.CHANGE_VOTE.upVote,
      icon: like
    },
    DOWN_VOTE: {
      action: POSTS.CHANGE_VOTE.downVote,
      icon: dislike
    }
  },
  MENU: {
    MENU_DOTS: {
      click: 'click',
      action: 'click',
      icon: menuDots
    }
  }
}
