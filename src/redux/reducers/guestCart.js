import {
    GuestAddToCart,
    GuestRemoveFromCart,
    GuestAddQuantityToCart,
    GuestSubQuantityToCart,
    GuestEmptyCart
} from '../actions/actionTypes'

const initialValue = {
    products: []
}

const GuestCart = (prevState = initialValue, action) => {
    switch (action.type) {
        case GuestAddToCart:
            return {
                ...prevState,
                products: prevState.products.map(product =>
                    product.id === action.id ? { ...product, selected: true } : product,
                ),
            }
        case GuestRemoveFromCart:
            return {
                ...prevState,
                products: prevState.products.map(product =>
                    product.id === action.id
                        ? { ...product, selected: false, quantity: 1 }
                        : product,
                ),
            }
        case GuestAddQuantityToCart:
            return {
                ...prevState,
                products: prevState.products.map(product =>
                    product.id === action.id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product,
                ),
            }
        case GuestSubQuantityToCart:
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
        case GuestEmptyCart:
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
