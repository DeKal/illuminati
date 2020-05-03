import { fetchPostFromSlug } from '../fetch'
import mockAxios from 'axios'
jest.mock('axios')

const post = {
  data: {
    id: '5e24614a68ac5fa5373bf91c',
    slug: 'design-patterns-tutorial',
    title: 'Design Patterns – Example Tutorial',
    brief:
      'Design Patterns are very popular among software developers. A design pattern is a well-described solution to a common software problem. With this, we are cool.',
    time: '15/01/2020',
    tag: ['System Design'],
    author: 'Li Li',
    content: '<p><strong>Add new content here.</strong></p>',
    viewNum: 0,
    commentNum: 0,
    likeNum: 0
  },
  success: true
}

describe('fetchPostFromSlug ', () => {
  it('fetchPostFromSlug with mock request', async () => {
    //@ts-ignore
    mockAxios.get.mockResolvedValue({
      data: post
    })

    const data = await fetchPostFromSlug('slug')
    expect(data).toMatchSnapshot()
  })

  it('fetchPostFromSlug with error request', async () => {
    //@ts-ignore
    mockAxios.get.mockResolvedValue({
      data: {
        error: {
          code: 204,
          message: 'Cannot find post'
        },
        success: false
      }
    })

    try {
      await fetchPostFromSlug('slug')
    } catch (e) {
      expect(e).toEqual({
        code: 204,
        message: 'Cannot find post'
      })
    }
  })
})
