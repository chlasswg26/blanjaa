const pending = '_PENDING'
const rejected = '_REJECTED'
const fulfilled = '_FULFILLED'

const RegisterAction = 'REGISTER'
const VerifyAction = 'VERIFY'
const LoginAction = 'LOGIN'
const TokenAction = 'TOKEN'
const LogoutAction = 'LOGOUT'

const GetCategoryAction = 'GET_CATEGORY'
const GetCategoryByIdAction = 'GET_CATEGORY_BY_ID'
const PostCategoryAction = 'POST_CATEGORY'
const PutCategoryAction = 'PUT_CATEGORY'
const DeleteCategoryAction = 'DELETE_CATEGORY'

const GetBannerAction = 'GET_BANNER'
const GetBannerByIdAction = 'GET_BANNER_BY_ID'
const PostBannerAction = 'POST_BANNER'
const PutBannerAction = 'PUT_BANNER'
const DeleteBannerAction = 'DELETE_BANNER'

const GetPaymentAction = 'GET_PAYMENT'
const GetPaymentByIdAction = 'GET_PAYMENT_BY_ID'
const PostPaymentAction = 'POST_PAYMENT'
const PutPaymentAction = 'PUT_PAYMENT'
const DeletePaymentAction = 'DELETE_PAYMENT'

const GetAddressAction = 'GET_ADDRESS'
const GetAddressByIdAction = 'GET_ADDRESS_BY_ID'
const GetAddressByUserAction = 'GET_ADDRESS_BY_USER'
const PostAddressAction = 'POST_ADDRESS'
const PutAddressAction = 'PUT_ADDRESS'
const DeleteAddressAction = 'DELETE_ADDRESS'

const GetUserAction = 'GET_USER'
const GetUserByIdAction = 'GET_USER_BY_ID'
const GetUserByAddressAction = 'GET_USER_BY_ADDRESS'
const PostUserAction = 'POST_USER'
const PutUserAction = 'PUT_USER'
const DeleteUserAction = 'DELETE_USER'

const GetCartAction = 'GET_CART'
const GetCartByIdAction = 'GET_CART_BY_ID'
const GetCartByUserAction = 'GET_CART_BY_USER'
const PostCartAction = 'POST_CART'
const PutCartAction = 'PUT_CART'
const DeleteCartAction = 'DELETE_CART'

const GetProductAction = 'GET_PRODUCT'
const GetProductByIdAction = 'GET_PRODUCT_BY_ID'
const GetProductBySellerAction = 'GET_PRODUCT_BY_SELLER'
const PostProductAction = 'POST_PRODUCT'
const PutProductAction = 'PUT_PRODUCT'
const DeleteProductAction = 'DELETE_PRODUCT'

const GetHistoryAction = 'GET_HISTORY'
const GetHistoryByIdAction = 'GET_HISTORY_ID'
const GetHistoryBySellerAction = 'GET_HISTORY_BY_SELLER'
const GetHistoryByCustomerAction = 'GET_HISTORY_BY_CUSTOMER'
const PostHistoryAction = 'POST_HISTORY'
const PutHistoryAction = 'PUT_HISTORY'
const DeleteHistoryAction = 'DELETE_HISTORY'

const GuestAddToCart = 'ADD_TO_CART'
const GuestRemoveFromCart = 'REMOVE_FROM_CART'
const GuestAddQuantityToCart = 'ADD_QUANTITY'
const GuestSubQuantityToCart = 'SUB_QUANTITY'
const GuestEmptyCart = 'EMPTY_CART'

export {
    pending,
    rejected,
    fulfilled,

    RegisterAction,
    VerifyAction,
    LoginAction,
    TokenAction,
    LogoutAction,

    GetCategoryAction,
    GetCategoryByIdAction,
    PostCategoryAction,
    PutCategoryAction,
    DeleteCategoryAction,

    GetBannerAction,
    GetBannerByIdAction,
    PostBannerAction,
    PutBannerAction,
    DeleteBannerAction,

    GetPaymentAction,
    GetPaymentByIdAction,
    PostPaymentAction,
    PutPaymentAction,
    DeletePaymentAction,

    GetAddressAction,
    GetAddressByIdAction,
    GetAddressByUserAction,
    PostAddressAction,
    PutAddressAction,
    DeleteAddressAction,

    GetUserAction,
    GetUserByIdAction,
    GetUserByAddressAction,
    PostUserAction,
    PutUserAction,
    DeleteUserAction,

    GetCartAction,
    GetCartByIdAction,
    GetCartByUserAction,
    PostCartAction,
    PutCartAction,
    DeleteCartAction,

    GetProductAction,
    GetProductByIdAction,
    GetProductBySellerAction,
    PostProductAction,
    PutProductAction,
    DeleteProductAction,

    GetHistoryAction,
    GetHistoryByIdAction,
    GetHistoryBySellerAction,
    GetHistoryByCustomerAction,
    PostHistoryAction,
    PutHistoryAction,
    DeleteHistoryAction,

    GuestAddToCart,
    GuestRemoveFromCart,
    GuestAddQuantityToCart,
    GuestSubQuantityToCart,
    GuestEmptyCart
}
