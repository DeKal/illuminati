import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import rootReducer from 'core/state/rootReducer'
import rootSagas from 'core/state/rootSagas'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['drawer']
}
const sagaMiddleware = createSagaMiddleware()
const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = initState => {
  const store = createStore(
    persistedReducer,
    initState,
    applyMiddleware(sagaMiddleware)
  )
  sagaMiddleware.run(rootSagas)
  const persistor = persistStore(store)
  return { store, persistor }
}

export default configureStore
