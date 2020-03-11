import * as React from 'react'

import SubTitle from '../SubTitle'
import { mountWithTheme } from 'core/utils/test-helper'

describe('GetStarted SubTitle', () => {
  it('should render SubTitle with no error', function() {
    const wrap = mountWithTheme(<SubTitle />)
    expect(wrap).toMatchSnapshot()
  })
})
