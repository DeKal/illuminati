import * as React from 'react'
import { shallow } from 'enzyme'
import NotFound from '../NotFound'

describe('NotFound', () => {
  it('should render not found page correctly', function() {
    const wrap = shallow(<NotFound message="Pages not found" />)
    expect(wrap).toMatchSnapshot()
  })
})
