import {
  getPostTitle,
  getEditedTitle,
  getPostSlug,
  getEditedSlug,
  getPostBrief,
  getEditedBrief,
  getPostAuthor,
  getEditedAuthor,
  getPostTime,
  getEditedTime,
  getPostTags,
  getEditedTags,
  getEditedContent,
  getSavingContent,
  getIsPostLoading
} from '../selectors'

const state = {
  post: {
    loading: false,
    content: {
      id: 'test',
      slug: 'test',
      title: 'test',
      brief: 'test',
      time: 'test',
      tag: {
        test: true
      },
      author: 'test',
      content: 'test'
    },
    editedContent: {
      id: 'test1',
      slug: 'test1',
      title: 'test1',
      brief: 'test1',
      time: 'test1',
      tag: {
        test1: true
      },
      author: 'test1',
      content: 'test1'
    }
  }
}

describe('Post selectors', () => {
  it('getPostTitle', function() {
    expect(getPostTitle(state)).toEqual('test')
  })
  it('getEditedTitle', function() {
    expect(getEditedTitle(state)).toEqual('test1')
  })

  it('getPostSlug', function() {
    expect(getPostSlug(state)).toEqual('test')
  })
  it('getEditedSlug', function() {
    expect(getEditedSlug(state)).toEqual('test1')
  })

  it('getPostBrief', function() {
    expect(getPostBrief(state)).toEqual('test')
  })
  it('getEditedBrief', function() {
    expect(getEditedBrief(state)).toEqual('test1')
  })

  it('getPostAuthor', function() {
    expect(getPostAuthor(state)).toEqual('test')
  })
  it('getEditedAuthor', function() {
    expect(getEditedAuthor(state)).toEqual('test1')
  })

  it('getPostTime', function() {
    expect(getPostTime(state)).toEqual('test')
  })
  it('getEditedTime', function() {
    expect(getEditedTime(state)).toEqual('test1')
  })

  it('getPostTags', function() {
    expect(getPostTags(state)).toEqual({
      test: true
    })
  })
  it('getEditedTags', function() {
    expect(getEditedTags(state)).toEqual({
      test1: true
    })
  })

  it('getEditedContent', function() {
    expect(getEditedContent(state)).toEqual('test1')
  })

  it('getSavingContent', function() {
    expect(getSavingContent(state)).toEqual(state.post.editedContent)
  })

  it('getIsPostLoading', function() {
    expect(getIsPostLoading(state)).toEqual(false)
  })
})
