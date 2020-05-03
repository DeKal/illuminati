import React from 'react'
import PropTypes from 'prop-types'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const Toast = ({ classes, isDisplayToast, success, message, closeToast }) => {
  const handleClose = (_, reason) => {
    if (reason === 'clickaway') {
      return
    }
    closeToast()
  }

  return (
    <Snackbar
      className={classes.anchorOriginTopCenter}
      open={isDisplayToast}
      autoHideDuration={1000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
    >
      <Alert onClose={handleClose} severity={success ? 'success' : 'error'}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default Toast

Toast.propTypes = {
  classes: PropTypes.object,
  success: PropTypes.bool,
  message: PropTypes.string,
  isDisplayToast: PropTypes.bool,
  closeToast: PropTypes.func
}
