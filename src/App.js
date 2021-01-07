import { Fragment } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { ChakraProvider, Spinner } from '@chakra-ui/react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import { PersistGate } from 'redux-persist/es/integration/react'

import { store, persistor } from './redux/store'

import Dashboard from './pages/Dashboard'
import SignUp from './pages/Auth/SignUp'
import SignIn from './pages/Auth/SignIn'
import Verify from './pages/Auth/Verify'
import Customer from './pages/Common/Home/Customer'
import Cart from './pages/Common/Cart'
import Checkout from './pages/Common/Checkout'
import Search from './pages/Common/Search'

const App = () => {
    const token = localStorage.getItem('token')
    // const role = localStorage.getItem('role')
    
    return (
        <ReduxProvider store={store}>
            <PersistGate
                loading={
                    <Spinner size='xl' />
                }
                persistor={persistor}
            >
                <ChakraProvider>
                    <Router>
                        <Switch>
                            <Route path='/' exact>
                                <Dashboard />
                            </Route>
                            { !token && (
                                <Fragment>
                                    <Route path='/auth/signup'>
                                        <SignUp />
                                    </Route>
                                    <Route path='/auth/signin'>
                                        <SignIn />
                                    </Route>
                                    <Route path='/auth/verify'>
                                        <Verify />
                                    </Route>
                                    <Route path='/user/(profile|address|orders)'>
                                        <Customer />
                                    </Route>
                                    <Route path='/cart'>
                                        <Cart />
                                    </Route>
                                    <Route path='/checkout'>
                                        <Checkout />
                                    </Route>
                                    <Route path='/search'>
                                        <Search />
                                    </Route>
                                </Fragment>
                            )}
                        </Switch>
                    </Router>
                </ChakraProvider>
            </PersistGate>
        </ReduxProvider>
    )
}

export default App
