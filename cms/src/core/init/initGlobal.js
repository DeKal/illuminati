import configureStore from 'core/state/configureStore'

export default () => {
  const initialState = {
    application: {
      initData: {}
    }
  }

  const store = configureStore(initialState)

  return {
    store
  }
}
