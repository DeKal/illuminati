import * as React from 'react'
import { shallow } from 'enzyme'
import Title from '../Title'

describe('Title', () => {
  it('should render Title correctly', function() {
    const wrap = shallow(<Title title="title" />)
    expect(wrap).toMatchSnapshot()
  })
})
