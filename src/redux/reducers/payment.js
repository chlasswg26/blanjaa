import {
    pending,
    rejected,
    fulfilled,
    GetPaymentAction,
    GetPaymentByIdAction,
    PostPaymentAction,
    PutPaymentAction,
    DeletePaymentAction
} from '../actions/actionTypes'

const initialValue = {
    response: {},
    result: [],
    resultById: {},
    isLoading: false,
    isRejected: false,
    isFulfilled: false,
    errorMessage: ''
}

const Payment = (prevState = initialValue, action) => {
    switch (action.type) {
        case GetPaymentAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case GetPaymentAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
                errorMessage: action.payload.response.data.data.message
            }
        case GetPaymentAction + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                result: action.payload.data.data
            }
        case GetPaymentByIdAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case GetPaymentByIdAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
                errorMessage: action.payload.response.data.data.message
            }
        case GetPaymentByIdAction + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                resultById: action.payload.data.data
            }
        case PostPaymentAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case PostPaymentAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
                errorMessage: action.payload.response.data.data.message
            }
        case PostPaymentAction + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                response: action.payload.data.data
            }
        case PutPaymentAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case PutPaymentAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
                errorMessage: action.payload.response.data.data.message
            }
        case PutPaymentAction + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                response: action.payload.data.data
            }
        case DeletePaymentAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case DeletePaymentAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
                errorMessage: action.payload.response.data.data.message
            }
        case DeletePaymentAction + fulfilled:
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

export default Payment
