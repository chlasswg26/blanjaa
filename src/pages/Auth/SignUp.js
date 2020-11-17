import { useState } from 'react'
import { SignUpModel } from '../../utils/Schema'

const SignUp = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [repeatPassword, setRepeatPassword] = useState()
    const [formValidation, setFormValidation] = useState()

    const checkInput = data => {
        const result = SignUpModel.check(data)
        
        setFormValidation(prevState => ({
            ...prevState,
            result
        }))
    }

    const handleChange = event => {
        event.preventDefault()

        const { name, value } = event.target

        switch (name) {
            case 'name':
                setName(value)
                checkInput({
                    name: value
                })
                break
            case 'email':
                setEmail(value)
                checkInput({
                    email: value
                })
                break
            case 'password':
                setPassword(value)
                checkInput({
                    password: value
                })
                break
            case 'repeatPassword':
                setRepeatPassword(value)
                checkInput({
                    repeatPassword: value
                })
                break
            default:
                break
        }
    }
}

export default SignUp
