import {
    GetBannerAction,
    GetBannerByIdAction,
    PostBannerAction,
    PutBannerAction,
    DeleteBannerAction
} from './actionTypes'
import {
    GetBanner,
    GetBannerById,
    PostBanner,
    PutBanner,
    DeleteBanner
} from '../../utils/Http'

const GetBannerActionCreator = () => {
    return {
        type: GetBannerAction,
        payload: GetBanner
    }
}
const GetBannerByIdActionCreator = id => {
    return {
        type: GetBannerByIdAction,
        payload: GetBannerById(id)
    }
}
const PostBannerActionCreator = (body, token) => {
    return {
        type: PostBannerAction,
        payload: PostBanner(body, token)
    }
}
const PutBannerActionCreator = (id, body, token) => {
    return {
        type: PutBannerAction,
        payload: PutBanner(id, body, token)
    }
}
const DeleteBannerActionCreator = (id, token) => {
    return {
        type: DeleteBannerAction,
        payload: DeleteBanner(id, token)
    }
}

export {
    GetBannerActionCreator,
    GetBannerByIdActionCreator,
    PostBannerActionCreator,
    PutBannerActionCreator,
    DeleteBannerActionCreator
}
