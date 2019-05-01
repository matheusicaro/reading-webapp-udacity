import { ACTIONS } from '../../app/uteis/constants'

export const posts = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.POSTS.INITIAL_DATA :
      console.log(action.payload)
      return {
        ...state,
        ...action.payload
      }
    default :
      return state
  }
}
