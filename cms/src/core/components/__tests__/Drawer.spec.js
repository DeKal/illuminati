import * as React from 'react'
import { shallow } from 'enzyme'
import Drawer from '../Drawer'

const classes = {
  drawer: '',
  drawerPaper: '',
  drawerHeader: ''
}

describe('Drawer', () => {
  it('should render Drawer when it opens', function() {
    const history = {
      location: {
        pathname: '/'
      }
    }
    const wrap = shallow(<Drawer classes={classes} open history={history} />)
    expect(wrap).toMatchSnapshot()
  })

  it('should render Drawer when it closes', function() {
    const history = {
      location: {
        pathname: '/'
      }
    }
    const wrap = shallow(
      <Drawer classes={classes} open={false} history={history} />
    )
    expect(wrap).toMatchSnapshot()
  })

  it('click on Drawer Dashboard should call history push', function() {
    const history = {
      location: {
        pathname: '/profile'
      },
      push: jest.fn()
    }
    const wrap = shallow(<Drawer classes={classes} open history={history} />)
    wrap.find('[data-test-id="drawer-item-dashboard"]').simulate('click')
    expect(history.push.mock.calls.length).toBe(1)
    expect(history.push.mock.calls[0][0]).toBe('/')
  })
})
