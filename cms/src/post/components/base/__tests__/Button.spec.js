import * as React from 'react'
import { mountWithTheme } from 'core/utils/test-helper'
import Button from '../Button'

describe('Button', () => {
  it('should render Button correctly', function() {
    const wrap = mountWithTheme(<Button />)
    expect(wrap).toMatchSnapshot()
  })
})
