import { Flex } from '@chakra-ui/react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import CustomerContentProfile from '../../../components/Navbar/Side/Customer/Profile/CustomerContentProfile'
import CustomerNavbar from '../../../components/Navbar/Side/Customer/CustomerNavbar'
import UserNavbar from '../../../components/Navbar/UserNavbar'
import CustomerContentAddress from '../../../components/Navbar/Side/Customer/Address/CustomerContentAddress'
import CustomerContentOrder from '../../../components/Navbar/Side/Customer/Orders/CustomerContentOrder'
import MetaElement from '../../../components/MetaElement'

const listPath = [
    {
        pathTo: '/customer/profile',
        component: CustomerContentProfile,
        subtitle: 'Customer Profile'
    },
    {
        pathTo: '/customer/address',
        component: CustomerContentAddress,
        subtitle: 'Customer Address'
    },
    {
        pathTo: '/customer/orders',
        component: CustomerContentOrder,
        subtitle: 'Customer Orders'
    }
]

const element = {
    title: process.env.REACT_APP_SITE_NAME,
    separator: ' - '
}

const Customer = () => {
    const auth = useSelector(state => state.Auth)
    const storage = auth.login.response

    return storage?.accessToken ? (
        storage?.role === '1' ? (
            <Fragment>
                <UserNavbar />
                <Flex
                    flexDirection='row'
                    flexWrap='wrap'
                    overflow='auto'
                    overflowWrap='anywhere'
                >
                    <CustomerNavbar />
                    <Switch>
                        {listPath.map((customerPath, customerPathIndex) => (
                            <Route
                                key={customerPathIndex}
                                path={customerPath.pathTo}
                                exact={customerPath.pathTo === '/customer/profile' ? true : false}
                            >
                                <Fragment>
                                    <MetaElement
                                        {...element}
                                        subtitle={customerPath.subtitle}
                                    />
                                    <customerPath.component />
                                </Fragment>
                            </Route>
                        ))}
                    </Switch>
                </Flex>
            </Fragment>
        ) : (
            <Redirect to='/seller' />
        )
    ) : (
        <Redirect to='/auth/signin' />
    )
}

export default Customer
