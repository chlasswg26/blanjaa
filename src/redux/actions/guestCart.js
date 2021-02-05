import {
    GuestAddToCartAction,
    GuestRemoveFromCartAction,
    GuestAddQuantityToCartAction,
    GuestSubQuantityToCartAction,
    GuestEmptyCartAction
} from './actionTypes'

const GuestAddToCartActionCreator = id => {
    return {
        type: GuestAddToCartAction,
        id
    }
}
const GuestRemoveFromCartActionCreator = id => {
    return {
        type: GuestRemoveFromCartAction,
        id
    }
}
const GuestAddQuantityToCartActionCreator = id => {
    return {
        type: GuestAddQuantityToCartAction,
        id
    }
}
const GuestSubQuantityToCartActionCreator = id => {
    return {
        type: GuestSubQuantityToCartAction,
        id
    }
}
const GuestEmptyCartActionCreator = () => {
    return {
        type: GuestEmptyCartAction
    }
}

export {
    GuestAddToCartActionCreator,
    GuestRemoveFromCartActionCreator,
    GuestAddQuantityToCartActionCreator,
    GuestSubQuantityToCartActionCreator,
    GuestEmptyCartActionCreator
}
