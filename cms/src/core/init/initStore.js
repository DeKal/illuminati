import configureStore from 'core/state/configureStore'

export default () => {
  const initialState = {
    drawer: {
      open: false
    }
  }

  return configureStore(initialState)
}
