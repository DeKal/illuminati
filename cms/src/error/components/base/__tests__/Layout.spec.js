import * as React from 'react'
import { shallow } from 'enzyme'
import Layout from '../Layout'

describe('Layout', () => {
  it('should render correctly', function() {
    const wrap = shallow(
      <Layout
        title="Error"
        description="Internal server error"
        detail="Error at line xxx"
      />
    )
    expect(wrap).toMatchSnapshot()
  })
})
