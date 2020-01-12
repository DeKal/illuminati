import * as React from 'react'
import { shallow } from 'enzyme'
import App from 'app/App'

describe('App', () => {

  it('should render without throwing an error', function () {
    const wrap = shallow(<App />)
    expect(wrap).toMatchSnapshot()
  })

})