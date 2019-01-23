// IMPORT API EXTERNAL
import { getInitialData } from '../app/api/postApi'

// IMPORT LOADING-REDUX
import { showLoading, hideLoading } from 'react-redux-loading'

const USER = 'matheus'

export const RECEIVE_DATA = 'RECEIVE_DATA'

function receiveData(posts) {
  return {
    type: RECEIVE_DATA,
    posts
  }
}



export function handleInitialData() {

  return (dispatch) => {

    dispatch(showLoading())

    return getInitialData(USER)
      .then( ({posts}) => {

        dispatch(receiveData(posts))

        dispatch(hideLoading())
      })
  }
}
/*
*         INITAL DATE
*
*   Initial Date serve para carregar os dados iniciais da aplicação,
*
*   Neste caso estou carregando "Users" atraves do retorno da promise
*
*   da API externa, onde poderia tambem carregar "Tweets" mas é recomenado
*
*   carregar em arquivos diferentes.
*
*/