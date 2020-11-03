import Axios from 'axios'

const BACKEND = process.env.REACT_APP_API_URL
const AUTH_ENDPOINT = `${BACKEND}/auth`
const PRODUCT_ENDPOINT = `${BACKEND}/product`
const CATEGORY_ENDPOINT = `${BACKEND}/category`
const ADDRESS_ENDPOINT = `${BACKEND}/address`
const USER_ENDPOINT = `${BACKEND}/user`
const HISTORY_ENDPOINT = `${BACKEND}/history`
const BANNER_ENDPOINT = `${BACKEND}/banner`
const PAYMENT_ENDPOINT = `${BACKEND}/payment`
const CART_ENDPOINT = `${BACKEND}/cart`

const RegisterUser = body => {
    return Axios.post(`${AUTH_ENDPOINT}/register`, body)
}
const VerifyUser = body => {
    return Axios.post(`${AUTH_ENDPOINT}/verify`, body)
}
const LoginUser = body => {
    return Axios.post(`${AUTH_ENDPOINT}/login`, body)
}
const TokenUser = body => {
    return Axios.post(`${AUTH_ENDPOINT}/token`, body)
}

const GetProduct = (filter) => {
    return Axios.get(PRODUCT_ENDPOINT, {
        params: filter
    })
}
const GetProductById = id => {
    return Axios.get(`${PRODUCT_ENDPOINT}/${id}`)
}
const GetProductBySeller = (seller, filter) => {
    return Axios.get(`${PRODUCT_ENDPOINT}/seller/${seller}`, {
        params: filter
    })
}
const PostProduct = (body, token) => {
    return Axios.post(PRODUCT_ENDPOINT, body, {
        headers: {
            Authorization: token
        }
    })
}
const PutProduct = (id, body, token) => {
    return Axios.put(`${PRODUCT_ENDPOINT}/${id}`, body, {
        headers: {
            Authorization: token
        }
    })
}
const DeleteProduct = (id, token) => {
    return Axios.delete(`${PRODUCT_ENDPOINT}/${id}`, {
        headers: {
            Authorization: token
        }
    })
}

const GetCategory = () => {
    return Axios.get(CATEGORY_ENDPOINT)
}
const GetCategoryById = id => {
    return Axios.get(`${CATEGORY_ENDPOINT}/${id}`)
}
const PostCategory = (body, token) => {
    return Axios.post(CATEGORY_ENDPOINT, body, {
        headers: {
            Authorization: token
        }
    })
}
const PutCategory = (id, body, token) => {
    return Axios.put(`${CATEGORY_ENDPOINT}/${id}`, body, {
        headers: {
            Authorization: token
        }
    })
}
const DeleteCategory = (id, token) => {
    return Axios.delete(`${CATEGORY_ENDPOINT}/${id}`, {
        headers: {
            Authorization: token
        }
    })
}

const GetAddress = token => {
    return Axios.get(ADDRESS_ENDPOINT, {
        headers: {
            Authorization: token
        }
    })
}
const GetAddressById = (id, token) => {
    return Axios.get(`${ADDRESS_ENDPOINT}/${id}`, {
        headers: {
            Authorization: token
        }
    })
}
const GetAddressByUser = (user, token) => {
    return Axios.get(`${ADDRESS_ENDPOINT}/user/${user}`, {
        headers: {
            Authorization: token
        }
    })
}
const PostAddress = (body, token) => {
    return Axios.post(ADDRESS_ENDPOINT, body, {
        headers: {
            Authorization: token
        }
    })
}
const PutAddress = (id, body, token) => {
    return Axios.put(`${ADDRESS_ENDPOINT}/${id}`, body, {
        headers: {
            Authorization: token
        }
    })
}
const DeleteAddress = (id, token) => {
    return Axios.delete(`${ADDRESS_ENDPOINT}/${id}`, {
        headers: {
            Authorization: token
        }
    })
}

const GetUser = token => {
    return Axios.get(USER_ENDPOINT, {
        headers: {
            Authorization: token
        }
    })
}
const GetUserById = (id, token) => {
    return Axios.get(`${USER_ENDPOINT}/${id}`, {
        headers: {
            Authorization: token
        }
    })
}
const GetUserByAddress = (address, token) => {
    return Axios.get(`${USER_ENDPOINT}/address/${address}`, {
        headers: {
            Authorization: token
        }
    })
}
const PostUser = (body, token) => {
    return Axios.post(USER_ENDPOINT, body, {
        headers: {
            Authorization: token
        }
    })
}
const PutUser = (id, body, token) => {
    return Axios.put(`${USER_ENDPOINT}/${id}`, body, {
        headers: {
            Authorization: token
        }
    })
}
const DeleteUser = (id, token) => {
    return Axios.delete(`${USER_ENDPOINT}/${id}`, {
        headers: {
            Authorization: token
        }
    })
}

