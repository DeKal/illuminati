import * as React from 'react'
import { mountWithTheme } from 'core/utils/test-helper'
import Time from '../Time'

describe('Time', () => {
  it('should render correctly', function() {
    const wrap = mountWithTheme(<Time time={1588993682} />)
    expect(wrap).toMatchSnapshot()
  })
})
