import * as React from 'react'
import { mountWithTheme } from 'core/utils/test-helper'
import FullScreenLoading from '../FullScreenLoading'

describe('FullScreenLoading', () => {
  it('should render with no error', function() {
    const wrap = mountWithTheme(<FullScreenLoading isLoading />)
    expect(wrap).toMatchSnapshot()
  })

  it('should not render with no isLoading', function() {
    const wrap = mountWithTheme(<FullScreenLoading />)
    expect(wrap).toMatchSnapshot()
  })
})
