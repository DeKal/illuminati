import * as React from 'react'

import Container from '../Container'
import { mountWithTheme } from 'core/utils/test-helper'

describe('GetStarted Container', () => {
  it('should render Container with no error', function() {
    const wrap = mountWithTheme(<Container />)
    expect(wrap).toMatchSnapshot()
  })
})
