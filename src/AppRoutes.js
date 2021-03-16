import { Fragment, useEffect } from 'react'
import {
    Switch,
    Route,
    useHistory,
    Redirect
} from 'react-router-dom'
import moment from 'moment'

import Dashboard from './pages/Dashboard'
import SignUp from './pages/Auth/SignUp'
import SignIn from './pages/Auth/SignIn'
import Verify from './pages/Auth/Verify'
import Customer from './pages/Common/Home/Customer'
import Seller from './pages/Common/Home/Seller'
import Cart from './pages/Common/Cart'
import Checkout from './pages/Common/Checkout'
import Search from './pages/Common/Search'
import Category from './pages/Common/Category'
import Product from './pages/Common/Product'

import MetaElement from './components/MetaElement'
import { useSelector } from 'react-redux'
import { persistor } from './redux/store'

let mainPath = [
    {
        pathTo: '/',
        component: Dashboard,
        subtitle: 'Dashboard'
    },
    {
        pathTo: '/search',
        component: Search,
        subtitle: false
    },
    {
        pathTo: '/product',
        component: Product,
        subtitle: false
    },
    {
        pathTo: '/category',
        component: Category,
        subtitle: false
    },
    {
        pathTo: '/cart',
        component: Cart,
        subtitle: 'My Bag'
    },
    {
        pathTo: '/checkout',
        component: Checkout,
        subtitle: 'Checkout'
    },
    {
        pathTo: '/auth/signin',
        component: SignIn,
        subtitle: 'Login'
    },
    {
        pathTo: '/auth/signup',
        component: SignUp,
        subtitle: 'Register'
    },
    {
        pathTo: '/auth/verify',
        component: Verify,
        subtitle: 'Verification'
    },
    {
        pathTo: '/customer',
        component: Customer,
        subtitle: 'Customer'
    },
    {
        pathTo: '/seller',
        component: Seller,
        subtitle: 'Seller'
    }
]

const element = {
    title: process.env.REACT_APP_SITE_NAME,
    separator: ' - '
}

const AppRoutes = () => {
    const auth = useSelector(state => state.Auth)
    const storage = auth.login.response
    const history = useHistory()

    const Jwt = (token = null) => {
        let decodedToken = null

        if (token) {
            decodedToken = token.split('.')[1]
            decodedToken = decodedToken.replace(/-/g, '+').replace(/_/g, '/')
            decodedToken = Buffer.from(decodedToken, 'base64')
            decodedToken = decodedToken.toString('ascii')
            decodedToken = JSON.parse(decodedToken)

            return decodedToken
        }

        return decodedToken
    }

    useEffect(() => {
        return history.listen(() => {
            if (storage?.accessToken) {
                const JwtToken = Jwt(storage?.accessToken)
                const today = Date.now()
                
                if (process.env.NODE_ENV === 'development') {
                    console.log('token expiry', moment(JwtToken?.exp * 1000).endOf('hour').fromNow())
                    console.log('is expired?', eval(today >= JwtToken?.exp * 1000))
                }

                if (today >= JwtToken?.exp * 1000) {
                    persistor.purge(['Login'])
                    return <Redirect exact to='/auth/signin' />
                }
            }

        })
    }, [storage, history])

    return (
        <Fragment>
            <Switch>
                {mainPath.map((path, pathIndex) => (
                    <Route
                        key={pathIndex}
                        path={path.pathTo}
                        exact={path.pathTo === '/' ? true : false}
                    >
                        <Fragment>
                            <MetaElement
                                {...element}
                                subtitle={path.subtitle}
                            />
                            <path.component />
                        </Fragment>
                    </Route>
                ))}
            </Switch>
        </Fragment>
    )
}

export default AppRoutes
