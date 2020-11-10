import { combineReducers } from 'redux'
import { LogoutAction } from '../actions/actionTypes'

import Auth from './auth'
import Category from './category'
import Banner from './banner'
import Payment from './payment'
import Address from './address'
import User from './user'
import Cart from './cart'
import Product from './product'
import History from './history'

const AppReducer = combineReducers({
    Auth,
    Category,
    Banner,
    Payment,
    Address,
    User,
    Cart,
    Product,
    History
})
const RootReducer = (state, action) => {
    if (action.type === LogoutAction) {
        state = undefined
    }

    return AppReducer(state, action)
}

export default RootReducer
