import { Provider as ReduxProvider } from 'react-redux'
import { ChakraProvider, extendTheme, Spinner } from '@chakra-ui/react'
import {
    Router,
    Switch,
    Route
} from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { PersistGate } from 'redux-persist/es/integration/react'
import { createBrowserHistory } from 'history'

import { store, persistor } from './redux/store'

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

import Fonts from './Fonts'
import { Fragment } from 'react'
import MetaElement from './components/MetaElement'

const theme = extendTheme({
    fonts: {
        heading: 'Oswald',
        body: 'Lato',
        mono: 'Montserrat'
    }
})

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

const storage = JSON.parse(localStorage.getItem('storage'))

if (storage?.accessToken) mainPath.splice(6, 3)
if (!storage?.accessToken) mainPath.splice(9, 2)
if (storage?.role === '1') mainPath.pop()
if (storage?.role === '2') mainPath.splice(6, 1)

const App = () => {
    const history = createBrowserHistory()

    return (
        <HelmetProvider>
            <ReduxProvider store={store}>
                <PersistGate
                    loading={
                        <Spinner size='xl' />
                    }
                    persistor={persistor}
                >
                    <ChakraProvider theme={theme}>
                        <Fonts />
                        <Router history={history}>
                            <Switch>
                                { mainPath.map((path, pathIndex) => (
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
                                )) }
                            </Switch>
                        </Router>
                    </ChakraProvider>
                </PersistGate>
            </ReduxProvider>
        </HelmetProvider>
    )
}

export default App
