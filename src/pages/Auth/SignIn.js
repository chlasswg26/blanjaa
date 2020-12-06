import { Image, Tabs, TabList, Tab, Text, TabPanels, TabPanel, Box, Link } from '@chakra-ui/react'
import { Fragment } from 'react'
import Logo from '../../assets/images/logo.png'
import { containerStyles, tabStyles, tabWrapStyles, textFirstStyles } from '../../assets/styles/Forms/SignIn'
import Customer from '../../components/Forms/SignIn/Customer'
import Seller from '../../components/Forms/SignIn/Seller'

const SignIn = () => {
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
