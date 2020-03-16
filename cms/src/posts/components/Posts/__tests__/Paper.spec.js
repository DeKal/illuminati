import * as React from 'react'
import { mountWithTheme } from 'core/utils/test-helper'
import Paper from '../Paper'

describe('Paper', () => {
  it('should render with no error', function() {
    const wrap = mountWithTheme(<Paper />)
    expect(wrap).toMatchSnapshot()
  })
})
