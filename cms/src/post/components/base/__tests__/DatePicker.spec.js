import * as React from 'react'
import { shallowWithTheme } from 'core/utils/test-helper'
import Datepicker from '../Datepicker'

describe('Datepicker', () => {
  it('should render correctly', function() {
    const wrap = shallowWithTheme(<Datepicker />)
    expect(wrap).toMatchSnapshot()
  })
})
