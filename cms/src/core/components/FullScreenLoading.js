import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: theme.zIndex.modal,
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  bottom: {
    color: theme.colors.primaryBg,
    animationDuration: '550ms'
  }
}))

const FullScreenLoading = ({ isLoading }) => {
  const classes = useStyles()

  return (
    isLoading && (
      <div className={classes.root}>
        <CircularProgress
          size={52}
          thickness={4}
          className={classes.bottom}
          variant="indeterminate"
          disableShrink
        />
      </div>
    )
  )
}

export default FullScreenLoading

FullScreenLoading.propTypes = {
  isLoading: PropTypes.bool
}
