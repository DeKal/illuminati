import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import NavBar from 'core/components/NavBar'

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spaces.gutter
  },
  title: {
    flexGrow: 1,
    float: 'left',
    fontFamily: '"Montserrat", sans-serif',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '18px',
    letterSpacing: '1px',
    paddingLeft: '0px',
    textTransform: 'uppercase'
  },
  navbar: {
    backgroundColor: '#0083c1'
  },
  icon: {
    padding: '16px'
  }
}))

const NavBarContainer = props => <NavBar classes={useStyles()} {...props} />

export default NavBarContainer
