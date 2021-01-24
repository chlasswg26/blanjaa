import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension'
import expireIn from 'redux-persist-transform-expire-in'

import RootReducer from './reducers'

const expirationTime = process.env.REACT_APP_EXPIRATION_STATE * 60 * 60 * 1000
const setExpiringForStateBanner = expireIn(expirationTime, 'root', {
    Banner: {
        response: {},
        result: [],
        resultById: {},
        isLoading: false,
        isRejected: false,
        isFulfilled: false,
        errorMessage: ''
    }
})

const rootPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['Banner'],
    transforms: [
        setExpiringForStateBanner
    ]
}

const persistedReducer = persistReducer(rootPersistConfig, RootReducer)
const logger = createLogger()
const enhancer = applyMiddleware(promiseMiddleware, logger)
const composeEnhancers = composeWithDevTools({
    maxAge: 35
})
const store = createStore(persistedReducer, composeEnhancers(enhancer))
const persistor = persistStore(store)

export {
    store,
    persistor
}
