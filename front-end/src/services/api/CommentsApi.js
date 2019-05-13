import { requestApi, options } from './api'

/*******************************
*  GET /posts
*
*
*  POST /posts/:id
*  PUT /posts/:id
*  DELETE /posts/:id
********************************/

const getById = ({ postId }) => {
  const pathUrl = `/posts/${postId}/comments`
  const body = null
  const returnJson = true
  return requestApi.get(options(pathUrl, body, returnJson))
}

export const CommentsApi = {
  getById
}
