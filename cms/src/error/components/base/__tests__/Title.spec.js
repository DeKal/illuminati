import * as React from 'react'
import { mountWithTheme } from 'core/utils/test-helper'
import Title from '../Title'

describe('Title', () => {
  it('should render correctly', function() {
    const wrap = mountWithTheme(<Title />)
    expect(wrap).toMatchSnapshot()
  })
})
