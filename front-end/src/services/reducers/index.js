import { routerReducer } from 'react-router-redux'
import { posts } from './PostsReducer'
import { categories } from './CategoriesReducer'
import { comments } from './CommentsReducer'

export default {
  router: routerReducer,
  posts,
  categories,
  comments
}
