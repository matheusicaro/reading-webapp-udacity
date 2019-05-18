import { CommentsApi } from '../../api'
import { DispatchUteis } from '../../../utils'

import { COMMENTS_TYPE_ACTION,
  actionCreateComment,
  actionDeleteComment,
  actionEditComment,
  actionDownVote,
  actionReceiveData,
  actionUpVote } from './Types'

const editComment = (commentId, dataUpdate) => dispatch => {
  const data = { commentId, dataUpdate }
  return DispatchUteis.withReturnApi(dispatch, CommentsApi.edit, actionEditComment, data)
}

const deleteComment = (commentId) => dispatch => {
  const returnData = true
  const data = commentId
  return DispatchUteis.withoutReturnApi(dispatch, CommentsApi.deleteComment, actionDeleteComment, data, returnData)
}

const updateScore = (action, commentId) => dispatch => {
  const scoreAction = action === COMMENTS_TYPE_ACTION.CHANGE_VOTE.upVote ? actionUpVote : actionDownVote
  const data = { action, commentId }
  return DispatchUteis.withReturnApi(dispatch, CommentsApi.update, scoreAction, data)
}

const getById = commentId => dispatch => {
  const data = commentId
  return DispatchUteis.withReturnApi(dispatch, CommentsApi.getById, actionReceiveData, data)
}

const sendComment = data => dispatch => {
  return DispatchUteis.withReturnApi(dispatch, CommentsApi.createComment, actionCreateComment, data)
}

export const CommentsAction = {
  getById,
  updateScore,
  delete: deleteComment,
  edit: editComment,
  sendComment
}
