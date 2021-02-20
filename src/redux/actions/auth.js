import {
    RegisterAction,
    VerifyAction,
    LoginAction,
    TokenAction,
    LogoutAction,
    ResetAuthStateAction
} from './actionTypes'
import {
    RegisterUser,
    VerifyUser,
    LoginUser,
    TokenUser,
    LogoutUser
} from '../../utils/Http'

const RegisterActionCreator = body => {
    return {
        type: RegisterAction,
        payload: RegisterUser(body)
    }
}
const VerifyActionCreator = body => {
    return {
        type: VerifyAction,
        payload: VerifyUser(body)
    }
}
const LoginActionCreator = body => {
    return {
        type: LoginAction,
        payload: LoginUser(body)
    }
}
const TokenActionCreator = body => {
    return {
        type: TokenAction,
        payload: TokenUser(body)
    }
}
const LogoutActionCreator = () => {
    return {
        type: LogoutAction,
        payload: LogoutUser()
    }
}
const ResetAuthStateActionCreator = () => {
    return {
        type: ResetAuthStateAction
    }
}

export {
    RegisterActionCreator,
    VerifyActionCreator,
    LoginActionCreator,
    TokenActionCreator,
    LogoutActionCreator,
    ResetAuthStateActionCreator
}
