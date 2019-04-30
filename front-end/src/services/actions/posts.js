import { POSTS } from '../uteis/constants'
import { InitialData as getInitialData } from '../../app/api'
import { dispatchApi } from '../actions/dispatch'

const receiveData = (posts) => {
  return {
    type: POSTS.ACTIONS.INITIAL_DATA,
    posts
  }
}

// TODO: O SEGREDO ESTÁ NA CHAMADA QUE É PASSADA, TEM QUE TER O DISPATCH
// CONSULTAR CODIGO ANTIGO PARA COMPARAR E ENTEDER QUANDO O DISPATCH CHEGA, E ONDE
const initialData = (dispatch) => dispatchApi(dispatch, getInitialData, receiveData)

export const Posts = {
  initialData
}
