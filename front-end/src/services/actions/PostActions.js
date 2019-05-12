import { POST } from '../../app/constants/actions'
import { initialDataApi, updateScoreApi, deletePostApi, editPostApi } from '../api'
import { DispatchUteis } from '../../utils'

const editPostAction = payload => {
  return {
    type: POST.EDIT,
    payload
  }
}

const deletePostAction = payload => {
  return {
    type: POST.DELETE,
    payload
  }
}

const downVoteAction = payload => {
  return {
    type: POST.CHANGE_VOTE.downVote,
    payload
  }
}

const upVoteAction = payload => {
  return {
    type: POST.CHANGE_VOTE.upVote,
    payload
  }
}

const receiveDataAction = payload => {
  return {
    type: POST.INITIAL_DATA,
    payload
  }
}

const initialData = dispatch => {
  return DispatchUteis.withReturnApi(dispatch, initialDataApi, receiveDataAction)
}

const updateScore = (action, postId) => dispatch => {
  const scoreAction = action === POST.CHANGE_VOTE.upVote ? upVoteAction : downVoteAction
  const data = { action, postId }
  return DispatchUteis.withReturnApi(dispatch, updateScoreApi, scoreAction, data)
}

const deletePost = (postId, posts) => dispatch => {
  const returnData = true
  const data = postId
  return DispatchUteis.withoutReturnApi(dispatch, deletePostApi, deletePostAction, data, returnData)
}

const editPost = (postId, dataUpdate) => dispatch => {
  const data = { postId, dataUpdate }
  return DispatchUteis.withReturnApi(dispatch, editPostApi, editPostAction, data)
}

export const Post = {
  initialData,
  updateScore,
  delete: deletePost,
  edit: editPost
}
