import { Fragment } from 'react'
import GuestNavbar from '../../components/Navbar/GuestNavbar'
import MetaElement from '../../components/MetaElement'
import Breadcrumbs from '../../components/Breadcrumbs'
import { Box, Flex, Text } from '@chakra-ui/react'

const element = {
    title: process.env.REACT_APP_SITE_NAME,
    separator: ' - '
}
const breadcrumbLists = [
    {
        item: 'Product',
        link: '/product'
    },
    {
        item: 'T-Shirt'
    }
]

const Product = () => {
    return (
        <Fragment>
            <MetaElement
                {...element}
                subtitle='Category'
            />
            <GuestNavbar />
            <Box
                py='3.5%'
                px='6.5%'
                overflow='auto'
                overflowWrap='anywhere'
            >
                <Breadcrumbs
                    separator={
                        <Text color='gray.500'>
                            &gt;
                        </Text>
                    }
                    pack={breadcrumbLists}
                    style={{
                        pl: '17.5px',
                        mb: '42.5px'
                    }}
                />
                <Flex
                    flexDirection='row'
                    flexWrap='wrap'
                >

                </Flex>
            </Box>
        </Fragment>
    )
}

export default Product
