import { combineReducers } from 'redux'
import { LogoutAction } from '../actions/actionTypes'

import Auth from './auth'

const AppReducer = combineReducers({
    Auth
})
const RootReducer = (state, action) => {
    if (action.type === LogoutAction) {
        state = undefined
    }

    return AppReducer(state, action)
}

export default RootReducer
