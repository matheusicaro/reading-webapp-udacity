import React from 'react'

import { Route, Switch } from 'react-router'
import { ROUTES } from './constants'

const App = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME.path} component={ROUTES.HOME.page} />
      {/* TODO: Adicionar nota para rotas com [:id] */}
      <Route exact path='/post/:id' component={ROUTES.POST.page} />
      {/* <Route exact path={Routes.CREATEPRODUCT.path} component={Routes.CREATEPRODUCT.scene} /> */}
    </Switch>
  )
}

export default (App)
