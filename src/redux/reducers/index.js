import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer, createTransform } from 'redux-persist'
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

const setTransformAuthLoginState = createTransform(
    state => {
        return {
            response: {
                ...state.response
            }
        }
    }
)
const setTransformVerifyState = createTransform(
    state => {
        return {
            response: {
                preview: state.response?.preview
            }
        }
    }
)

const expirationTime = process.env.REACT_APP_EXPIRATION_STATE * 60 * 60 * 1000

const setExpiringForStateAuthLogin = expireIn(expirationTime, 'Login', {
    response: {},
    isLoading: false,
    isRejected: false,
    isFulfilled: false,
    errorMessage: ''
})
const setExpiringForStateVerify = expireIn(expirationTime, 'Verify', {})
const setExpiringForStateGuestCart = expireIn(expirationTime, 'GuestCart', [])

const customPersistAuthLogin = {
    key: 'Login',
    storage: storage,
    whitelist: ['login'],
    transforms: [
        setTransformAuthLoginState,
        setExpiringForStateAuthLogin
    ]
}
const customPersistPreviewOnly = {
    key: 'Verify',
    storage: storage,
    whitelist: ['register'],
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
        customPersistPreviewOnly,
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
