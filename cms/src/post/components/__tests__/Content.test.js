import * as React from 'react'
import { shallow } from 'enzyme'
import Content from '../Content'

describe('Content', () => {
  it('should render Content correctly', function() {
    const wrap = shallow(<Content content="content" />)
    expect(wrap).toMatchSnapshot()
  })
})
