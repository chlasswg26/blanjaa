import { Provider as ReduxProvider } from 'react-redux'
import { ChakraProvider, Spinner } from '@chakra-ui/react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import { PersistGate } from 'redux-persist/es/integration/react'

import { store, persistor } from './redux/store'

// import Dashboard from './pages/Dashboard'
import SignUp from './pages/Auth/SignUp'
import SignIn from './pages/Auth/SignIn'
import Verify from './pages/Auth/Verify'

const App = () => {
    return (
        <ReduxProvider store={store}>
            <PersistGate
                loading={<Spinner size='xl' />}
                persistor={persistor}
            >
                <ChakraProvider>
                    <Router forceRefresh={true}>
                        <Switch>
                            {/* <Route path='/' exact>
                                <Dashboard />
                            </Route> */}
                            <Route path='/auth/signup'>
                                <SignUp />
                            </Route>
                            <Route path='/auth/signin'>
                                <SignIn />
                            </Route>
                            <Route path='/auth/verify'>
                                <Verify />
                            </Route>
                        </Switch>
                    </Router>
                </ChakraProvider>
            </PersistGate>
        </ReduxProvider>
    )
}

export default App
