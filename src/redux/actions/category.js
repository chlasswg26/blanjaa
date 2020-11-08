import {
    GetCategoryAction,
    GetCategoryByIdAction,
    PostCategoryAction,
    PutCategoryAction,
    DeleteCategoryAction
} from './actionTypes'
import {
    GetCategory,
    GetCategoryById,
    PostCategory,
    PutCategory,
    DeleteCategory
} from '../../utils/Http'

const GetCategoryActionCreator = () => {
    return {
        type: GetCategoryAction,
        payload: GetCategory
    }
}
const GetCategoryByIdActionCreator = id => {
    return {
        type: GetCategoryByIdAction,
        payload: GetCategoryById(id)
    }
}
const PostCategoryActionCreator = (body, token) => {
    return {
        type: PostCategoryAction,
        payload: PostCategory(body, token)
    }
}
const PutCategoryActionCreator = (id, body, token) => {
    return {
        type: PutCategoryAction,
        payload: PutCategory(id, body, token)
    }
}
const DeleteCategoryActionCreator = (id, token) => {
    return {
        type: DeleteCategoryAction,
        payload: DeleteCategory(id, token)
    }
}

export {
    GetCategoryActionCreator,
    GetCategoryByIdActionCreator,
    PostCategoryActionCreator,
    PutCategoryActionCreator,
    DeleteCategoryActionCreator
}
