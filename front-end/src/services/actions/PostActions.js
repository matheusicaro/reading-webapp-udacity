import { CARD_BUTTON as ACTION_POST } from '../../app/constants/actions'
import { PostApi } from '../api'
import { DispatchUteis } from '../../utils'

const editPostAction = payload => {
  return {
    type: ACTION_POST.EDIT,
    payload
  }
}

const deletePostAction = payload => {
  return {
    type: ACTION_POST.DELETE,
    payload
  }
}

const downVoteAction = post => {
  return {
    type: ACTION_POST.CHANGE_VOTE.downVote,
    payload: {
      post
    }
  }
}

const upVoteAction = post => {
  return {
    type: ACTION_POST.CHANGE_VOTE.upVote,
    payload: {
      post
    }
  }
}

const receiveDataAction = payload => {
  return {
    type: ACTION_POST.INITIAL_DATA,
    payload
  }
}

const initialData = dispatch => {
  return DispatchUteis.withReturnApi(dispatch, PostApi.initialData, receiveDataAction)
}

const updateScore = (action, postId) => dispatch => {
  const scoreAction = action === ACTION_POST.CHANGE_VOTE.upVote ? upVoteAction : downVoteAction
  const data = { action, postId }
  return DispatchUteis.withReturnApi(dispatch, PostApi.update, scoreAction, data)
}

const deletePost = (postId, posts) => dispatch => {
  const returnData = true
  const data = postId
  return DispatchUteis.withoutReturnApi(dispatch, PostApi.deletePost, deletePostAction, data, returnData)
}

const editPost = (postId, dataUpdate) => dispatch => {
  const data = { postId, dataUpdate }
  return DispatchUteis.withReturnApi(dispatch, PostApi.edit, editPostAction, data)
}

export const Post = {
  initialData,
  updateScore,
  delete: deletePost,
  edit: editPost
}
