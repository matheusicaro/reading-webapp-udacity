import { CATEGORIES } from '../../app/constants/actions'

export const categories = (state = null, action) => {
  switch (action.type) {
    case CATEGORIES.INITIAL_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
