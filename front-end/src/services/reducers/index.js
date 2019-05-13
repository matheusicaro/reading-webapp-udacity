import { routerReducer } from 'react-router-redux'
import { posts } from './PostsReducer'
import { categories } from './CategoriesReducer'

export default {
  router: routerReducer,
  posts,
  categories
}
