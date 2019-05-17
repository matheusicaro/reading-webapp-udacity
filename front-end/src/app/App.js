import React from 'react'

import { Route, Switch } from 'react-router'
import { ROUTES } from './constants'

const App = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME.path} component={ROUTES.HOME.page} />
      <Route exact path={`${ROUTES.POST.path}/:id`} component={ROUTES.POST.page} />
      <Route exact path={`${ROUTES.CATEGORIES.path}/:category`} component={ROUTES.CATEGORIES.page} />
    </Switch>
  )
}

export default (App)
