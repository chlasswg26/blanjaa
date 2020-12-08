import { Image, Tabs, TabList, Tab, Text, TabPanels, TabPanel, Box, Link, Alert, AlertIcon, AlertTitle, AlertDescription, Spacer, Center } from '@chakra-ui/react'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import Logo from '../../assets/images/logo.png'
import { containerStyles, tabStyles, tabWrapStyles, textFirstStyles } from '../../assets/styles/Forms/SignUp'
import Customer from '../../components/Forms/SignUp/Customer'
import Seller from '../../components/Forms/SignUp/Seller'

const SignUp = () => {
    const auth = useSelector(state => state.Auth)

    return (
        <Fragment>
            <Box {...containerStyles}>
                <Image
                    src={Logo}
                    alt={process.env.REACT_APP_SITE_NAME}
                    fallbackSrc='https://via.placeholder.com/160x70'
                />
                    
                <Text {...textFirstStyles}>
                    Please sign up with your account
                </Text>

                <Tabs {...tabWrapStyles}>
                    <TabList mb='4rem'>
                        <Tab
                            {...tabStyles}
                            borderRightColor='transparent'
                        >
                            Customer
                        </Tab>
                        <Tab
                            {...tabStyles}
                            borderLeftColor='transparent'
                        >
                            Seller
                        </Tab>
                    </TabList>

                    { auth.isRejected && (
                        <Fragment>
                            <Spacer mt='3rem' />
                            <Center>
                                <Alert
                                    status={(auth.response.status === 500 ? 'error' : 'warning')}
                                >
                                    <AlertIcon />
                                    <AlertTitle mr={2}>
                                        { auth.response.status === 500 ? 'Server error:' : 'Something error:' }
                                    </AlertTitle>
                                    <AlertDescription>
                                        { auth.errorMessage }
                                    </AlertDescription>
                                </Alert>
                            </Center>
                        </Fragment>
                    ) }

                    { auth.isFulfilled && (
                        <Fragment>
                            <Spacer mt='3rem' />

                            <Center>
                                <Alert
                                    status='success'
                                >
                                    <AlertIcon />
                                    <AlertTitle mr={2}>
                                        Well done!
                                    </AlertTitle>
                                    <AlertDescription>
                                        Redirecting...
                                    </AlertDescription>
                                </Alert>
                            </Center>
                        </Fragment>
                    ) }

                    <TabPanels>
                        <TabPanel>
                            <Customer />
                        </TabPanel>
                        <TabPanel>
                            <Seller />
                        </TabPanel>
                    </TabPanels>
                </Tabs>

                <Text
                    fontSize='md'
                    mt='3rem'
                >
                    Already have a { process.env.REACT_APP_SITE_NAME } account?
                    <Link
                        href='/auth/signin'
                        color='#DB3022'
                        children=' Login'
                    />
                </Text>
            </Box>
        </Fragment>
    )
}

export default SignUp
