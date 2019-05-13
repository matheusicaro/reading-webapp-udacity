import { HomePage, ErrorPage } from '../pages'

export const ROUTES = {
  HOME: {
    path: `/`,
    title: 'Home',
    page: HomePage
  },
  CATEGORY: {
    path: `/cacacaca`,
    title: 'Categories',
    page: ErrorPage
  }
  //   CREATEPRODUCT: {
  //     path: `/create-product`,
  //     title: 'Create Product',
  //     scene: CreateProductScene,
  //   },
}
