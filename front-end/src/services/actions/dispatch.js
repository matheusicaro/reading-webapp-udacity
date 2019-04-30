import { showLoading, hideLoading } from 'react-redux-loading'

export const dispatchApi = (dispatch, call, action) => {
  console.log('dispatch >> ', dispatch)
  console.log('call >> ', call)
  console.log('action >>', action)

  dispatch(showLoading())

  return call()
    .then(() => {
      dispatch(action())
      dispatch(hideLoading())
    })
}
