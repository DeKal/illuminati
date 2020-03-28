import * as React from 'react'

import Loading from '../Loading'
import { mountWithTheme } from 'core/utils/test-helper'

describe('GetStarted Container', () => {
  it('should render Container with no error', function() {
    const wrap = mountWithTheme(<Loading />)
    expect(wrap).toMatchSnapshot()
  })
})
