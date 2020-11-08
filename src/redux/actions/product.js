import {
    GetProductAction,
    GetProductByIdAction,
    GetProductBySellerAction,
    PostProductAction,
    PutProductAction,
    DeleteProductAction
} from './actionTypes'
import {
    GetProduct,
    GetProductById,
    GetProductBySeller,
    PostProduct,
    PutProduct,
    DeleteProduct
} from '../../utils/Http'

const GetProductActionCreator = (filter) => {
    return {
        type: GetProductAction,
        payload: GetProduct(filter)
    }
}
const GetProductByIdActionCreator = (id) => {
    return {
        type: GetProductByIdAction,
        payload: GetProductById(id)
    }
}
const GetProductBySellerActionCreator = (seller, filter) => {
    return {
        type: GetProductBySellerAction,
        payload: GetProductBySeller(seller, filter)
    }
}
const PostProductActionCreator = (body, token) => {
    return {
        type: PostProductAction,
        payload: PostProduct(body, token)
    }
}
const PutProductActionCreator = (id, body, token) => {
    return {
        type: PutProductAction,
        payload: PutProduct(id, body, token)
    }
}
const DeleteProductActionCreator = (id, token) => {
    return {
        type: DeleteProductAction,
        payload: DeleteProduct(id, token)
    }
}

export {
    GetProductActionCreator,
    GetProductByIdActionCreator,
    GetProductBySellerActionCreator,
    PostProductActionCreator,
    PutProductActionCreator,
    DeleteProductActionCreator
}
