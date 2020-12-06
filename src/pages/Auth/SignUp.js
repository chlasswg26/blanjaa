import { Image, Tabs, TabList, Tab, Text, TabPanels, TabPanel, Box, Link, Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton, useDisclosure } from '@chakra-ui/react'
import { Fragment } from 'react'
import Logo from '../../assets/images/logo.png'
import { containerStyles, tabStyles, tabWrapStyles, textFirstStyles } from '../../assets/styles/Forms/SignUp'
import Customer from '../../components/Forms/SignUp/Customer'
import Seller from '../../components/Forms/SignUp/Seller'

const SignUp = () => {
    const { isOpen, onOpen } = useDisclosure()

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

                    { !isOpen && (
                        <Alert status="error" onClick={onOpen}>
                            <AlertIcon />
                            <AlertTitle mr={2}>Your browser is outdated!</AlertTitle>
                            <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
                            <CloseButton position="absolute" right="8px" top="8px" />
                        </Alert>
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
