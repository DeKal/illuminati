import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { getPostTags, getEditedTags } from 'post/state/selectors'
import { editPostTags } from 'post/state/actions'
import Tags from 'post/components/Tags'
import { attributesToArray } from 'core/utils/misc'
import isEqual from 'lodash-es/isEqual'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1)
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  }
}))

const TagsWithStyle = props => {
  const classes = useStyles()
  return <Tags {...props} classes={classes} />
}

const mapStateToProps = state => {
  const editedTags = getEditedTags(state)
  const tags = getPostTags(state)
  return {
    allTags: attributesToArray(tags) || [],
    tags: attributesToArray(editedTags) || [],
    isEdited: Object.keys(editedTags).length > 0 && !isEqual(editedTags, tags)
  }
}

const mapDispatchToProps = {
  editPostTags
}

export default connect(mapStateToProps, mapDispatchToProps)(TagsWithStyle)
