import {
    pending,
    rejected,
    fulfilled,
    RegisterAction,
    VerifyAction,
    LoginAction,
    TokenAction,
    ResetAuthStateAction
} from '../actions/actionTypes'

const initialValue = {
    register: {
        response: {},
        isLoading: false,
        isRejected: false,
        isFulfilled: false,
        errorMessage: ''
    },
    login: {
        response: {},
        isLoading: false,
        isRejected: false,
        isFulfilled: false,
        errorMessage: ''
    },
    verify: {
        response: {},
        isLoading: false,
        isRejected: false,
        isFulfilled: false,
        errorMessage: ''
    },
    token: {
        response: '',
        isLoading: false,
        isRejected: false,
        isFulfilled: false,
        errorMessage: ''
    }
}

const Auth = (prevState = initialValue, action) => {
    switch (action.type) {
        case RegisterAction + pending:
            return {
                ...prevState,
                register: {
                    isLoading: true,
                    isRejected: false,
                    isFulfilled: false
                }
            }
        case RegisterAction + rejected:
            return {
                ...prevState,
                register: {
                    isLoading: false,
                    isRejected: true,
                    isFulfilled: false,
                    errorMessage: action?.payload?.response?.data?.data?.message
                }
            }
        case RegisterAction + fulfilled:
            return {
                ...prevState,
                register: {
                    isLoading: false,
                    isRejected: false,
                    isFulfilled: true,
                    response: action?.payload?.data?.data
                }
            }
        case VerifyAction + pending:
            return {
                ...prevState,
                verify: {
                    isLoading: true,
                    isRejected: false,
                    isFulfilled: false
                }
            }
        case VerifyAction + rejected:
            return {
                ...prevState,
                verify: {
                    isLoading: false,
                    isRejected: true,
                    isFulfilled: false,
                    errorMessage: action?.payload?.response?.data?.data?.message
                }
            }
        case VerifyAction + fulfilled:
            return {
                ...prevState,
                verify: {
                    isLoading: false,
                    isRejected: false,
                    isFulfilled: true,
                    response: action?.payload?.data?.data
                }
            }
        case LoginAction + pending:
            return {
                ...prevState,
                login: {
                    isLoading: true,
                    isRejected: false,
                    isFulfilled: false
                }
            }
        case LoginAction + rejected:
            return {
                ...prevState,
                login: {
                    isLoading: false,
                    isRejected: true,
                    isFulfilled: false,
                    errorMessage: action?.payload?.response?.data?.data?.message
                }
            }
        case LoginAction + fulfilled:
            return {
                ...prevState,
                login: {
                    isLoading: false,
                    isRejected: false,
                    isFulfilled: true,
                    response: action?.payload?.data?.data
                }
            }
        case TokenAction + pending:
            return {
                ...prevState,
                token: {
                    isLoading: true,
                    isRejected: false,
                    isFulfilled: false
                }
            }
        case TokenAction + rejected:
            return {
                ...prevState,
                token: {
                    isLoading: false,
                    isRejected: true,
                    isFulfilled: false,
                    errorMessage: action?.payload?.response?.data?.data?.message
                }
            }
        case TokenAction + fulfilled:
            return {
                ...prevState,
                token: {
                    isLoading: false,
                    isRejected: false,
                    isFulfilled: true,
                    response: action?.payload?.data?.data?.token
                }
            }
        case ResetAuthStateAction:
            return {
                login: {
                    response: {}
                }
            }
        default:
            return {
                ...prevState
            }
    }
}

export default Auth
