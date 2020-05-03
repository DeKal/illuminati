import { connect } from 'react-redux'
import FullScreenLoading from 'core/components/FullScreenLoading'
import { getIsAppLoading } from 'core/state/app/selectors'

const mapStateToProps = state => ({
  isLoading: getIsAppLoading(state)
})

export default connect(mapStateToProps)(FullScreenLoading)
