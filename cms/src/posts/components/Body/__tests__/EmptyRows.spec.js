import * as React from 'react'
import { shallow } from 'enzyme'
import EmptyRows from '../EmptyRows'

describe('EmptyRows', () => {
  it('should render EmptyRows when postLength < rows per page', function() {
    const wrap = shallow(
      <EmptyRows page={0} rowsPerPage={20} postsLength={15} />
    )
    expect(wrap).toMatchSnapshot()
  })
  it('should render EmptyRows when postLength > rows per page', function() {
    const wrap = shallow(
      <EmptyRows page={0} rowsPerPage={20} postsLength={21} />
    )
    expect(wrap).toMatchSnapshot()
  })
})
