import * as React from 'react'
import Posts from '../Posts'
import { shallow } from 'enzyme'

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

describe('Posts', () => {
  it('should render Posts with no error', function() {
    const wrap = shallow(<Posts posts={posts} selectedPosts={[]} />)
    expect(wrap).toMatchSnapshot()
  })

  it('should render Loading', function() {
    const wrap = shallow(<Posts posts={[]} selectedPosts={[]} />)
    expect(wrap).toMatchSnapshot()
  })
})
