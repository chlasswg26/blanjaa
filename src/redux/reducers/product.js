import {
    pending,
    rejected,
    fulfilled,
    GetProductAction,
    GetProductByIdAction,
    GetProductBySellerAction,
    PostProductAction,
    PutProductAction,
    DeleteProductAction
} from '../actions/actionTypes'

const initialValue = {
    response: {},
    result: [],
    resultById: {},
    resultBySeller: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false,
    errorMessage: ''
}

const Product = (prevState = initialValue, action) => {
    switch (action.type) {
        case GetProductAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case GetProductAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
                errorMessage: action.payload.response.data.data.message
            }
        case GetProductAction + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                result: action.payload.data.data
            }
        case GetProductByIdAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case GetProductByIdAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
                errorMessage: action.payload.response.data.data.message
            }
        case GetProductByIdAction + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                resultById: action.payload.data.data
            }
        case GetProductBySellerAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case GetProductBySellerAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
                errorMessage: action.payload.response.data.data.message
            }
        case GetProductBySellerAction + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                resultBySeller: action.payload.data.data
            }
        case PostProductAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case PostProductAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
                errorMessage: action.payload.response.data.data.message
            }
        case PostProductAction + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                response: action.payload.data.data
            }
        case PutProductAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case PutProductAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
                errorMessage: action.payload.response.data.data.message
            }
        case PutProductAction + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                response: action.payload.data.data
            }
        case DeleteProductAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case DeleteProductAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
                errorMessage: action.payload.response.data.data.message
            }
        case DeleteProductAction + fulfilled:
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

export default Product
