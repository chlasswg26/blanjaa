import { Image, Tabs, TabList, Tab, Text, TabPanels, TabPanel, Box, Link, Spacer, Center, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'
import { Fragment } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import { containerStyles, tabStyles, tabWrapStyles, textFirstStyles } from '../../assets/styles/Forms/SignIn'
import Customer from '../../components/Forms/SignIn/Customer'
import Seller from '../../components/Forms/SignIn/Seller'

const SignIn = () => {
    const { state } = useLocation()
    const token = localStorage.getItem('token')
    const history = useHistory()

    token && history.replace('/')

    return (
        <Fragment>
            <Box {...containerStyles}>
                <Image
                    src={Logo}
                    alt={process.env.REACT_APP_SITE_NAME}
                    fallbackSrc='https://via.placeholder.com/160x70'
                />

                <Text {...textFirstStyles}>
                    Please login with your account
                </Text>

                <Tabs {...tabWrapStyles}>
                    <TabList mb='64px'>
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
                    
                    { state?.message && (
                        <Fragment>
                            <Spacer mt='48px' />

                            <Center>
                                <Alert status='success'>
                                    <AlertIcon />
                                    <AlertTitle mr={2}>
                                        Well done!
                                    </AlertTitle>
                                    <AlertDescription>
                                        { state?.message }
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
                    mt='48px'
                >
                    Don't have a { process.env.REACT_APP_SITE_NAME } account?
                    <Link
                        href='/auth/signup'
                        color='#DB3022'
                        children=' Register'
                    />
                </Text>
            </Box>
        </Fragment>
    )
}

export default SignIn
