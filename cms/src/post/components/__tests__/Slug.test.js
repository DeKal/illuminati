import * as React from 'react'
import { shallow } from 'enzyme'
import Slug from '../Slug'

describe('Slug', () => {
  it('should render Slug correctly', function() {
    const wrap = shallow(<Slug slug="slug" />)
    expect(wrap).toMatchSnapshot()
  })
})
