import HomeScene from '../../scenes/home/Home.container'
// import HomeScene from '../../scenes/home'

import { replace } from 'react-router-redux'

export const Router = dispatch => ({
  navigate: route => dispatch(replace(route))
})

export const ROUTES = {
  HOME: {
    path: `/`,
    title: 'Home',
    scene: HomeScene
  }
  //   LOGIN: {
  //     path: `/login`,
  //     title: 'Login',
  //     scene: LoginScene,
  //   },
  //   CREATEPRODUCT: {
  //     path: `/create-product`,
  //     title: 'Create Product',
  //     scene: CreateProductScene,
  //   },
}
