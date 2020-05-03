import React from 'react'
import { shallow } from 'enzyme'
import Post from 'post/components/Post'

describe('Post', () => {
  it('should render Loading when loading correctly', function() {
    const wrap = shallow(<Post loading />)
    expect(wrap).toMatchSnapshot()
  })

  it('should render Post correctly with editing post', function() {
    const wrap = shallow(<Post loading={false} />)
    expect(wrap).toMatchSnapshot()
  })

  it('should trigger saveEditedContent when click save button', function() {
    const saveEditedContent = jest.fn()
    const wrap = shallow(
      <Post loading={false} saveEditedContent={saveEditedContent} />
    )
    wrap.find('Styled(WithStyles(ForwardRef(Button)))').simulate('click')
    expect(saveEditedContent.mock.calls.length).toBe(1)
  })

  it('should render Post correctly with create post', function() {
    const wrap = shallow(<Post loading={false} newPost />)
    expect(wrap).toMatchSnapshot()
  })

  it('should trigger createPost when click save button', function() {
    const createPost = jest.fn()
    const wrap = shallow(
      <Post loading={false} createPost={createPost} newPost />
    )
    wrap.find('Styled(WithStyles(ForwardRef(Button)))').simulate('click')
    expect(createPost.mock.calls.length).toBe(1)
  })
})
