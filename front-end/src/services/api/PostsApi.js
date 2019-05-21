import { requestApi, options } from './api'

/*******************************
*  GET /posts
*
*
*  POST /posts/:id
*  PUT /posts/:id
*  DELETE /posts/:id
********************************/

const initialData = () => {
  const pathUrl = `/posts`
  const body = null
  const returnJson = true
  return requestApi.get(options(pathUrl, body, returnJson))
}

const update = ({ action, postId }) => {
  const pathUrl = `/posts/${postId}`
  const body = { option: action }
  const returnJson = true
  return requestApi.post(options(pathUrl, body, returnJson))
}

const deletePost = postId => {
  const pathUrl = `/posts/${postId}`
  const body = null
  const returnJson = false
  return requestApi.delete(options(pathUrl, body, returnJson))
}

const edit = data => {
  const pathUrl = `/posts/${data.postId}`
  const body = data.update
  const returnJson = true
  return requestApi.put(options(pathUrl, body, returnJson))
}

const create = post => {
  const pathUrl = `/posts`
  const body = post
  const returnJson = true
  return requestApi.post(options(pathUrl, body, returnJson))
}

export const PostApi = {
  initialData,
  update,
  deletePost,
  edit,
  create
}
