import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import rootReducer from 'core/state/rootReducer'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['drawer']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = initState => {
  const store = createStore(persistedReducer, initState)
  const persistor = persistStore(store)
  return { store, persistor }
}

export default configureStore
