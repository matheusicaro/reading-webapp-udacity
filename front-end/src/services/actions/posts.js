import { ACTIONS } from '../../app/uteis/constants'
import { InitialData as getInitialData } from '../../app/api'
import { dispatchApi } from '../../app/uteis'

const receiveData = payload => {
  return {
    type: ACTIONS.POSTS.INITIAL_DATA,
    payload
  }
}

const initialData = dispatch => {
  return dispatchApi(dispatch, getInitialData, receiveData)
}

export const Post = {
  initialData
}
