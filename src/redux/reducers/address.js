import {
    pending,
    rejected,
    fulfilled,
    GetAddressAction,
    GetAddressByIdAction,
    GetAddressByUserAction,
    PostAddressAction,
    PutAddressAction,
    DeleteAddressAction
} from '../actions/actionTypes'

const initialValue = {
    response: {},
    result: [],
    resultById: {},
    resultByUser: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false,
    errorMessage: ''
}

const Address = (prevState = initialValue, action) => {
    switch (action.type) {
        case GetAddressAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case GetAddressAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
                errorMessage: action.payload.response.data.data.message
            }
        case GetAddressAction + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                result: action.payload.data.data
            }
        case GetAddressByIdAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case GetAddressByIdAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
                errorMessage: action.payload.response.data.data.message
            }
        case GetAddressByIdAction + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                resultById: action.payload.data.data
            }
        case GetAddressByUserAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case GetAddressByUserAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
                errorMessage: action.payload.response.data.data.message
            }
        case GetAddressByUserAction + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                resultByUser: action.payload.data.data
            }
        case PostAddressAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case PostAddressAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
                errorMessage: action.payload.response.data.data.message
            }
        case PostAddressAction + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                response: action.payload.data.data
            }
        case PutAddressAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case PutAddressAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
                errorMessage: action.payload.response.data.data.message
            }
        case PutAddressAction + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                response: action.payload.data.data
            }
        case DeleteAddressAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case DeleteAddressAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
                errorMessage: action.payload.response.data.data.message
            }
        case DeleteAddressAction + fulfilled:
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

export default Address
