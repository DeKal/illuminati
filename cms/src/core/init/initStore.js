import configureStore from 'core/state/configureStore'

export default () => {
  const initialState = {
    app: {
      error: undefined,
      loading: false,
      toast: {
        isDisplayToast: false,
        success: true,
        toastMsg: ''
      }
    },
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
      loading: false,
      content: {
        id: '',
        slug: '',
        title: '',
        brief: '',
        time: Date.now(),
        tag: {},
        author: '',
        content: '',
        viewNum: 0,
        commentNum: 0,
        likeNum: 0
      },
      editedContent: {
        id: '',
        slug: '',
        title: '',
        brief: '',
        time: Date.now(),
        tag: {},
        author: '',
        content: '',
        viewNum: 0,
        commentNum: 0,
        likeNum: 0
      }
    }
  }

  return configureStore(initialState)
}
