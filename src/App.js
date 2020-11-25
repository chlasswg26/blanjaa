import './assets/styles/App.css'
import { Provider } from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import { createBrowserHistory } from 'history'

import store from './redux/store'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/Auth/SignIn'
import SignUp from './pages/Auth/SignUp'

const App = () => {
    const history = createBrowserHistory()

    return (
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route path='/' component={Dashboard} exact />
                    <Route path='/auth/signin' component={SignIn} />
                    <Route path='/auth/signup' component={SignUp} />
                </Switch>
            </Router>
        </Provider>
    )
}

export default App
