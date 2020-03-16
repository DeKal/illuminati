import * as React from 'react'
import { shallow } from 'enzyme'
import Head from '../Head'

describe('Head', () => {
  it('should render with no error', function() {
    const wrap = shallow(
      <Head order={'asc'} orderColumn={'title'} numSelected={0} rowCount={5} />
    )
    expect(wrap).toMatchSnapshot()
  })

  it('should render Head with indetermine state checkbox', function() {
    const wrap = shallow(
      <Head order={'asc'} orderColumn={'title'} numSelected={2} rowCount={5} />
    )
    expect(wrap).toMatchSnapshot()
  })
  it('should render Head with all check checkbox', function() {
    const wrap = shallow(
      <Head order={'asc'} orderColumn={'title'} numSelected={5} rowCount={5} />
    )
    expect(wrap).toMatchSnapshot()
  })

  it('should handle sort column asc', function() {
    const setOrder = jest.fn()
    const setOrderColumn = jest.fn()
    const wrap = shallow(
      <Head
        order={'asc'}
        orderColumn={'title'}
        numSelected={0}
        rowCount={5}
        setOrder={setOrder}
        setOrderColumn={setOrderColumn}
      />
    )
    wrap.find('[data-test-id="head-sort-title"]').simulate('click')
    expect(setOrder.mock.calls.length).toBe(1)
    expect(setOrder.mock.calls[0][0]).toEqual('desc')
    expect(setOrderColumn.mock.calls.length).toBe(1)
    expect(setOrderColumn.mock.calls[0][0]).toBe('title')
  })

  it('should handle sort desc an asc column', function() {
    const setOrder = jest.fn()
    const setOrderColumn = jest.fn()
    const wrap = shallow(
      <Head
        order={'asc'}
        orderColumn={'title'}
        numSelected={0}
        rowCount={5}
        setOrder={setOrder}
        setOrderColumn={setOrderColumn}
      />
    )
    wrap.find('[data-test-id="head-sort-author"]').simulate('click')
    expect(setOrder.mock.calls.length).toBe(1)
    expect(setOrder.mock.calls[0][0]).toEqual('asc')
    expect(setOrderColumn.mock.calls.length).toBe(1)
    expect(setOrderColumn.mock.calls[0][0]).toBe('author')
  })
})
