import { connect } from 'react-redux'
import { getPostAuthor, getEditedAuthor } from 'post/state/selectors'
import { editPostAuthor } from 'post/state/actions'
import Author from 'post/components/Post/Author'

const mapStateToProps = state => {
  const editedAuthor = getEditedAuthor(state)
  const author = getPostAuthor(state)
  return {
    author: editedAuthor || '',
    isEdited: editedAuthor !== author
  }
}

const mapDispatchToProps = {
  editPostAuthor
}

export default connect(mapStateToProps, mapDispatchToProps)(Author)
