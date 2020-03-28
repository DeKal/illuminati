import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2)
    },
    height: theme.heightWithoutNavbar,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottom: {
    color: theme.colors.primary,
    animationDuration: '550ms'
  }
}))

const Loading = () => {
  const classes = useStyles()

  return (
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
}

export default Loading
