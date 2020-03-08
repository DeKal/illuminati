import * as React from 'react'
import { shallow } from 'enzyme'
import PageSwitch from '../PageSwitch'

describe('PageSwitch', () => {
  it('should render PageSwitch with no error', function() {
    const wrap = shallow(<PageSwitch />)
    expect(wrap).toMatchSnapshot()
  })
})
