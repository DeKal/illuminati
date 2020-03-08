import * as React from 'react'
import { shallow } from 'enzyme'
import App from 'core/components/App'

const classes = {
  content: 'open',
  contentShift: 'shift'
}
describe('App', () => {
  it('should render App with open drawer', function() {
    const wrap = shallow(<App classes={classes} open />)
    expect(wrap).toMatchSnapshot()
  })

  it('should render App with close drawer', function() {
    const wrap = shallow(<App classes={classes} open={false} />)
    expect(wrap).toMatchSnapshot()
  })
})
