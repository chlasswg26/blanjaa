import {
    pending,
    rejected,
    fulfilled,
    GetCategoryAction,
    GetCategoryByIdAction,
    PostCategoryAction,
    PutCategoryAction,
    DeleteCategoryAction
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

const Category = (prevState = initialValue, action) => {
    switch (action.type) {
        case GetCategoryAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case GetCategoryAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
                errorMessage: action?.payload?.response?.data?.data?.message
            }
        case GetCategoryAction + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                result: action.payload.data.data
            }
        case GetCategoryByIdAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case GetCategoryByIdAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
                errorMessage: action?.payload?.response?.data?.data?.message
            }
        case GetCategoryByIdAction + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                resultById: action.payload.data.data
            }
        case PostCategoryAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case PostCategoryAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
                errorMessage: action?.payload?.response?.data?.data?.message
            }
        case PostCategoryAction + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                response: action?.payload?.data?.data
            }
        case PutCategoryAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case PutCategoryAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
                errorMessage: action?.payload?.response?.data?.data?.message
            }
        case PutCategoryAction + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                response: action?.payload?.data?.data
            }
        case DeleteCategoryAction + pending:
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case DeleteCategoryAction + rejected:
            return {
                ...prevState,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
                errorMessage: action?.payload?.response?.data?.data?.message
            }
        case DeleteCategoryAction + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                response: action?.payload?.data?.data
            }
        default:
            return {
                ...prevState
            }
    }
}

export default Category
