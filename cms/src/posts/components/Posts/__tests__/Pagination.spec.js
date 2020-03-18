import * as React from 'react'
import { shallow, mount } from 'enzyme'
import Pagination from '../Pagination'

describe('Pagination', () => {
  it('should render with no error', function() {
    const wrap = shallow(<Pagination postCount={20} rowsPerPage={5} page={0} />)
    expect(wrap).toMatchSnapshot()
  })

  it('should trigger changePage when press next page', function() {
    const changePage = jest.fn()
    const wrap = mount(
      <Pagination
        postCount={20}
        rowsPerPage={5}
        page={0}
        changePage={changePage}
      />
    )
    wrap
      .find("WithStyles(ForwardRef(IconButton))[title='Next page']")
      .simulate('click')
    expect(changePage.mock.calls.length).toBe(1)
  })
})
