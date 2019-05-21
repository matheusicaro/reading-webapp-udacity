import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'

import App from './app/App'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { theme } from './theme'
import './styles.css'

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={createMuiTheme(theme)}>
        <App />
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
)
