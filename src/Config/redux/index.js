import { createStore, applyMiddleware } from 'redux'
import RootReducer from './reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
const store = createStore(RootReducer, applyMiddleware(thunk, logger))
export default store