import * as React from 'react'
import { mountWithTheme } from 'core/utils/test-helper'
import TextField from '../TextField'

describe('TextField', () => {
  it('should render correctly', function() {
    const wrap = mountWithTheme(<TextField />)
    expect(wrap).toMatchSnapshot()
  })
})
