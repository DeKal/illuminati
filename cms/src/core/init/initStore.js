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
    }
  }

  return configureStore(initialState)
}
