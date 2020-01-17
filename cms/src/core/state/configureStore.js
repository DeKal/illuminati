import { createStore } from 'redux'

import rootReducer from 'core/state/rootReducer'

const configureStore = initState => {
  return createStore(rootReducer, initState)
}

export default configureStore
