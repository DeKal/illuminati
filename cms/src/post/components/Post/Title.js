import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'post/components/TextField'

const Title = ({ isEdited, title, editPostTitle }) => (
  <TextField
    label="Post title"
    required
    variant="outlined"
    value={title}
    multiline
    rowsMax={2}
    fullWidth
    error={isEdited}
    onChange={event => editPostTitle(event.target.value)}
  />
)

export default Title

Title.propTypes = {
  isEdited: PropTypes.bool,
  title: PropTypes.string,
  editPostTitle: PropTypes.func
}
