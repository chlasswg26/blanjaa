import {
    pending,
    rejected,
    fulfilled,
    GetBannerAction,
    GetBannerByIdAction,
    PostBannerAction,
    PutBannerAction,
    DeleteBannerAction
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

const Banner = (prevState = initialValue, action) => {
    switch (action.type) {
        case GetBannerAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case GetBannerAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
                errorMessage: action.payload.response.data.data.message
            }
        case GetBannerAction + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                result: action.payload.data.data
            }
        case GetBannerByIdAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case GetBannerByIdAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
                errorMessage: action.payload.response.data.data.message
            }
        case GetBannerByIdAction + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                resultById: action.payload.data.data
            }
        case PostBannerAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case PostBannerAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
                errorMessage: action.payload.response.data.data.message
            }
        case PostBannerAction + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                response: action.payload.data.data
            }
        case PutBannerAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case PutBannerAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
                errorMessage: action.payload.response.data.data.message
            }
        case PutBannerAction + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                response: action.payload.data.data
            }
        case DeleteBannerAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case DeleteBannerAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
                errorMessage: action.payload.response.data.data.message
            }
        case DeleteBannerAction + fulfilled:
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

export default Banner
