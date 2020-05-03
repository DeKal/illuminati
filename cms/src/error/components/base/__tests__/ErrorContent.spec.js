import * as React from 'react'
import { mountWithTheme } from 'core/utils/test-helper'
import ErrorContent from '../ErrorContent'

describe('ErrorContent', () => {
  it('should render correctly', function() {
    const wrap = mountWithTheme(<ErrorContent />)
    expect(wrap).toMatchSnapshot()
  })
})
