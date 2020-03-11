import * as React from 'react'

import Button from '../Button'
import { mountWithTheme } from 'core/utils/test-helper'

describe('GetStarted Button', () => {
  it('should render Button with no error', function() {
    const wrap = mountWithTheme(<Button />)
    expect(wrap).toMatchSnapshot()
  })
})
