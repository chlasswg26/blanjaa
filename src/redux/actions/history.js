import {
    GetHistoryAction,
    GetHistoryByIdAction,
    GetHistoryBySellerAction,
    GetHistoryByCustomerAction,
    PostHistoryAction,
    PutHistoryAction,
    DeleteHistoryAction
} from './actionTypes'
import {
    GetHistory,
    GetHistoryById,
    GetHistoryBySeller,
    GetHistoryByCustomer,
    PostHistory,
    PutHistory,
    DeleteHistory
} from '../../utils/Http'

const GetHistoryActionCreator = (token) => {
    return {
        type: GetHistoryAction,
        payload: GetHistory(token)
    }
}
const GetHistoryByIdActionCreator = (id, token) => {
    return {
        type: GetHistoryByIdAction,
        payload: GetHistoryById(id, token)
    }
}
const GetHistoryBySellerActionCreator = (seller, token) => {
    return {
        type: GetHistoryBySellerAction,
        payload: GetHistoryBySeller(seller, token)
    }
}
const GetHistoryByCustomerActionCreator = (customer, token) => {
    return {
        type: GetHistoryByCustomerAction,
        payload: GetHistoryByCustomer(customer, token)
    }
}
const PostHistoryActionCreator = (body, token) => {
    return {
        type: PostHistoryAction,
        payload: PostHistory(body, token)
    }
}
const PutHistoryActionCreator = (id, body, token) => {
    return {
        type: PutHistoryAction,
        payload: PutHistory(id, body, token)
    }
}
const DeleteHistoryActionCreator = (id, token) => {
    return {
        type: DeleteHistoryAction,
        payload: DeleteHistory(id, token)
    }
}

export {
    GetHistoryActionCreator,
    GetHistoryByIdActionCreator,
    GetHistoryBySellerActionCreator,
    GetHistoryByCustomerActionCreator,
    PostHistoryActionCreator,
    PutHistoryActionCreator,
    DeleteHistoryActionCreator
}
