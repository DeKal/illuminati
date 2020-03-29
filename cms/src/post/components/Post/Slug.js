import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'post/components/TextField'

const Slug = ({ isEdited, slug, editPostSlug }) => (
  <TextField
    label="Slug"
    required
    variant="outlined"
    value={slug}
    fullWidth
    error={isEdited}
    onChange={event => editPostSlug(event.target.value)}
  />
)

export default Slug

Slug.propTypes = {
  isEdited: PropTypes.bool,
  slug: PropTypes.string,
  editPostSlug: PropTypes.func
}
