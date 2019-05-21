import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'react-router-redux'
import reducers from './services/reducers'

import thunk from 'redux-thunk'

export const history = createBrowserHistory()

const initialState = {}
const enhancers = []
const middlewares = [thunk, routerMiddleware(history)]

// DEVELOPER ENVIREMENT --------------------------------------------
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}
// -----------------------------------------------------------------

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
)

export default createStore(
  combineReducers(reducers),
  initialState,
  composedEnhancers
)
