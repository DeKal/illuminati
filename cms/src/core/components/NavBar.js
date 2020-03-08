import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Badge from '@material-ui/core/Badge'
import AccountCircle from '@material-ui/icons/AccountCircle'
import NotificationsIcon from '@material-ui/icons/Notifications'

const NavBar = ({ classes, history, open, openDrawer, closeDrawer }) => {
  return (
    <Container>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            data-test-id="navbar-menu"
            onClick={() => (open ? closeDrawer() : openDrawer())}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h1"
            data-test-id="navbar-title"
            className={classes.title}
            onClick={() => {
              history.push('/')
            }}
          >
            Dashboard
          </Typography>
          <div>
            <IconButton
              aria-label="show 17 new notifications"
              color="inherit"
              className={classes.icon}
            >
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              data-test-id="navbar-user-info"
              className={classes.icon}
              onClick={() => {
                history.push('/user')
              }}
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Container>
  )
}

export default NavBar

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  open: PropTypes.bool,
  openDrawer: PropTypes.func,
  closeDrawer: PropTypes.func
}

const Container = styled('div')({
  flexGrow: 1
})
