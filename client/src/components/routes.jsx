import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AuthRoutes from './auth/authroutes'

import React from 'react'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={AuthRoutes} />
      </Switch>
    </Router>
  )
}

export default Routes
