import React from 'react'
import { styled } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from 'core/components/Container'
import Title from './GetStarted/Title'
import SubTitle from './GetStarted/SubTitle'
import Item from './GetStarted/Item'
import ItemTitle from './GetStarted/ItemTitle'
import { Link } from 'react-router-dom'
import { pages, THEME_URL } from 'core/const/pages'

import PostAdd from '@material-ui/icons/PostAdd'
import Visibility from '@material-ui/icons/Visibility'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import SettingsIcon from '@material-ui/icons/Settings'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'

const GetStarted = () => (
  <Container>
    <Title>Welcome to illuminati!</Title>
    <SubTitle>We’ve assembled some things to get you started:</SubTitle>
    <Grid container spacing={4}>
      <Grid item md={4} xl={3}>
        <Item>
          <ItemTitle>Get Started</ItemTitle>
          <Line>
            <SettingsIcon style={{ marginRight: '5px' }} />
            <BreakLink to={pages.settings.url}>Open Your Settings</BreakLink>
          </Line>
          <Line>
            <PhotoLibraryIcon style={{ marginRight: '5px' }} />
            <BreakLink to={THEME_URL}>Change your theme</BreakLink>
          </Line>
        </Item>
      </Grid>
      <Grid item md={4} xl={3}>
        <Item>
          <ItemTitle>Next steps</ItemTitle>
          <Line>
            <PostAdd style={{ marginRight: '5px' }} />
            <BreakLink to={pages.post.url}>
              Write your first blog post
            </BreakLink>
          </Line>
          <Line>
            <Visibility style={{ marginRight: '5px' }} />
            <a href={'https://phatho-folio.now.sh//blogs'}>View your site</a>
          </Line>
        </Item>
      </Grid>
      <Grid item md={4} lg={3}>
        <Item>
          <ItemTitle>More actions</ItemTitle>
          <Line>
            <LibraryBooksIcon style={{ marginRight: '5px' }} />
            <BreakLink to={pages.posts.url}>Manage Posts</BreakLink>
          </Line>

          <Line>
            <AccountBoxIcon style={{ marginRight: '5px' }} />
            <BreakLink to={pages.profile.url}>Manage Profile</BreakLink>
          </Line>
        </Item>
      </Grid>
    </Grid>
  </Container>
)

export default GetStarted

const Line = styled('div')({
  margin: '8px 0',
  display: 'flex',
  alignItems: 'center'
})

const BreakLink = styled(Link)({
  overflowWrap: 'break-word'
})
