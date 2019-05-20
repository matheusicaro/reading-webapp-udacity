import { PostApi } from '../../api'
import { DispatchUteis } from '../../../utils'

import { POST_TYPE_ACTION, actionReceiveData,
  actionDeletePost,
  actionCreatePost,
  actionDownVote,
  actionEditPost,
  actionUpVote } from './Types'

const initialData = dispatch => {
  return DispatchUteis.withReturnApi(dispatch, PostApi.initialData, actionReceiveData)
}

const createNewPost = newPost => dispatch => {
  const data = newPost
  return DispatchUteis.withReturnApi(dispatch, PostApi.create, actionCreatePost, data)
}

const updateScore = (action, postId) => dispatch => {
  const scoreAction = action === POST_TYPE_ACTION.CHANGE_VOTE.upVote ? actionUpVote : actionDownVote
  const data = { action, postId }
  return DispatchUteis.withReturnApi(dispatch, PostApi.update, scoreAction, data)
}

const deletePost = (postId, posts) => dispatch => {
  const returnData = true
  const data = postId
  return DispatchUteis.withoutReturnApi(dispatch, PostApi.deletePost, actionDeletePost, data, returnData)
}

const editPost = (postId, update) => dispatch => {
  const data = { postId, update }
  return DispatchUteis.withReturnApi(dispatch, PostApi.edit, actionEditPost, data)
}

export const PostAction = {
  initialData,
  updateScore,
  delete: deletePost,
  edit: editPost,
  createNewPost
}
