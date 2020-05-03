import * as React from 'react'
import { shallow } from 'enzyme'
import ErrorBoundary from '../ErrorBoundary'

describe('ErrorBoundary', () => {
  it('should render children content correctly', function() {
    const wrap = shallow(
      <ErrorBoundary>
        <div>Content</div>
      </ErrorBoundary>
    )
    expect(wrap).toMatchSnapshot()
  })

  it('should render error correctly', function() {
    const wrap = shallow(
      <ErrorBoundary reduxError={{ msg: 'Error' }}>
        <div>Content</div>
      </ErrorBoundary>
    )
    expect(wrap).toMatchSnapshot()
  })

  it('getDerivedStateFromError should work correctly', function() {
    const error = { code: 404, message: 'Error' }
    const errorState = ErrorBoundary.getDerivedStateFromError(error)
    expect(errorState).toMatchSnapshot()
  })
})
