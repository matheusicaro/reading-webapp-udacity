import { replace } from 'react-router-redux'

export const Router = dispatch => ({
  navigate: route => dispatch(replace(route))
})
