import * as React from 'react'
import { shallow } from 'enzyme'
import SelectedToolbar from '../SelectedToolbar'

const classes = {
  root: 'root',
  highlight: 'highlight',
  title: 'title'
}

describe('SelectedToolbar', () => {
  it('should render with 1 item selected', function() {
    const wrap = shallow(<SelectedToolbar classes={classes} numSelected={1} />)
    expect(wrap).toMatchSnapshot()
  })

  it('should render with no item selected', function() {
    const wrap = shallow(<SelectedToolbar classes={classes} numSelected={0} />)
    expect(wrap).toMatchSnapshot()
  })
})
