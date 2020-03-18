import React from 'react'

import { lighten, makeStyles } from '@material-ui/core/styles'
import SelectedToolbar from 'posts/components/Posts/SelectedToolbar'

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1)
  },
  highlight: {
    color: theme.colors.primary,
    backgroundColor: lighten(theme.colors.primary, 0.85)
  },
  title: {
    flex: '1 1 100%'
  }
}))

const SelectedToolbarContainer = props => (
  <SelectedToolbar classes={useToolbarStyles()} {...props} />
)

export default SelectedToolbarContainer
