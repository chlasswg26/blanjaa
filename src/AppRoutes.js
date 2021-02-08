import { Fragment, useEffect, useState } from 'react'
import {
    Switch,
    Route,
    useHistory
} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

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
import { ResetAuthStateActionCreator } from './redux/actions/auth'

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
    }
]

const element = {
    title: process.env.REACT_APP_SITE_NAME,
    separator: ' - '
}

const AppRoutes = () => {
    const auth = useSelector(state => state.Auth)
    const storage = auth.login.response
    const [filterPath, setFilterPath] = useState([])
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if (storage) {
            storage?.accessToken && mainPath.splice(6, 3)
            
            setFilterPath(mainPath)
            
            const Jwt = (token = storage?.accessToken) => {
                let decodedToken

                if (token) {
                    decodedToken = token.split('.')[1]
                    decodedToken = decodedToken.replace(/-/g, '+').replace(/_/g, '/')
                    decodedToken = Buffer.from(decodedToken, 'base64')
                    decodedToken = decodedToken.toString('ascii')
                    decodedToken = JSON.parse(decodedToken)
                }

                return decodedToken
            }

            const token = Jwt()

            if (token?.exp < Date.now() / 1000) {
                dispatch(ResetAuthStateActionCreator())
                history.push('/auth/signin')
            }
        }
    }, [
        storage,
        history
    ])
    
    return (
        <Fragment>
            <Switch>
                {filterPath.map((path, pathIndex) => (
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
            { storage?.accessToken && (
                storage?.role === '1' ? <Customer /> : (storage?.role === '2' && <Seller />)
            ) }
        </Fragment>
    )
}

export default AppRoutes
