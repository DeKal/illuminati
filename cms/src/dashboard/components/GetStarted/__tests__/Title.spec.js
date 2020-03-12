import * as React from 'react'

import Title from '../Title'
import { mountWithTheme } from 'core/utils/test-helper'

describe('GetStarted Title', () => {
  it('should render Title with no error', function() {
    const wrap = mountWithTheme(<Title />)
    expect(wrap).toMatchSnapshot()
  })
})
