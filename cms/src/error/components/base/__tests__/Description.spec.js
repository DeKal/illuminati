import * as React from 'react'
import { mountWithTheme } from 'core/utils/test-helper'
import Description from '../Description'

describe('Description', () => {
  it('should render correctly', function() {
    const wrap = mountWithTheme(<Description />)
    expect(wrap).toMatchSnapshot()
  })
})
