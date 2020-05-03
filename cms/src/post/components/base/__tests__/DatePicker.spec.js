import * as React from 'react'
import { shallowWithTheme } from 'core/utils/test-helper'
import DatePicker from 'post/components/base/DatePicker'

describe('DatePicker', () => {
  it('should render correctly', function() {
    const wrap = shallowWithTheme(<DatePicker />)
    expect(wrap).toMatchSnapshot()
  })
})
