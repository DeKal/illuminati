import * as React from 'react'
import { shallow } from 'enzyme'
import NavBar from '../NavBar'

const classes = {
  navbar: '',
  menuButton: '',
  icon: ''
}

describe('NavBar', () => {
  it('should render NavBar when it opens', function() {
    const wrap = shallow(<NavBar classes={classes} open />)
    expect(wrap).toMatchSnapshot()
  })

  it('should render NavBar when it closes', function() {
    const wrap = shallow(<NavBar classes={classes} open={false} />)
    expect(wrap).toMatchSnapshot()
  })

  it('click on menu should call openDrawer when it closes', function() {
    const openDrawer = jest.fn()
    const wrap = shallow(
      <NavBar classes={classes} open={false} openDrawer={openDrawer} />
    )
    wrap.find('[data-test-id="navbar-menu"]').simulate('click')
    expect(openDrawer.mock.calls.length).toBe(1)
  })

  it('click on menu should call closeDrawer when it opens', function() {
    const closeDrawer = jest.fn()
    const wrap = shallow(
      <NavBar classes={classes} open closeDrawer={closeDrawer} />
    )
    wrap.find('[data-test-id="navbar-menu"]').simulate('click')
    expect(closeDrawer.mock.calls.length).toBe(1)
  })

  it('click on navbar header should link to main page', function() {
    const history = {
      push: jest.fn()
    }
    const wrap = shallow(<NavBar classes={classes} open history={history} />)
    wrap.find('[data-test-id="navbar-title"]').simulate('click')
    expect(history.push.mock.calls.length).toBe(1)
    expect(history.push.mock.calls[0][0]).toBe('/')
  })

  it('click on navbar user icon should link to user page', function() {
    const history = {
      push: jest.fn()
    }
    const wrap = shallow(<NavBar classes={classes} open history={history} />)
    wrap.find('[data-test-id="navbar-user-info"]').simulate('click')
    expect(history.push.mock.calls.length).toBe(1)
    expect(history.push.mock.calls[0][0]).toBe('/user')
  })
})
