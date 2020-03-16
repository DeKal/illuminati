import * as React from 'react'
import { mountWithTheme } from 'core/utils/test-helper'
import Table from '../Table'

describe('Paper', () => {
  it('should render with no error', function() {
    const wrap = mountWithTheme(<Table />)
    expect(wrap).toMatchSnapshot()
  })
})
