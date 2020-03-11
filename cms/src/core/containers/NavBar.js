import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import NavBar from 'core/components/NavBar'
import { openDrawer, closeDrawer } from 'core/state/drawer/actions'

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
    height: `${theme.navbarHeight}px`,
    backgroundColor: theme.colors.primary
  },
  icon: {
    padding: theme.spaces.gutter
  }
}))

const NavBarContainer = props => <NavBar classes={useStyles()} {...props} />
const NavBarWithRouter = withRouter(NavBarContainer)

const mapStateToProps = state => ({
  open: state.drawer.open
})

const mapDispatchToProps = {
  openDrawer,
  closeDrawer
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarWithRouter)
