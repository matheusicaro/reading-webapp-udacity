import { COMMENTS } from '../../app/constants/actions'
import { CommentsApi } from '../api'
import { DispatchUteis } from '../../utils'

const receiveDataAction = payload => {
  return {
    type: COMMENTS.GET_BY_ID,
    payload
  }
}

const getById = postId => dispatch => {
  const data = postId
  return DispatchUteis.withReturnApi(dispatch, CommentsApi.getById, receiveDataAction, data)
}

export const Comments = {
  getById
}
