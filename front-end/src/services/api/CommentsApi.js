import { requestApi, options } from './api'

/*******************************
*  GET /posts
*
*
*  POST /posts/:id
*  PUT /posts/:id
*  DELETE /posts/:id
********************************/

const getById = postId => {
  const pathUrl = `/posts/${postId}/comments`
  const body = null
  const returnJson = true
  return requestApi.get(options(pathUrl, body, returnJson))
}

const update = ({ action, commentId }) => {
  const pathUrl = `/comments/${commentId}`
  const body = { option: action }
  const returnJson = true
  return requestApi.post(options(pathUrl, body, returnJson))
}

const deleteComment = commentId => {
  const pathUrl = `/comments/${commentId}`
  const body = null
  const returnJson = false
  return requestApi.delete(options(pathUrl, body, returnJson))
}

const edit = ({ commentId, dataUpdate }) => {
  const pathUrl = `/comments/${commentId}`
  const body = dataUpdate
  const returnJson = true
  return requestApi.put(options(pathUrl, body, returnJson))
}

const createComment = data => {
  const pathUrl = `/comments`
  const body = data
  const returnJson = true
  return requestApi.post(options(pathUrl, body, returnJson))
}

export const CommentsApi = {
  getById,
  update,
  deleteComment,
  edit,
  createComment
}
