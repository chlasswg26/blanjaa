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

const App = () => {
    const history = createBrowserHistory()

    return (
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route path='/' component={Dashboard} exact />
                    <Route path='/auth/signin' component={SignIn} />
                </Switch>
            </Router>
        </Provider>
    )
}

export default App
