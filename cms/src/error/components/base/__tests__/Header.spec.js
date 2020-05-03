import * as React from 'react'
import { mountWithTheme } from 'core/utils/test-helper'
import Header from '../Header'

describe('Header', () => {
  it('should render correctly', function() {
    const wrap = mountWithTheme(<Header />)
    expect(wrap).toMatchSnapshot()
  })
})
