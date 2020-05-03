import React from 'react'
import PropTypes from 'prop-types'
import Error from 'error/components/Error'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { error, hasError: true }
  }

  render() {
    if (this.state.hasError || this.props.reduxError) {
      // You can render any custom fallback UI
      return <Error error={this.props.reduxError || this.state.error} />
    }

    return this.props.children
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.any,
  reduxError: PropTypes.object
}

export default ErrorBoundary
