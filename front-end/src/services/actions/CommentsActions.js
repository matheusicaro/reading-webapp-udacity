import { CARD_BUTTON as ACTION_COMMENTS } from '../../app/constants/actions'
import { CommentsApi } from '../api'
import { DispatchUteis } from '../../utils'

const receiveDataAction = payload => {
  return {
    type: ACTION_COMMENTS.GET_BY_ID,
    payload
  }
}

const downVoteAction = comment => {
  return {
    type: ACTION_COMMENTS.CHANGE_VOTE.downVote,
    payload: {
      comment
    }
  }
}

const upVoteAction = comment => {
  return {
    type: ACTION_COMMENTS.CHANGE_VOTE.upVote,
    payload: {
      comment
    }
  }
}

const deleteCommentAction = payload => {
  return {
    type: ACTION_COMMENTS.DELETE,
    payload
  }
}

const editCommentAction = payload => {
  return {
    type: ACTION_COMMENTS.EDIT,
    payload
  }
}

const createComment = payload => {
  return {
    type: ACTION_COMMENTS.CREATE_COMMENT,
    payload
  }
}

const editComment = (commentId, dataUpdate) => dispatch => {
  const data = { commentId, dataUpdate }
  return DispatchUteis.withReturnApi(dispatch, CommentsApi.edit, editCommentAction, data)
}

const deleteComment = (commentId) => dispatch => {
  const returnData = true
  const data = commentId
  return DispatchUteis.withoutReturnApi(dispatch, CommentsApi.deleteComment, deleteCommentAction, data, returnData)
}

const updateScore = (action, commentId) => dispatch => {
  const scoreAction = action === ACTION_COMMENTS.CHANGE_VOTE.upVote ? upVoteAction : downVoteAction
  const data = { action, commentId }
  return DispatchUteis.withReturnApi(dispatch, CommentsApi.update, scoreAction, data)
}

const getById = commentId => dispatch => {
  const data = commentId
  return DispatchUteis.withReturnApi(dispatch, CommentsApi.getById, receiveDataAction, data)
}

const sendComment = data => dispatch => {
  return DispatchUteis.withReturnApi(dispatch, CommentsApi.createComment, createComment, data)
}

export const Comments = {
  getById,
  updateScore,
  delete: deleteComment,
  edit: editComment,
  sendComment
}
