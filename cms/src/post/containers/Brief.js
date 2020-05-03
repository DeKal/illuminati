import { connect } from 'react-redux'
import { getPostBrief, getEditedBrief } from 'post/state/selectors'
import { editPostBrief } from 'post/state/actions'
import Brief from 'post/components/Brief'

const mapStateToProps = state => {
  const editedBrief = getEditedBrief(state)
  const brief = getPostBrief(state)
  return {
    brief: editedBrief || '',
    isEdited: editedBrief !== brief
  }
}

const mapDispatchToProps = {
  editPostBrief
}

export default connect(mapStateToProps, mapDispatchToProps)(Brief)
