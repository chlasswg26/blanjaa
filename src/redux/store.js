import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import RootReducer from './reducers'

const rootPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['Banner']
}

const persistedReducer = persistReducer(rootPersistConfig, RootReducer)
const logger = createLogger()
const enhancer = applyMiddleware(promiseMiddleware, logger)
const store = createStore(persistedReducer, enhancer)
const persistor = persistStore(store)

export {
    store,
    persistor
}
