import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import RootReducer from './reducers'

const logger = createLogger()
const enhancer = applyMiddleware(promiseMiddleware, logger)
const store = createStore(RootReducer, enhancer)

export default store
