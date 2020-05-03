import * as React from 'react'
import { shallow } from 'enzyme'
import Brief from '../Brief'

describe('Brief', () => {
  it('should render Brief correctly', function() {
    const wrap = shallow(<Brief brief="brief" />)
    expect(wrap).toMatchSnapshot()
  })
})
