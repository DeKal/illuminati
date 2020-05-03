import React, { Fragment } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import NavBar from 'core/containers/NavBar'
import Drawer from 'core/containers/Drawer'
import PageSwitch from 'core/components/PageSwitch'
import Loading from 'core/containers/FullScreenLoading'
import Toast from 'core/containers/Toast'

const App = ({ classes, open }) => (
  <Fragment>
    <Loading />
    <Toast />
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
