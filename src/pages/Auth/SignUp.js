// import { SignUpModel } from '../../utils/Schema'
import { FlexboxGrid } from 'rsuite'
import Nav from '@rsuite/responsive-nav'
import WebFont from 'webfontloader'

WebFont.load({
    google: {
        families: ['Asap:300,400,700', 'Roboto:300']
    }
})

const { Item } = Nav

const SignUp = () => {
    // const [name, setName] = useState()
    // const [email, setEmail] = useState()
    // const [password, setPassword] = useState()
    // const [repeatPassword, setRepeatPassword] = useState()
    // const [formValidation, setFormValidation] = useState()

    // const checkInput = data => {
    //     const result = SignUpModel.check(data)
        
    //     setFormValidation(prevState => ({
    //         ...prevState,
    //         result
    //     }))
    // }

    // const handleChange = event => {
    //     event.preventDefault()

    //     const { name, value } = event.target

    //     switch (name) {
    //         case 'name':
    //             setName(value)
    //             checkInput({
    //                 name: value
    //             })
    //             break
    //         case 'email':
    //             setEmail(value)
    //             checkInput({
    //                 email: value
    //             })
    //             break
    //         case 'password':
    //             setPassword(value)
    //             checkInput({
    //                 password: value
    //             })
    //             break
    //         case 'repeatPassword':
    //             setRepeatPassword(value)
    //             checkInput({
    //                 repeatPassword: value
    //             })
    //             break
    //         default:
    //             break
    //     }
    // }

    return (
        <FlexboxGrid justify='start'>
            <img src='../../assets/images/logo.png' alt={process.env.REACT_APP_SITE_NAME} />
            
            <br />

            <p style={{ fontWeight: 'bold' }}>
                Please sign up with your account
            </p>
            
            <Nav>
                <Item eventKey="A">Item A</Item>
                <Item eventKey="B">Item B</Item>
                <Item eventKey="C">Item C</Item>
                <Item eventKey="D">Item D</Item>
                <Item eventKey="E">Item E</Item>
            </Nav>
        </FlexboxGrid>
    )
}

export default SignUp
