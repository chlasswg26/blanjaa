import { Image, Text, Box, Link, Center } from '@chakra-ui/react'
import { Fragment } from 'react'
import Logo from '../../assets/images/logo.png'
import { containerStyles, textFirstStyles, textSecondStyles } from '../../assets/styles/Forms/Verify'
import Verification from '../../components/Forms/Verify/Verification'

const Verify = () => {
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

                <Center>
                    <Link
                        href='https://www.facebook.com/jr.woles'
                        target='_blank'
                    >
                        <Text {...textSecondStyles}>
                            Click here to get verification code!
                        </Text>
                    </Link>
                </Center>
                
                <Center mt='5rem'>
                    <Verification />
                </Center>
            </Box>
        </Fragment>
    )
}

export default Verify
