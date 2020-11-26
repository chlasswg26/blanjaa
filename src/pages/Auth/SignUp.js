import { Center, Image, Text, Wrap, WrapItem } from '@chakra-ui/react'
import { Fragment } from 'react'
// import { useForm } from 'react-hook-form'
// import { SignUpModel } from '../../utils/Schema'
// import { yupResolver } from '@hookform/resolvers/yup'
import Logo from '../../assets/images/logo.png'

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
            <Wrap
                spacing='1.5em'
                direction='column'
                align='center'
                justify='center'
                marginTop='5em'
            >
                    <WrapItem>
                        <Center>
                            <Image
                                src={Logo}
                                alt={process.env.REACT_APP_SITE_NAME}
                            />
                        </Center>
                    </WrapItem>
                
                <WrapItem>
                    <Center>
                        <Text
                            fontWeight='bold'
                            fontSize={['sm', 'md', 'lg', 'xl']}
                        >
                            Please sign up with your account
                        </Text>
                    </Center>
                </WrapItem>
            </Wrap>
        </Fragment>
    )
}

export default SignUp
