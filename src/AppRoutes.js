import { Fragment, useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import { useSelector } from 'react-redux'

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
    const [filterPath, setFilterPath] = useState([])

    useEffect(() => {
        if (storage) {
            storage?.accessToken && mainPath.splice(6, 3)
            !storage?.accessToken && mainPath.splice(9, 2)
            storage?.role === '1' && mainPath.pop()
            storage?.role === '2' && mainPath.splice(6, 1)

            setFilterPath(mainPath)
        }
    }, [storage])
    
    return (
        <Router>
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
        </Router>
    )
}

export default AppRoutes
