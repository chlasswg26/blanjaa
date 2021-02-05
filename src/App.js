import { Provider as ReduxProvider } from 'react-redux'
import { Spinner } from '@chakra-ui/react'
import { HelmetProvider } from 'react-helmet-async'
import { PersistGate } from 'redux-persist/es/integration/react'

import { store, persistor } from './redux/store'

import Fonts from './Fonts'
import AppRoutes from './AppRoutes'

const App = () => {
    return (
        <HelmetProvider>
            <ReduxProvider store={store}>
                <PersistGate persistor={persistor}>
                    <Fonts />
                    <AppRoutes />
                </PersistGate>
            </ReduxProvider>
        </HelmetProvider>
    )
}

export default App
