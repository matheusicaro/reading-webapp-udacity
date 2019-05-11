import { POST } from '../../app/constants/actions'
import { initialDataApi, updateScoreApi, deletePostApi } from '../api'
import { DispatchUteis } from '../../utils'

const deletePostId = payload => {
  return {
    type: POST.DELETE,
    payload
  }
}

const downVote = payload => {
  return {
    type: POST.CHANGE_VOTE.downVote,
    payload
  }
}

const upVote = payload => {
  return {
    type: POST.CHANGE_VOTE.upVote,
    payload
  }
}

const receiveData = payload => {
  return {
    type: POST.INITIAL_DATA,
    payload
  }
}

const initialData = dispatch => {
  return DispatchUteis.withReturnApi(dispatch, initialDataApi, receiveData)
}

const updateScore = (action, postId) => dispatch => {
  const actionScore = action === POST.CHANGE_VOTE.upVote ? upVote : downVote
  const data = { action, postId }
  return DispatchUteis.withReturnApi(dispatch, updateScoreApi, actionScore, data)
}

const deletePost = (postId, posts) => dispatch => {
  const returnData = true
  const data = postId
  return DispatchUteis.withoutReturnApi(dispatch, deletePostApi, deletePostId, data, returnData)
}

export const Post = {
  initialData,
  updateScore,
  delete: deletePost
}
