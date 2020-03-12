import * as React from 'react'

import ItemTitle from '../ItemTitle'
import { mountWithTheme } from 'core/utils/test-helper'

describe('GetStarted ItemTitle', () => {
  it('should render ItemTitle with no error', function() {
    const wrap = mountWithTheme(<ItemTitle />)
    expect(wrap).toMatchSnapshot()
  })
})
