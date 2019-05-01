import React from 'react'

import { Route, Switch } from 'react-router'
import { ROUTES } from './uteis/constants'

const App = () => (
  <Switch>
    <Route exact path={ROUTES.HOME.path} component={ROUTES.HOME.scene} />
    {/* <Route exact path={Routes.LOGIN.path} component={Routes.LOGIN.scene} /> */}
    {/* <Route exact path={Routes.CREATEPRODUCT.path} component={Routes.CREATEPRODUCT.scene} /> */}
  </Switch>
)

export default (App)
