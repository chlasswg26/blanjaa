import {
    GetPaymentAction,
    GetPaymentByIdAction,
    PostPaymentAction,
    PutPaymentAction,
    DeletePaymentAction
} from './actionTypes'
import {
    GetPayment,
    GetPaymentById,
    PostPayment,
    PutPayment,
    DeletePayment
} from '../../utils/Http'

const GetPaymentActionCreator = () => {
    return {
        type: GetPaymentAction,
        payload: GetPayment
    }
}
const GetPaymentByIdActionCreator = id => {
    return {
        type: GetPaymentByIdAction,
        payload: GetPaymentById(id)
    }
}
const PostPaymentActionCreator = (body, token) => {
    return {
        type: PostPaymentAction,
        payload: PostPayment(body, token)
    }
}
const PutPaymentActionCreator = (id, body, token) => {
    return {
        type: PutPaymentAction,
        payload: PutPayment(id, body, token)
    }
}
const DeletePaymentActionCreator = (id, token) => {
    return {
        type: DeletePaymentAction,
        payload: DeletePayment(id, token)
    }
}

export {
    GetPaymentActionCreator,
    GetPaymentByIdActionCreator,
    PostPaymentActionCreator,
    PutPaymentActionCreator,
    DeletePaymentActionCreator
}
