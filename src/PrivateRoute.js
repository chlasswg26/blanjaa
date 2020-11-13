import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const useToken = () => {
    const token = localStorage.getItem('token')
    const history = useHistory()

    useEffect(() => {
        if (!token) {
            history.replace('/auth/signin')
        }
    }, [token, history])
}

const useAdmin = () => {
    const role = localStorage.getItem('role')
    const history = useHistory()

    useEffect(() => {
        if (role === '1') {
            history.replace('/auth/signin')
        }
    }, [role, history])
}

const Auth = WrappedComponent => {
    useToken()

    return (props) => {
        return (
            <WrappedComponent>
                {...props}
            </WrappedComponent>
        )
    }
}

const Admin = WrappedComponent => {
    useAdmin()

    return (props) => {
        return (
            <WrappedComponent>
                {...props}
            </WrappedComponent>
        )
    }
}

export {
    Auth,
    Admin
}
