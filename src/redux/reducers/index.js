import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { createWhitelistFilter } from 'redux-persist-transform-filter'
import expireIn from 'redux-persist-transform-expire-in'

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
import GuestCart from './guestCart'

const setTransformAuthLoginState = createWhitelistFilter('login', ['response'])
const setTransformVerifyState = createWhitelistFilter('register', ['response.preview', 'response.email'])

const expirationTime = process.env.REACT_APP_EXPIRATION_STATE * 60 * 60 * 1000
const setExpiringForStateVerify = expireIn(expirationTime, 'Verify', {})
const setExpiringForStateGuestCart = expireIn(expirationTime, 'GuestCart', [])

const customPersistAuthLogin = {
    key: 'Login',
    storage: storage,
    transforms: [
        setTransformAuthLoginState
    ]
}
const customPersistVerify = {
    key: 'Verify',
    storage: storage,
    transforms: [
        setTransformVerifyState,
        setExpiringForStateVerify
    ]
}
const customPersistGuestCart = {
    key: 'GuestCart',
    storage: storage,
    transforms: [
        setExpiringForStateGuestCart
    ]
}

const AppReducer = combineReducers({
    Verify: persistReducer(
        customPersistVerify,
        Auth
    ),
    Auth: persistReducer(
        customPersistAuthLogin,
        Auth
    ),
    Category,
    Banner,
    Payment,
    Address,
    User,
    Cart,
    Product,
    History,
    GuestCart: persistReducer(
        customPersistGuestCart,
        GuestCart
    )
})
const RootReducer = (state, action) => {
    if (action.type === LogoutAction) {
        state = undefined
    }

    return AppReducer(state, action)
}

export default RootReducer
