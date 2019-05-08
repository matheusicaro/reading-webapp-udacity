import { POST } from '../../app/constants/actions'
import { initialDataApi, updateScoreApi, deletePostApi } from '../../app/api'
import { dispatchApi } from '../../app/uteis'

const deletePostId = payload => {
  return {
    type: POST.DELETE,
    payload
  }
}

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
  return dispatchApi(dispatch, initialDataApi, receiveData)
}

const updateScore = (action, postId) => dispatch => {
  return dispatchApi(dispatch, updateScoreApi, (
    action === POST.CHANGE_VOTE.upVote ? upVote : downVote), { action, postId })
}

const deletePost = (postId, posts) => dispatch => {
  return deletePostApi(postId)
    .then(response => dispatch(deletePostId(postId)))
    .catch(error => {
      window.alert('ERROR NO CONSOLE')
      console.log(error)
    })
}

export const Post = {
  initialData,
  updateScore,
  delete: deletePost
}
