import {combineReducers} from 'redux'
import userState from './user'
import Cinema from './cinema'
import Product from './admin'
import Helper from './helper'
import Order_Details from './order_details'
import movie from './movie'
const RootReducer = combineReducers({
    user : userState,
    cinema : Cinema,
    product : Product,
    helper : Helper,
    order_details : Order_Details,
    movie : movie
})
export default RootReducer