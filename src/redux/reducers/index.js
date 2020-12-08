import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer, createTransform } from 'redux-persist'

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

const setTransformVerifyToPreviewOnly = createTransform(
    state => {
        return {
            preview: state.preview
        }
    }
)

const customPersistPreviewOnly = {
    key: 'Auth',
    storage: storage,
    whitelist: ['response'],
    transforms: [
        setTransformVerifyToPreviewOnly
    ]
}

const AppReducer = combineReducers({
    Verify: persistReducer(
        customPersistPreviewOnly,
        Auth
    ),
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
