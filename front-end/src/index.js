import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app/App'
import reducer from './services/reducers'
import middleware from './services/middleware'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