const GetHistory = token => {
    return Axios.get(HISTORY_ENDPOINT, {
        headers: {
            Authorization: token
        }
    })
}
const GetHistoryById = (id, token) => {
    return Axios.get(`${HISTORY_ENDPOINT}/${id}`, {
        headers: {
            Authorization: token
        }
    })
}
const GetHistoryBySeller = (seller, token) => {
    return Axios.get(`${HISTORY_ENDPOINT}/seller/${seller}`, {
        headers: {
            Authorization: token
        }
    })
}
const GetHistoryByCustomer = (customer, token) => {
    return Axios.get(`${HISTORY_ENDPOINT}/customer/${customer}`, {
        headers: {
            Authorization: token
        }
    })
}
const PostHistory = (body, token) => {
    return Axios.post(HISTORY_ENDPOINT, body, {
        headers: {
            Authorization: token
        }
    })
}
const PutHistory = (id, body, token) => {
    return Axios.put(`${HISTORY_ENDPOINT}/${id}`, body, {
        headers: {
            Authorization: token
        }
    })
}
const DeleteHistory = (id, token) => {
    return Axios.delete(`${HISTORY_ENDPOINT}/${id}`, {
        headers: {
            Authorization: token
        }
    })
}

const GetBanner = () => {
    return Axios.get(BANNER_ENDPOINT)
}
const GetBannerById = id => {
    return Axios.get(`${BANNER_ENDPOINT}/${id}`)
}
const PostBanner = (body, token) => {
    return Axios.post(BANNER_ENDPOINT, body, {
        headers: {
            Authorization: token
        }
    })
}
const PutBanner = (id, body, token) => {
    return Axios.put(`${BANNER_ENDPOINT}/${id}`, body, {
        headers: {
            Authorization: token
        }
    })
}
const DeleteBanner = (id, token) => {
    return Axios.delete(`${BANNER_ENDPOINT}/${id}`, {
        headers: {
            Authorization: token
        }
    })
}

const GetPayment = () => {
    return Axios.get(PAYMENT_ENDPOINT)
}
const GetPaymentById = id => {
    return Axios.get(`${PAYMENT_ENDPOINT}/${id}`)
}
const PostPayment = (body, token) => {
    return Axios.post(PAYMENT_ENDPOINT, body, {
        headers: {
            Authorization: token
        }
    })
}
const PutPayment = (id, body, token) => {
    return Axios.put(`${PAYMENT_ENDPOINT}/${id}`, body, {
        headers: {
            Authorization: token
        }
    })
}
const DeletePayment = (id, token) => {
    return Axios.delete(`${PAYMENT_ENDPOINT}/${id}`, {
        headers: {
            Authorization: token
        }
    })
}

const GetCart = token => {
    return Axios.get(CART_ENDPOINT, {
        headers: {
            Authorization: token
        }
    })
}
const GetCartById = (id, token) => {
    return Axios.get(`${CART_ENDPOINT}/${id}`, {
        headers: {
            Authorization: token
        }
    })
}
const GetCartByUser = (user, token) => {
    return Axios.get(`${CART_ENDPOINT}/user/${user}`, {
        headers: {
            Authorization: token
        }
    })
}
const PostCart = (body, token) => {
    return Axios.post(CART_ENDPOINT, body, {
        headers: {
            Authorization: token
        }
    })
}
const PutCart = (id, body, token) => {
    return Axios.put(`${CART_ENDPOINT}/${id}`, body, {
        headers: {
            Authorization: token
        }
    })
}
const DeleteCart = (id, token) => {
    return Axios.delete(`${CART_ENDPOINT}/${id}`, {
        headers: {
            Authorization: token
        }
    })
}

export {
    RegisterUser,
    VerifyUser,
    LoginUser,
    TokenUser,

    GetProduct,
    GetProductById,
    GetProductBySeller,
    PostProduct,
    PutProduct,
    DeleteProduct,

    GetCategory,
    GetCategoryById,
    PostCategory,
    PutCategory,
    DeleteCategory,

    GetAddress,
    GetAddressById,
    GetAddressByUser,
    PostAddress,
    PutAddress,
    DeleteAddress,

    GetUser,
    GetUserById,
    GetUserByAddress,
    PostUser,
    PutUser,
    DeleteUser,

    GetHistory,
    GetHistoryById,
    GetHistoryBySeller,
    GetHistoryByCustomer,
    PostHistory,
    PutHistory,
    DeleteHistory,

    GetBanner,
    GetBannerById,
    PostBanner,
    PutBanner,
    DeleteBanner,

    GetPayment,
    GetPaymentById,
    PostPayment,
    PutPayment,
    DeletePayment,

    GetCart,
    GetCartById,
    GetCartByUser,
    PostCart,
    PutCart,
    DeleteCart
}
