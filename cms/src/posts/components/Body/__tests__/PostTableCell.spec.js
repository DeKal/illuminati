import * as React from 'react'
import { mountWithTheme } from 'core/utils/test-helper'
import PostTableCell from '../PostTableCell'

describe('PostTableCell', () => {
  it('should render with no error', function() {
    const wrap = mountWithTheme(<PostTableCell />)
    expect(wrap).toMatchSnapshot()
  })
})
