import { requestApi, options } from './api'

/*******************************
*  GET /posts
*
*
*  POST /posts/:id
*  PUT /posts/:id
*  DELETE /posts/:id
********************************/

export const initialDataApi = () => {
  const pathUrl = `/posts`
  const body = null
  const returnJson = true
  return requestApi.get(options(pathUrl, body, returnJson))
}

export const updateScoreApi = ({ action, postId }) => {
  const pathUrl = `/posts/${postId}`
  const body = { option: action }
  const returnJson = true
  return requestApi.post(options(pathUrl, body, returnJson))
}

export const deletePostApi = postId => {
  const pathUrl = `/posts/${postId}`
  const body = null
  const returnJson = false
  return requestApi.delete(options(pathUrl, body, returnJson))
}

export const editPostApi = ({ postId, dataUpdate }) => {
  const pathUrl = `/posts/${postId}`
  const body = dataUpdate
  const returnJson = true
  return requestApi.put(options(pathUrl, body, returnJson))
}
