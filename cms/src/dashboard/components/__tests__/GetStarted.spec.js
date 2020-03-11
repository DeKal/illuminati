import * as React from 'react'
import { shallow } from 'enzyme'
import GetStarted from '../GetStarted'

describe('GetStarted', () => {
  it('should render GetStarted with no error', function() {
    const wrap = shallow(<GetStarted />)
    expect(wrap).toMatchSnapshot()
  })
})
