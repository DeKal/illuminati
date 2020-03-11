import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Drawer from 'core/components/Drawer'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: theme.drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: theme.drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    justifyContent: 'center',
    textTransform: 'uppercase',
    fontFamily: theme.fonts.montSerrat,
    color: theme.colors.navTitle,
    backgroundColor: theme.colors.darkBlue,
    fontSize: theme.fontSizes.XL,
    lineHeight: theme.navBarHeight,
    fontWeight: 'bold',
    letterSpacing: '2px',
    boxShadow:
      '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    ...theme.mixins.toolbar
  },
  highLightListItem: {
    borderLeft: `6px ${theme.colors.highlight} solid`
  },
  listItem: {
    paddingLeft: '22px',
    '&:hover': {
      paddingLeft: '16px',
      borderLeft: `6px ${theme.colors.highlight} solid`
    }
  }
}))

const DrawerContainer = props => <Drawer classes={useStyles()} {...props} />
const DrawerWithRouter = withRouter(DrawerContainer)

const mapStateToProps = state => ({
  open: state.drawer.open
})

export default connect(mapStateToProps)(DrawerWithRouter)
