import { Image, Text, Box, Link, Center, Spacer, Alert, AlertIcon, AlertTitle, AlertDescription, Wrap, WrapItem } from '@chakra-ui/react'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import { containerStyles, textFirstStyles, textSecondStyles, wrapperStyles } from '../../assets/styles/Forms/Verify'
import Verification from '../../components/Forms/Verify/Verification'

const Verify = () => {
    const auth = useSelector(state => state.Auth)
    const storage = auth.login.response
    const verify = useSelector(state => state.Verify)
    const history = useHistory()
    
    !verify.register.response?.preview && !verify.register.response?.email && history.replace('/auth/signup')
    storage?.accessToken && history.replace('/')

    return (
        <Fragment>
            <Box {...containerStyles}>
                <Image
                    src={Logo}
                    alt={process.env.REACT_APP_SITE_NAME}
                    fallbackSrc='https://via.placeholder.com/160x70'
                />

                <Text {...textFirstStyles}>
                    You need to put verification code to activate your account
                </Text>

                <Wrap {...wrapperStyles}>
                    <WrapItem>
                        { auth?.verify?.isRejected && (
                            <Alert
                                status={(auth?.verify?.response?.status === 500 ? 'error' : 'warning')}
                            >
                                <AlertIcon />
                                <AlertTitle mr={2}>
                                    { auth?.verify?.response?.status === 500 ? 'Server error:' : 'Something error:' }
                                </AlertTitle>
                                <AlertDescription>
                                    { auth?.verify?.errorMessage }
                                </AlertDescription>
                            </Alert>
                        ) }
                    </WrapItem>

                    <WrapItem>
                        { auth?.verify?.isFulfilled && (
                            <Alert status='success'>
                                <AlertIcon />
                                <AlertTitle mr={2}>
                                    Well done!
                                </AlertTitle>
                                <AlertDescription>
                                    { auth?.verify?.response?.message }
                                </AlertDescription>
                            </Alert>
                        ) }
                    </WrapItem>
                </Wrap>

                { verify.register.response?.preview && (
                    <Fragment>
                        <Spacer mt='48px' />

                        <Center>
                            <Link
                                href={verify.register.response?.preview}
                                target='_blank'
                            >
                                <Text {...textSecondStyles}>
                                    Click here to get verification code!
                                </Text>
                            </Link>
                        </Center>
                    </Fragment>
                ) }
                
                <Center mt='80px'>
                    <Verification />
                </Center>
            </Box>
        </Fragment>
    )
}

export default Verify
