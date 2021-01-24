import {
    GuestAddToCart,
    GuestRemoveFromCart,
    GuestAddQuantityToCart,
    GuestSubQuantityToCart,
    GuestEmptyCart
} from './actionTypes'

const GuestAddToCartActionCreator = id => {
    return {
        type: GuestAddToCart,
        id
    }
}
const GuestRemoveFromCartActionCreator = id => {
    return {
        type: GuestRemoveFromCart,
        id
    }
}
const GuestAddQuantityToCartActionCreator = id => {
    return {
        type: GuestAddQuantityToCart,
        id
    }
}
const GuestSubQuantityToCartActionCreator = id => {
    return {
        type: GuestSubQuantityToCart,
        id
    }
}
const GuestEmptyCartActionCreator = () => {
    return {
        type: GuestEmptyCart
    }
}

export {
    GuestAddToCartActionCreator,
    GuestRemoveFromCartActionCreator,
    GuestAddQuantityToCartActionCreator,
    GuestSubQuantityToCartActionCreator,
    GuestEmptyCartActionCreator
}
