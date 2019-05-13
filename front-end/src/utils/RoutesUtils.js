import { replace } from 'react-router-redux'

const Router = dispatch => ({
  navigate: route => dispatch(replace(route))
})

export const RouterUtils = {
  Router
}
