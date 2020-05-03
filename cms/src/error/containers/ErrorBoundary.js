import { connect } from 'react-redux'
import ErrorBoundary from 'error/components/ErrorBoundary'
import { getAppError } from 'core/state/app/selectors'

const mapStateToProps = state => ({
  reduxError: getAppError(state)
})

export default connect(mapStateToProps)(ErrorBoundary)
