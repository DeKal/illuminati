import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import DeleteIcon from '@material-ui/icons/Delete'

const SelectedToolbar = ({ classes, numSelected }) => (
  <Toolbar
    className={clsx(classes.root, {
      [classes.highlight]: numSelected
    })}
  >
    {numSelected ? (
      <Typography className={classes.title} color="inherit" variant="subtitle1">
        {numSelected} selected
      </Typography>
    ) : (
      <Typography className={classes.title} variant="h6">
        All Posts
      </Typography>
    )}

    {numSelected ? (
      <Tooltip title="Delete">
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    ) : null}
  </Toolbar>
)

SelectedToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  classes: PropTypes.shape({
    root: PropTypes.object,
    title: PropTypes.object,
    highlight: PropTypes.object
  })
}

export default SelectedToolbar
