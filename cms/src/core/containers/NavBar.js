import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import NavBar from 'core/components/NavBar'
import { withRouter } from 'react-router'

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spaces.gutter
  },
  title: {
    flexGrow: 1,
    float: 'left',
    fontWeight: 'bold',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontSize: theme.fontSizes.XL,
    fontFamily: theme.fonts.montSerrat,
    color: theme.colors.navTitle
  },
  navbar: {
    backgroundColor: theme.colors.navBg
  },
  icon: {
    padding: theme.spaces.gutter
  }
}))

const NavBarContainer = props => <NavBar classes={useStyles()} {...props} />

export default withRouter(NavBarContainer)
