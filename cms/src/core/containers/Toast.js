import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Toast from 'core/components/Toast'
import {
  getIsShowToast,
  getIsSuccessToast,
  getToastMessage
} from 'core/state/app/selectors'
import { closeToast } from 'core/state/app/actions'

const useStyles = makeStyles(theme => ({
  anchorOriginTopCenter: {
    top: `${theme.navbarHeight + theme.spaces.xxxsmall}px`
  }
}))

const ToastWithStyle = props => <Toast classes={useStyles()} {...props} />

const mapStateToProps = state => ({
  isDisplayToast: getIsShowToast(state),
  success: getIsSuccessToast(state),
  message: getToastMessage(state)
})

const mapDispatchToProps = {
  closeToast
}

export default connect(mapStateToProps, mapDispatchToProps)(ToastWithStyle)
