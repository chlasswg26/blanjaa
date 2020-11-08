import {
    pending,
    rejected,
    fulfilled,
    RegisterAction,
    VerifyAction,
    LoginAction,
    TokenAction
} from '../actions/actionTypes'

const initialValue = {
    response: {},
    token: '',
    isLoading: false,
    isRejected: false,
    isFulfilled: false,
    errorMessage: ''
}

const Auth = (prevState = initialValue, action) => {
    switch (action.type) {
        case RegisterAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case RegisterAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                errorMessage: action.payload.response.data.data.message
            }
        case RegisterAction + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isRejected: false,
                isFulfilled: true
            }
        case VerifyAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case VerifyAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                errorMessage: action.payload.response.data.data.message
            }
        case VerifyAction + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isRejected: false,
                isFulfilled: true
            }
        case LoginAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case LoginAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                errorMessage: action.payload.response.data.data.message
            }
        case LoginAction + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                response: action.payload.data.data
            }
        case TokenAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case TokenAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                errorMessage: action.payload.response.data.data.message
            }
        case TokenAction + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                token: action.payload.data.data.token
            }
        default:
            return {
                ...prevState
            }
    }
}

export default Auth
