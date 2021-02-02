import { Provider as ReduxProvider } from 'react-redux'
import { ChakraProvider, extendTheme, Spinner } from '@chakra-ui/react'
import { HelmetProvider } from 'react-helmet-async'
import { PersistGate } from 'redux-persist/es/integration/react'

import { store, persistor } from './redux/store'

import Fonts from './Fonts'
import AppRoutes from './AppRoutes'

const theme = extendTheme({
    fonts: {
        heading: 'Oswald',
        body: 'Lato',
        mono: 'Montserrat'
    }
})

const App = () => {
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
                        <AppRoutes />
                    </ChakraProvider>
                </PersistGate>
            </ReduxProvider>
        </HelmetProvider>
    )
}

export default App
