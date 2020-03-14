import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Container from 'core/components/page/Container'
import Dashboard from 'dashboard/components/Dashboard'
import User from 'user/components/User'
import Posts from 'posts/components/Posts'
import { pages } from 'core/const/pages'

const PageSwitch = () => (
  <Container>
    <Switch>
      <Route exact path={pages.dashboard.url}>
        <Dashboard />
      </Route>
      <Route path={pages.profile.url}>
        <User />
      </Route>
      <Route path={pages.posts.url}>
        <Posts />
      </Route>
    </Switch>
  </Container>
)

export default PageSwitch
