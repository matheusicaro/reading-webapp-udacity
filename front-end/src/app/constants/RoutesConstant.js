import { HomePage, PostPage, CategoriesPage, NotFound } from '../pages'

export const ROUTES = {
  NAVIGATE: 'NAVIGATE',
  HOME: {
    path: '/',
    title: 'Home',
    page: HomePage
  },
  POST: {
    title: 'Post',
    path: '/post',
    page: PostPage
  },
  CATEGORIES: {
    title: 'Categories',
    path: '/categories',
    page: CategoriesPage
  },
  NOT_FOUND: {
    title: '404',
    path: '/error/search-not-found/404',
    page: NotFound
  },
  returnPathToPostId: (postId, category) => `/${category}/${postId}`
}
