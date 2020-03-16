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
      <React.Fragment>
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
        >
          {numSelected} selected
        </Typography>
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </React.Fragment>
    ) : (
      <Typography className={classes.title} variant="h6">
        All Posts
      </Typography>
    )}
  </Toolbar>
)

SelectedToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string,
    title: PropTypes.string,
    highlight: PropTypes.string
  })
}

export default SelectedToolbar
