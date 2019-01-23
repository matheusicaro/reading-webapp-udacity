import {
  RECEIVE_DATA
} from '../actions/initialDate'

export function posts (state = {}, action) {

  switch(action.type) {
    case RECEIVE_DATA :
      return {
        ...state,
        posts: action.posts
      }
    default :
      return state
  }
}