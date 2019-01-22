import {
  RECEIVE_DATA
} from '../actions/initialDate'

export function users (state = {}, action) {

  switch(action.type) {
    case RECEIVE_DATA :
      return {
        ...state,
        users: action.users
      }
    default :
      return state
  }
}