import * as React from 'react'
import { shallow } from 'enzyme'
import General from '../General'

describe('General', () => {
  it('should render genral error page correctly', function() {
    const wrap = shallow(<General message="Error from script abc" />)
    expect(wrap).toMatchSnapshot()
  })
})
