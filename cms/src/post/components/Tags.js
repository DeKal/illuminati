import React from 'react'

import PropTypes from 'prop-types'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Chip from '@material-ui/core/Chip'
import { arrayToAttributes } from 'core/utils/misc'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}

const Tags = ({ isEdited, allTags, tags, editPostTags, classes }) => {
  return (
    <div className={classes.formControl}>
      <InputLabel>Tags</InputLabel>
      <Select
        multiple
        fullWidth
        value={tags}
        onChange={event => editPostTags(arrayToAttributes(event.target.value))}
        error={isEdited}
        input={<Input value={[]} />}
        renderValue={selected => renderSelectedChip(classes, selected)}
        MenuProps={MenuProps}
      >
        {allTags.map(tag => (
          <MenuItem key={tag} value={tag}>
            {tag}
          </MenuItem>
        ))}
      </Select>
    </div>
  )
}

export const renderSelectedChip = (classes, selected) => (
  <div className={classes.chips}>
    {selected.map(value => (
      <Chip key={value} label={value} className={classes.chip} />
    ))}
  </div>
)

export default Tags

Tags.propTypes = {
  isEdited: PropTypes.bool,
  allTags: PropTypes.array,
  tags: PropTypes.array,
  editPostTags: PropTypes.func,
  classes: PropTypes.shape({
    formControl: PropTypes.string,
    chip: PropTypes.string,
    chips: PropTypes.string
  })
}
