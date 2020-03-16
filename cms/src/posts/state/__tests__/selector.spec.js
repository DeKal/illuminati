import {
  getOrder,
  getOrderColumn,
  getPage,
  getPosts,
  getRowsPerPage,
  getSelectedPosts
} from '../selectors'

describe('Posts selectors', () => {
  it('getOrder', function() {
    const posts = {
      order: 'asc'
    }
    expect(getOrder({ posts })).toEqual('asc')
  })

  it('getOrderColumn', function() {
    const posts = {
      orderColumn: 'title'
    }
    expect(getOrderColumn({ posts })).toEqual('title')
  })

  it('getPage', function() {
    const posts = {
      page: 0
    }
    expect(getPage({ posts })).toEqual(0)
  })

  it('getPosts', function() {
    const posts = {
      posts: []
    }
    expect(getPosts({ posts })).toEqual([])
  })

  it('getRowsPerPage', function() {
    const posts = {
      rowsPerPage: 15
    }
    expect(getRowsPerPage({ posts })).toEqual(15)
  })

  it('getSelectedPosts', function() {
    const posts = {
      selectedPosts: ['a', 'b']
    }
    expect(getSelectedPosts({ posts })).toEqual(['a', 'b'])
  })
})
