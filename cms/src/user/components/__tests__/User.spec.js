import * as React from 'react'
import { shallow } from 'enzyme'
import User from '../User'

describe('User', () => {
  it('should render User with no error', function() {
    const wrap = shallow(<User />)
    expect(wrap).toMatchSnapshot()
  })
})
