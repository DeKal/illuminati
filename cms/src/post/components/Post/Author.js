import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'post/components/TextField'

const Author = ({ isEdited, author, editPostAuthor }) => (
  <TextField
    label="Author"
    variant="outlined"
    value={author}
    fullWidth
    error={isEdited}
    onChange={event => editPostAuthor(event.target.value)}
  />
)

export default Author

Author.propTypes = {
  isEdited: PropTypes.bool,
  author: PropTypes.string,
  editPostAuthor: PropTypes.func
}
