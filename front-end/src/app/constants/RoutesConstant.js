import { HomePage, PostPage } from '../pages'

export const ROUTES = {
  NAVIGATE: 'NAVIGATE',
  HOME: {
    path: `/`,
    title: 'Home',
    page: HomePage
  },
  POST: {
    title: 'Post',
    path: `/post`,
    page: PostPage
  }
}
