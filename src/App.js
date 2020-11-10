import { Provider } from 'react-redux'
import store from './redux/store'

const App = () => {
    return (
        <Provider store={store}>
            <div />
        </Provider>
    )
}

export default App
