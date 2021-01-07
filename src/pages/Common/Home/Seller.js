import { Flex } from '@chakra-ui/react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CustomerContentProfile from '../../../components/Navbar/Side/Customer/Profile/CustomerContentProfile'
import SellerNavbar from '../../../components/Navbar/Side/Seller/SellerNavbar'
import UserNavbar from '../../../components/Navbar/UserNavbar'
import CustomerContentAddress from '../../../components/Navbar/Side/Customer/Address/CustomerContentAddress'
import CustomerContentOrder from '../../../components/Navbar/Side/Customer/Orders/CustomerContentOrder'

const routes = [
    {
        path: '/user/profile',
        exact: true,
        main: () => <CustomerContentProfile />
    },
    {
        path: '/user/address',
        main: () => <CustomerContentAddress />
    },
    {
        path: '/user/orders',
        main: () => <CustomerContentOrder />
    }
]

const Seller = () => {
    return (
        <Router>
            <UserNavbar />
            <Flex
                flexDirection='row'
                flexWrap='wrap'
                overflow='auto'
                overflowWrap='anywhere'
            >
                <SellerNavbar />
                <Switch>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            children={<route.main />}
                        />
                    ))}
                </Switch>
            </Flex>
        </Router>
    )
}

export default Seller
