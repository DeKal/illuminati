import { connect } from 'react-redux'
import { getEditedContent } from 'post/state/selectors'
import { editPostContent } from 'post/state/actions'
import Content from 'post/components/Post/Content'

const mapStateToProps = state => {
  const editedContent = getEditedContent(state)
  return {
    content: editedContent || ''
  }
}

const mapDispatchToProps = {
  editPostContent
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
