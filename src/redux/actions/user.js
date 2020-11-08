import {
    GetUserAction,
    GetUserByIdAction,
    GetUserByAddressAction,
    PostUserAction,
    PutUserAction,
    DeleteUserAction
} from './actionTypes'
import {
    GetUser,
    GetUserById,
    GetUserByAddress,
    PostUser,
    PutUser,
    DeleteUser
} from '../../utils/Http'

const GetUserActionCreator = (token) => {
    return {
        type: GetUserAction,
        payload: GetUser(token)
    }
}
const GetUserByIdActionCreator = (id, token) => {
    return {
        type: GetUserByIdAction,
        payload: GetUserById(id, token)
    }
}
const GetUserByAddressActionCreator = (address, token) => {
    return {
        type: GetUserByAddressAction,
        payload: GetUserByAddress(address, token)
    }
}
const PostUserActionCreator = (body, token) => {
    return {
        type: PostUserAction,
        payload: PostUser(body, token)
    }
}
const PutUserActionCreator = (id, body, token) => {
    return {
        type: PutUserAction,
        payload: PutUser(id, body, token)
    }
}
const DeleteUserActionCreator = (id, token) => {
    return {
        type: DeleteUserAction,
        payload: DeleteUser(id, token)
    }
}

export {
    GetUserActionCreator,
    GetUserByIdActionCreator,
    GetUserByAddressActionCreator,
    PostUserActionCreator,
    PutUserActionCreator,
    DeleteUserActionCreator
}
