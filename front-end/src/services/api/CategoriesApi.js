import { requestApi, options } from './api'

/*******************************
*  GET /categories
*  GET /:category/posts
*
**/

const initialData = () => {
  const pathUrl = `/categories`
  const body = null
  const returnJson = true
  return requestApi.get(options(pathUrl, body, returnJson))
}

export const CategoriesApi = {
  initialData
}
