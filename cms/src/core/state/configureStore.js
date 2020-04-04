import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import reduxCatch from 'redux-catch'
import rootReducer from 'core/state/rootReducer'
import rootSagas from 'core/state/rootSagas'

import { assignError } from 'core/state/app/actions'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['drawer']
}
const sagaMiddleware = createSagaMiddleware()
const persistedReducer = persistReducer(persistConfig, rootReducer)

function errorHandler(error, _1, _2, dispatch) {
  dispatch(assignError(error))
}

const configureStore = initState => {
  const store = createStore(
    persistedReducer,
    initState,
    applyMiddleware(sagaMiddleware, reduxCatch(errorHandler))
  )
  sagaMiddleware.run(rootSagas)
  const persistor = persistStore(store)
  return { store, persistor }
}

export default configureStore
