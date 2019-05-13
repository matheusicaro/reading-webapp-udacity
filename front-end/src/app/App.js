import React from 'react'

import { Route, Switch } from 'react-router'
import { ROUTES } from './constants'

const App = () => (
  <Switch>
    <Route exact path={ROUTES.HOME.path} component={ROUTES.HOME.page} />
    <Route exact path={ROUTES.CATEGORY.path} component={ROUTES.CATEGORY.page} />
    {/* <Route exact path={Routes.CREATEPRODUCT.path} component={Routes.CREATEPRODUCT.scene} /> */}
  </Switch>
)

export default (App)
