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
    });
}
const GetProductById = id => {
    return Axios.get(`${PRODUCT_ENDPOINT}/${id}`)
}
const GetProductBySeller = (user, filter) => {
    return Axios.get(`${PRODUCT_ENDPOINT}/seller/${user}`, {
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
    DeleteProduct
}
