import * as React from 'react'
import { mountWithTheme } from 'core/utils/test-helper'
import Grid from '../Grid'

describe('Grid', () => {
  it('should render correctly', function() {
    const wrap = mountWithTheme(<Grid />)
    expect(wrap).toMatchSnapshot()
  })
})
