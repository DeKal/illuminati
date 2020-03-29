import { connect } from 'react-redux'
import { getPostTitle, getEditedTitle } from 'post/state/selectors'
import { editPostTitle } from 'post/state/actions'
import Title from 'post/components/Post/Title'

const mapStateToProps = state => {
  const editedTitle = getEditedTitle(state)
  const title = getPostTitle(state)
  return {
    title: editedTitle || '',
    isEdited: editedTitle !== title
  }
}

const mapDispatchToProps = {
  editPostTitle
}

export default connect(mapStateToProps, mapDispatchToProps)(Title)
