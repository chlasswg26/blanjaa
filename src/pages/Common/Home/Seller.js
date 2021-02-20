import { Fragment } from 'react'
import { Flex } from '@chakra-ui/react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SellerContentProfile from '../../../components/Navbar/Side/Seller/Profile/SellerContentProfile'
import SellerNavbar from '../../../components/Navbar/Side/Seller/SellerNavbar'
import UserNavbar from '../../../components/Navbar/UserNavbar'
import SellerContentProduct from '../../../components/Navbar/Side/Seller/Product/SellerContentProduct'
import SellerContentOrder from '../../../components/Navbar/Side/Seller/Order/SellerContentOrder'
import SellerContentNewProduct from '../../../components/Navbar/Side/Seller/Product/SellerContentNewProduct'
import SellerContentCategoryProduct from '../../../components/Navbar/Side/Seller/Product/SellerContentCategoryProduct'
import SellerContentManagementProduct from '../../../components/Navbar/Side/Seller/Product/SellerContentManagementProduct'
import SellerContentNewPayment from '../../../components/Navbar/Side/Seller/Payment/SellerContentNewPayment'
import SellerContentManagementPayment from '../../../components/Navbar/Side/Seller/Payment/SellerContentManagementPayment'
import SellerContentManagementBanner from '../../../components/Navbar/Side/Seller/Banner/SellerContentManagementBanner'
import SellerContentNewBanner from '../../../components/Navbar/Side/Seller/Banner/SellerContentNewBanner'
import MetaElement from '../../../components/MetaElement'

const listPathOfOrders = [
    '/seller/orders',
    '/seller/order/cancel'
]
const listPath = [
    {
        pathTo: '/seller/profile',
        component: SellerContentProfile,
        subtitle: 'My Profile'
    },
    {
        pathTo: '/seller/product/inventory',
        component: SellerContentManagementProduct,
        subtitle: 'Manage Inventory'
    },
    {
        pathTo: '/seller/products',
        component: SellerContentProduct,
        subtitle: 'My Products'
    },
    {
        pathTo: '/seller/product/new',
        component: SellerContentNewProduct,
        subtitle: 'Sell Product'
    },
    {
        pathTo: '/seller/product/category',
        component: SellerContentCategoryProduct,
        subtitle: 'Manage Category'
    },
    {
        pathTo: listPathOfOrders,
        component: SellerContentOrder,
        subtitle: 'Manage Orders'
    },
    {
        pathTo: '/seller/payments',
        component: SellerContentManagementPayment,
        subtitle: 'Manage Payment'
    },
    {
        pathTo: '/seller/payment/new',
        component: SellerContentNewPayment,
        subtitle: 'New Payment'
    },
    {
        pathTo: '/seller/banners',
        component: SellerContentManagementBanner,
        subtitle: 'Manage Banner'
    },
    {
        pathTo: '/seller/banner/new',
        component: SellerContentNewBanner,
        subtitle: 'Publish Banner'
    }
]

const element = {
    title: process.env.REACT_APP_SITE_NAME,
    separator: ' - '
}

const Seller = () => {
  const auth = useSelector(state => state.Auth)
  const storage = auth.login.response

    return storage?.accessToken ? (
        storage?.role === '2' ? (
            <Fragment>
                <UserNavbar />
                <Flex
                    flexDirection='row'
                    flexWrap='wrap'
                    overflow='auto'
                    overflowWrap='anywhere'
                >
                    <SellerNavbar />
                    <Switch>
                        {listPath.map((sellerPath, sellerPathIndex) => (
                            <Route
                                key={sellerPathIndex}
                                path={sellerPath.pathTo}
                                exact={sellerPath.pathTo === '/seller' ? true : false}
                            >
                                <Fragment>
                                    <MetaElement
                                        {...element}
                                        subtitle={sellerPath.subtitle}
                                    />
                                    <sellerPath.component />
                                </Fragment>
                            </Route>
                        ))}
                    </Switch>
                </Flex>
            </Fragment>
        ) : (
            <Redirect to='/customer' />
        )
    ) : (
        <Redirect to='/auth/signin' />
    )
}

export default Seller
