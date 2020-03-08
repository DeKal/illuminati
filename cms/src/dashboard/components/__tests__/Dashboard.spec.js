import * as React from 'react'
import { shallow } from 'enzyme'
import Dashboard from '../Dashboard'

describe('Dashboard', () => {
  it('should render Dashboard with no error', function() {
    const wrap = shallow(<Dashboard />)
    expect(wrap).toMatchSnapshot()
  })
})
