import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'post/components/TextField'

const Brief = ({ isEdited, brief, editPostBrief }) => (
  <TextField
    label="Post Brief"
    required
    variant="outlined"
    value={brief}
    multiline
    rows={6}
    rowsMax={8}
    fullWidth
    error={isEdited}
    onChange={event => editPostBrief(event.target.value)}
  />
)

export default Brief

Brief.propTypes = {
  isEdited: PropTypes.bool,
  brief: PropTypes.string,
  editPostBrief: PropTypes.func
}
