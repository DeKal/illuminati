import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import PropTypes from 'prop-types'
import { theme } from './theme'

const ThemeWrapper = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

ThemeWrapper.propTypes = {
  children: PropTypes.any
}
export default ThemeWrapper
