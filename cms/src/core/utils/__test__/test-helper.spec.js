import * as React from 'react'
import { shallowWithTheme, mountWithTheme } from '../test-helper'

describe('Test helper', () => {
  it('should render shallowWithTheme with no error', function() {
    const wrap = shallowWithTheme(<div />)
    expect(wrap).toMatchSnapshot()
  })
  it('should render mountWithTheme with no error', function() {
    const wrap = mountWithTheme(<div />)
    expect(wrap).toMatchSnapshot()
  })
})
