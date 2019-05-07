import { POST } from '../../app/constants/actions'
import { InitialData as getInitialData, updateScore } from '../../app/api'
import { dispatchApi } from '../../app/uteis'

const downVote = payload => {
  return {
    type: POST.CHANGE_VOTE.upVote,
    payload
  }
}

const upVote = payload => {
  return {
    type: POST.CHANGE_VOTE.downVote,
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
  return dispatchApi(dispatch, getInitialData, receiveData)
}

const updatePostScore = (action, postId) => dispatch => {
  return dispatchApi(dispatch, updateScore, (
    action === POST.CHANGE_VOTE.upVote ? upVote : downVote), { action, postId })
}

export const Post = {
  initialData,
  updatePostScore
}
