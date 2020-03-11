import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import App from 'core/components/App'

const useStyles = makeStyles(theme => ({
  content: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: 0,
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: theme.drawerWidth
  }
}))

const AppContainer = props => <App classes={useStyles()} {...props} />

const mapStateToProps = state => ({
  open: state.drawer.open
})

export default connect(mapStateToProps)(AppContainer)
