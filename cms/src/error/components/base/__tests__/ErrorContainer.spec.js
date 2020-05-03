import * as React from 'react'
import { mountWithTheme } from 'core/utils/test-helper'
import ErrorContainer from '../ErrorContainer'

describe('ErrorContainer', () => {
  it('should render correctly', function() {
    const wrap = mountWithTheme(<ErrorContainer />)
    expect(wrap).toMatchSnapshot()
  })
})
