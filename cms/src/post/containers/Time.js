import { connect } from 'react-redux'
import parse from 'date-fns/parse'
import { getPostTime, getEditedTime } from 'post/state/selectors'
import { editPostTime } from 'post/state/actions'
import Time from 'post/components/Post/Time'

const mapStateToProps = state => {
  const editedTime = getEditedTime(state)
  const time = getPostTime(state)
  let displayTime = editedTime || ''
  if (displayTime) {
    displayTime = parse(displayTime, 'dd/MM/yyyy', new Date())
  } else {
    displayTime = Date.now()
  }
  return {
    time: displayTime,
    isEdited: editedTime && editedTime !== time
  }
}

const mapDispatchToProps = {
  editPostTime
}

export default connect(mapStateToProps, mapDispatchToProps)(Time)
