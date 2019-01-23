import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import { posts } from './initialDate'

export default combineReducers({
  loadingBar: loadingBarReducer,
  posts
})

/*
*         REDUCER
*
*   Aqui é repassado os reducers que vao adicionar à Store
*
*   Cada reducer será resposavel por execultar uma ação no State
*
*   da  Store.
*
*/