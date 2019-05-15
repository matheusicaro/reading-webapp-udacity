import { CARD_BUTTON as COMMENTS } from '../../app/constants/actions'
import { CommentsApi } from '../api'
import { DispatchUteis } from '../../utils'

const receiveDataAction = payload => {
  return {
    type: COMMENTS.GET_BY_ID,
    payload
  }
}

const downVoteAction = payload => {
  return {
    type: COMMENTS.CHANGE_VOTE.downVote,
    payload
  }
}

const upVoteAction = payload => {
  return {
    type: COMMENTS.CHANGE_VOTE.upVote,
    payload
  }
}

const deleteCommentAction = payload => {
  return {
    type: COMMENTS.DELETE,
    payload
  }
}

const deleteComment = (commentId) => dispatch => {
  console.log(commentId)
  const returnData = true
  const data = commentId
  return DispatchUteis.withoutReturnApi(dispatch, CommentsApi.deleteComment, deleteCommentAction, data, returnData)
}

const updateScore = (action, commentId) => dispatch => {
  const scoreAction = action === COMMENTS.CHANGE_VOTE.upVote ? upVoteAction : downVoteAction
  const data = { action, commentId }
  return DispatchUteis.withReturnApi(dispatch, CommentsApi.update, scoreAction, data)
}

const getById = commentId => dispatch => {
  const data = commentId
  return DispatchUteis.withReturnApi(dispatch, CommentsApi.getById, receiveDataAction, data)
}

export const Comments = {
  getById,
  updateScore,
  delete: deleteComment
}
