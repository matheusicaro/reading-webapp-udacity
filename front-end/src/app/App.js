import React from 'react'

import { Route, Switch } from 'react-router'
import { ROUTES } from './constants'

const App = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME.path} component={ROUTES.HOME.page} />
      <Route exact path={`/:category`} component={ROUTES.CATEGORIES.page} />
      <Route exact path={`/:category/:post_id`} component={ROUTES.POST.page} />
      <Route component={ROUTES.NOT_FOUND.page} />
    </Switch>
  )
}

export default (App)
