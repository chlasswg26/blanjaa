import {
    pending,
    rejected,
    fulfilled,
    GetUserAction,
    GetUserByIdAction,
    GetUserByAddressAction,
    PostUserAction,
    PutUserAction,
    DeleteUserAction
} from '../actions/actionTypes'

const initialValue = {
    response: {},
    result: [],
    resultById: {},
    resultByAddress: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false,
    errorMessage: ''
}

const User = (prevState = initialValue, action) => {
    switch (action.type) {
        case GetUserAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case GetUserAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
                errorMessage: action.payload.response.data.data.message
            }
        case GetUserAction + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                result: action.payload.data.data
            }
        case GetUserByIdAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case GetUserByIdAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
                errorMessage: action.payload.response.data.data.message
            }
        case GetUserByIdAction + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                resultById: action.payload.data.data
            }
        case GetUserByAddressAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case GetUserByAddressAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
                errorMessage: action.payload.response.data.data.message
            }
        case GetUserByAddressAction + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                resultByAddress: action.payload.data.data
            }
        case PostUserAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case PostUserAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
                errorMessage: action.payload.response.data.data.message
            }
        case PostUserAction + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                response: action.payload.data.data
            }
        case PutUserAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case PutUserAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
                errorMessage: action.payload.response.data.data.message
            }
        case PutUserAction + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                response: action.payload.data.data
            }
        case DeleteUserAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case DeleteUserAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
                errorMessage: action.payload.response.data.data.message
            }
        case DeleteUserAction + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                response: action.payload.data.data
            }
        default:
            return {
                ...prevState
            }
    }
}

export default User
