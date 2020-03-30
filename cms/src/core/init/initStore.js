import configureStore from 'core/state/configureStore'

export default () => {
  const initialState = {
    drawer: {
      open: false
    },
    posts: {
      page: 0,
      rowsPerPage: 5,
      order: 'asc',
      orderColumn: 'title',
      selectedPosts: [],
      posts: []
    },
    post: {
      content: {
        id: '',
        slug: '',
        title: '',
        brief: '',
        time: '',
        tag: {},
        author: '',
        content: '',
        viewNum: 0,
        commentNum: 0,
        likeNum: 0
      },
      editedContent: {
        tag: {}
      }
    }
  }

  return configureStore(initialState)
}
