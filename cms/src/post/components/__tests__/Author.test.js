import * as React from 'react'
import { shallow } from 'enzyme'
import Author from '../Author'

describe('Author', () => {
  it('should render Author correctly', function() {
    const wrap = shallow(<Author author="author" />)
    expect(wrap).toMatchSnapshot()
  })
})
