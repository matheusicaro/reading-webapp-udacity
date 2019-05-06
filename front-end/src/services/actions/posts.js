import { POSTS } from '../../app/uteis/constants/actions'
import { InitialData as getInitialData, updateScore } from '../../app/api'
import { dispatchApi } from '../../app/uteis'

const downVote = payload => {
  console.log('payload - updateScore>', payload)
  return {
    type: POSTS.CHANGE_VOTE.upVote,
    payload
  }
}

const upVote = payload => {
  console.log('payload - updateScore>', payload)
  return {
    type: POSTS.CHANGE_VOTE.downVote,
    payload
  }
}

const receiveData = payload => {
  console.log('payload - receiveData>', payload)
  return {
    type: POSTS.INITIAL_DATA,
    payload
  }
}

const initialData = dispatch => {
  return dispatchApi(dispatch, getInitialData, receiveData)
}

const updatePostScore = (action, postId) => dispatch => {
  return dispatchApi(dispatch, updateScore, (
    action === POSTS.CHANGE_VOTE.upVote ? upVote : downVote), { action, postId })
}

export const Post = {
  initialData,
  updatePostScore
}
