import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Container from 'core/components/page/Container'
import Dashboard from 'core/async-components/Dashboard'
import User from 'core/async-components/User'
import Posts from 'core/async-components/Posts'
import Post from 'core/async-components/Post'
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
      <Route exact path={pages.posts.url}>
        <Posts />
      </Route>
      <Route path={`${pages.post.url}:slug`}>
        <Post />
      </Route>
    </Switch>
  </Container>
)

export default PageSwitch
