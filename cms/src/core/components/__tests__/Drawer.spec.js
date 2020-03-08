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
    const wrap = shallow(<Drawer classes={classes} open />)
    expect(wrap).toMatchSnapshot()
  })

  it('should render Drawer when it closes', function() {
    const wrap = shallow(<Drawer classes={classes} open={false} />)
    expect(wrap).toMatchSnapshot()
  })
})
