import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch } from 'react-router'
import { connect } from 'react-redux'

import { Home, Error } from './pages'
import { Posts } from '../services/actions'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount () {
    // TODO: O SEGREDO ESTÁ NA CHAMADA QUE É PASSADA, TEM QUE TER O DISPATCH
    // CONSULTAR CODIGO ANTIGO PARA COMPARAR E ENTEDER QUANDO O DISPATCH CHEGA, E ONDE

    // Iniciar datas ou chamadas de API quando iniciar o App
    this.props.dispatch(Posts.initialData())
  }

  render () {
    const { loading } = this.props

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          { !loading && (
            <Switch>
              <Route exact path='/' component={Home} />
              <Route component={Error} />
            </Switch>
          )}
        </Fragment>
      </Router >
    )
  }
}

function mapStateToProps ({ loading }) {
  return {
    loading: loading || false
  }
}

export default connect(mapStateToProps)(App)
