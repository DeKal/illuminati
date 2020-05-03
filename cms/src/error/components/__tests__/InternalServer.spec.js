import * as React from 'react'
import { shallow } from 'enzyme'
import InternalServer from '../InternalServer'

describe('InternalServer', () => {
  it('should render internal server error page correctly', function() {
    const wrap = shallow(<InternalServer />)
    expect(wrap).toMatchSnapshot()
  })
})
