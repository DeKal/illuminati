import { connect } from 'react-redux'
import { getPostSlug, getEditedSlug } from 'post/state/selectors'
import { editPostSlug } from 'post/state/actions'
import Slug from 'post/components/Slug'

const mapStateToProps = state => {
  const editedSlug = getEditedSlug(state)
  const slug = getPostSlug(state)
  return {
    slug: editedSlug || '',
    isEdited: editedSlug !== slug
  }
}

const mapDispatchToProps = {
  editPostSlug
}

export default connect(mapStateToProps, mapDispatchToProps)(Slug)
