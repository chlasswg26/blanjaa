import { Provider as ReduxProvider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async'
import { PersistGate } from 'redux-persist/es/integration/react'
import { BrowserRouter as Router } from 'react-router-dom'

import { store, persistor } from './redux/store'

import Fonts from './Fonts'
import AppRoutes from './AppRoutes'

const App = () => {
    return (
        <HelmetProvider>
            <ReduxProvider store={store}>
                <PersistGate persistor={persistor}>
                    <Fonts />
                    <Router>
                        <AppRoutes />
                    </Router>
                </PersistGate>
            </ReduxProvider>
        </HelmetProvider>
    )
}

export default App
