import configureStore from 'core/state/configureStore'

export default () => {
  const initialState = {
    drawer: {
      open: false
    }
  }

  const store = configureStore(initialState)

  return {
    store
  }
}
