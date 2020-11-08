import {
    GetCartAction,
    GetCartByIdAction,
    GetCartByUserAction,
    PostCartAction,
    PutCartAction,
    DeleteCartAction
} from './actionTypes'
import {
    GetCart,
    GetCartById,
    GetCartByUser,
    PostCart,
    PutCart,
    DeleteCart
} from '../../utils/Http'

const GetCartActionCreator = (token) => {
    return {
        type: GetCartAction,
        payload: GetCart(token)
    }
}
const GetCartByIdActionCreator = (id, token) => {
    return {
        type: GetCartByIdAction,
        payload: GetCartById(id, token)
    }
}
const GetCartByUserActionCreator = (user, token) => {
    return {
        type: GetCartByUserAction,
        payload: GetCartByUser(user, token)
    }
}
const PostCartActionCreator = (body, token) => {
    return {
        type: PostCartAction,
        payload: PostCart(body, token)
    }
}
const PutCartActionCreator = (id, body, token) => {
    return {
        type: PutCartAction,
        payload: PutCart(id, body, token)
    }
}
const DeleteCartActionCreator = (id, token) => {
    return {
        type: DeleteCartAction,
        payload: DeleteCart(id, token)
    }
}

export {
    GetCartActionCreator,
    GetCartByIdActionCreator,
    GetCartByUserActionCreator,
    PostCartActionCreator,
    PutCartActionCreator,
    DeleteCartActionCreator
}
