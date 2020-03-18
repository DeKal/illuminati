import * as React from 'react'
import { shallow } from 'enzyme'
import Body from '../Body'

const posts = [
  {
    slug: 'getting-started-with-java',
    title: 'Getting Started With Java',
    time: '06/01/2020',
    tag: ['Web Development', 'Java'],
    author: 'Phat Ho',
    commentNum: 0
  },
  {
    slug: 'get-startted-with-spring',
    title: 'Get Startted With Spring MVC',
    time: '06/01/2020',
    tag: ['Java Spring', 'Course'],
    author: 'Phat Ho',
    commentNum: 0
  }
]

describe('Body', () => {
  it('should render with no error', function() {
    const wrap = shallow(
      <Body
        posts={posts}
        page={0}
        rowsPerPage={5}
        order={'asc'}
        orderColumn={'title'}
        selectedPosts={[]}
      />
    )
    expect(wrap).toMatchSnapshot()
  })

  it('should change page when click on title', function() {
    const history = {
      push: jest.fn()
    }
    const wrap = shallow(
      <Body
        posts={posts}
        page={0}
        rowsPerPage={5}
        order={'asc'}
        orderColumn={'title'}
        selectedPosts={[]}
        history={history}
      />
    )
    wrap.find('[data-test-id="body-title-0"]').simulate('click')
    expect(history.push.mock.calls.length).toBe(1)
  })

  it('should check the item when clicking on checkbox', function() {
    const setSelectedPost = jest.fn()
    const wrap = shallow(
      <Body
        posts={posts}
        page={0}
        rowsPerPage={5}
        order={'asc'}
        orderColumn={'title'}
        selectedPosts={[]}
        setSelectedPost={setSelectedPost}
      />
    )
    wrap.find('[data-test-id="body-checkbox-0"]').simulate('click')
    expect(setSelectedPost.mock.calls.length).toBe(1)
    expect(setSelectedPost.mock.calls[0][0]).toEqual('get-startted-with-spring')
  })
})
