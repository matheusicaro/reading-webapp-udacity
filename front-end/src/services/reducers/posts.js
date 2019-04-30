import { POSTS } from '../uteis/constants/'

export const posts = (state = {}, action) => {
  switch (action.type) {
    case POSTS.ACTIONS.INITIAL_DATA :
      return {
        ...state,
        posts: action.posts
      }
    default :
      return state
  }
}
