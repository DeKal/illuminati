import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Container from 'core/components/page/Container'
import Dashboard from 'dashboard/components/Dashboard'
import User from 'user/components/User'

const PageSwitch = () => (
  <Container>
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route path="/user">
        <User />
      </Route>
    </Switch>
  </Container>
)

export default PageSwitch
