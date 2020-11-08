import {
    GetAddressAction,
    GetAddressByIdAction,
    GetAddressByUserAction,
    PostAddressAction,
    PutAddressAction,
    DeleteAddressAction
} from './actionTypes'
import {
    GetAddress,
    GetAddressById,
    GetAddressByUser,
    PostAddress,
    PutAddress,
    DeleteAddress
} from '../../utils/Http'

const GetAddressActionCreator = (token) => {
    return {
        type: GetAddressAction,
        payload: GetAddress(token)
    }
}
const GetAddressByIdActionCreator = (id, token) => {
    return {
        type: GetAddressByIdAction,
        payload: GetAddressById(id, token)
    }
}
const GetAddressByUserActionCreator = (user, token) => {
    return {
        type: GetAddressByUserAction,
        payload: GetAddressByUser(user, token)
    }
}
const PostAddressActionCreator = (body, token) => {
    return {
        type: PostAddressAction,
        payload: PostAddress(body, token)
    }
}
const PutAddressActionCreator = (id, body, token) => {
    return {
        type: PutAddressAction,
        payload: PutAddress(id, body, token)
    }
}
const DeleteAddressActionCreator = (id, token) => {
    return {
        type: DeleteAddressAction,
        payload: DeleteAddress(id, token)
    }
}

export {
    GetAddressActionCreator,
    GetAddressByIdActionCreator,
    GetAddressByUserActionCreator,
    PostAddressActionCreator,
    PutAddressActionCreator,
    DeleteAddressActionCreator
}
