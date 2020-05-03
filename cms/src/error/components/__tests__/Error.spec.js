import * as React from 'react'
import { shallow } from 'enzyme'
import Error from '../Error'

describe('Error', () => {
  it('should render 404 error page correctly', function() {
    const error = {
      code: 404,
      message: '404 error'
    }
    const wrap = shallow(<Error error={error} />)
    expect(wrap).toMatchSnapshot()
  })

  it('should render 500 error page correctly', function() {
    const error = {
      code: 500,
      message: '500 error'
    }
    const wrap = shallow(<Error error={error} />)
    expect(wrap).toMatchSnapshot()
  })

  it('should render general error page correctly', function() {
    const error = { text: 'some general error' }
    const wrap = shallow(<Error error={error} />)
    expect(wrap).toMatchSnapshot()
  })
})
