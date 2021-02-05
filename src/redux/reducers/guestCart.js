import {
    GuestAddToCartAction,
    GuestRemoveFromCartAction,
    GuestAddQuantityToCartAction,
    GuestSubQuantityToCartAction,
    GuestEmptyCartAction
} from '../actions/actionTypes'

const initialValue = {
    products: []
}

const GuestCart = (prevState = initialValue, action) => {
    switch (action.type) {
        case GuestAddToCartAction:
            return {
                ...prevState,
                products: prevState.products.map(product =>
                    product.id === action.id ? { ...product, selected: true } : product,
                ),
            }
        case GuestRemoveFromCartAction:
            return {
                ...prevState,
                products: prevState.products.map(product =>
                    product.id === action.id
                        ? { ...product, selected: false, quantity: 1 }
                        : product,
                ),
            }
        case GuestAddQuantityToCartAction:
            return {
                ...prevState,
                products: prevState.products.map(product =>
                    product.id === action.id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product,
                ),
            }
        case GuestSubQuantityToCartAction:
            return {
                ...prevState,
                products: prevState.products.map(product =>
                    product.id === action.id
                        ? {
                            ...product,
                            quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
                        }
                        : product,
                ),
            }
        case GuestEmptyCartAction:
            return {
                ...prevState,
                products: prevState.products.map(product =>
                    product.selected
                        ? { ...product, selected: false, quantity: 1 }
                        : product,
                ),
            }
        default:
            return prevState
    }
}

export default GuestCart
