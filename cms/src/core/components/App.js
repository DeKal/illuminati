import React, { Fragment } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import NavBar from 'core/containers/NavBar'
import Drawer from 'core/containers/Drawer'
import PageSwitch from 'core/components/PageSwitch'

const App = ({ classes, open }) => (
  <Fragment>
    <Drawer />
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: open
      })}
    >
      <NavBar />
      <PageSwitch />
    </main>
  </Fragment>
)

export default App

App.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool
}
