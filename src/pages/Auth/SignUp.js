import { Fragment } from 'react'
import { Radio } from 'antd'
// import { useForm } from 'react-hook-form'
// import { SignUpModel } from '../../utils/Schema'
// import { yupResolver } from '@hookform/resolvers/yup'
import Logo from '../../assets/images/logo.png'

const { Group, Button } = Radio

const SignUp = () => {
    // const { register, handleSubmit, errors } = useForm({
    //     resolver: yupResolver(SignUpModel)
    // })

    // const [name, setName] = useState()
    // const [email, setEmail] = useState()
    // const [password, setPassword] = useState()
    // const [repeatPassword, setRepeatPassword] = useState()
    // const [formValidation, setFormValidation] = useState()

    // const handleChange = event => {
    //     event.preventDefault()

    //     const { name, value } = event.target

    //     switch (name) {
    //         case 'name':
    //             setName(value)
    //             break
    //         case 'email':
    //             setEmail(value)
    //             break
    //         case 'password':
    //             setPassword(value)
    //             break
    //         case 'repeatPassword':
    //             setRepeatPassword(value)
    //             break
    //         default:
    //             break
    //     }
    // }

    return (
        <Fragment>
            <img src={Logo} alt={process.env.REACT_APP_SITE_NAME} />
            
            <br />

            <p style={{ fontWeight: 'bold' }}>
                Please sign up with your account
            </p>

            <Group defaultValue='a' buttonStyle='solid'>
                <Button value='a' style={{ color: 'red' }}>Hangzhou</Button>
                <Button value='b'>Shanghai</Button>
                <Button value='c'>Beijing</Button>
                <Button value='d'>Chengdu</Button>
            </Group>
        </Fragment>
    )
}

export default SignUp
