import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, Box, Flex, Heading, List, ListItem, Stack, Text } from '@chakra-ui/react'
import { FiHome, FiPackage, FiShoppingCart } from 'react-icons/fi'
import { RiSecurePaymentFill } from 'react-icons/ri'
import { MdModeEdit } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'
import { BiSticker } from 'react-icons/bi'
import { useSelector } from 'react-redux'

const fieldListOfLink = [
    {
        parent: 'Store',
        icon: <FiHome size='18px' />,
        iconBackground: 'blue.500',
        parentPath: '/seller/profile',
        children: [
            {
                name: 'Store profile',
                pathTo: '/seller/profile'
            }
        ]
    },
    {
        parent: 'Product',
        icon: <FiPackage size='18px' />,
        iconBackground: '#F36F45',
        parentPath: '/seller/product',
        children: [
            {
                name: 'Manage products',
                pathTo: '/seller/product/inventory'
            },
            {
                name: 'My products',
                pathTo: '/seller/products'
            },
            {
                name: 'Selling products',
                pathTo: '/seller/product/new'
            },
            {
                name: 'Category products',
                pathTo: '/seller/product/category'
            }
        ]
    },
    {
        parent: 'Order',
        icon: <FiShoppingCart size='18px' />,
        iconBackground: '#F3456F',
        parentPath: '/seller/order',
        children: [
            {
                name: 'My order',
                pathTo: '/seller/orders'
            },
            {
                name: 'Order cancel',
                pathTo: '/seller/order/cancel'
            }
        ]
    },
    {
        parent: 'Payment',
        icon: <RiSecurePaymentFill size='18px' />,
        iconBackground: '#2DB554',
        parentPath: '/seller/payment',
        children: [
            {
                name: 'Manage payment',
                pathTo: '/seller/payments'
            },
            {
                name: 'New payment',
                pathTo: '/seller/payment/new'
            },
        ]
    },
    {
        parent: 'Banner',
        icon: <BiSticker size='18px' />,
        iconBackground: '#079FF7',
        parentPath: '/seller/banner',
        children: [
            {
                name: 'Manage banner',
                pathTo: '/seller/banners'
            },
            {
                name: 'New banner',
                pathTo: '/seller/banner/new'
            },
        ]
    }
]

const SellerNavbar = () => {
    const location = useLocation()
    const auth = useSelector(state => state.Auth)
    const storage = auth.login.response

    return (
        <Box
            shadow='md'
            overflow='auto'
            w='22%'
            h='2xl'
        >
            <Flex
                flexDirection='row'
                flexWrap='wrap'
                pt='55.5px'
                pl='80px'
            >
                <Avatar
                    name={storage?.name}
                    srcSet={`${process.env.REACT_APP_API_URL_IMAGE}${storage?.image}`}
                />
                <Stack
                    direction='column'
                    pl='17.5px'
                    spacing={2}
                    align='baseline'
                >
                    <Heading
                        as='h5'
                        size='sm'
                    >
                        {storage?.name}
                    </Heading>
                    <Flex
                        as='span'
                        flexWrap='wrap'
                        flexDirection='row'
                        color='gray.500'
                        fontSize='sm'
                        mt='15px'
                    >
                        <MdModeEdit size='17.5px' />
                        <Text ml='3.5px'>
                            Edit profile
                        </Text>
                    </Flex>
                </Stack>
            </Flex>
            <Accordion
                allowToggle
                spacing={3}
                pt='70px'
                pl='68px'
                w='280px'
            >
                {fieldListOfLink.map((parentField, parentFieldIndex) => {
                    const activeToggle = (
                        child = location.pathname,
                        parent = parentField.parentPath
                    ) => {
                        const searchStringOfPath = child.indexOf(parent)
                        
                        if (searchStringOfPath != -1) return 'black'
                        return 'gray.500'
                    }

                    return (
                        <AccordionItem
                            key={parentFieldIndex}
                            borderY='0'
                            rounded='15px'
                        >
                            <AccordionButton
                                _expanded={{
                                    boxShadow: 'none'
                                }}
                                _active={{
                                    boxShadow: 'none'
                                }}
                                _focus={{
                                    boxShadow: 'none'
                                }}
                            >
                                <Box
                                    bgColor={ parentField.iconBackground }
                                    color='white'
                                    rounded='17px'
                                    p='7px'
                                >
                                    { parentField.icon }
                                </Box>
                                <Box
                                    flex='1'
                                    textAlign='left'
                                    fontSize='12.5px'
                                    fontWeight='600'
                                    pt='5px'
                                    pl='15px'
                                    bg='transparent'
                                    color={activeToggle()}
                                    _hover={{
                                        color: 'gray.500',
                                        opacity: '0.5'
                                    }}
                                    _focus={{
                                        boxShadow: false
                                    }}
                                >
                                    { parentField.parent }
                                </Box>
                                <AccordionIcon color='gray.500' />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <List
                                    spacing={3}
                                    pl='33px'
                                >
                                    { parentField.children.map((children, childrenIndex) => {
                                        const activeLink = location.pathname === children.pathTo ? 'black' : 'gray.500'

                                        return (
                                            <ListItem key={childrenIndex}>
                                                <Flex
                                                    flexWrap='wrap'
                                                    flexDir='row'
                                                    align='self-start'
                                                >
                                                    <Link to={children.pathTo}>
                                                        <Text
                                                            fontSize='12.5px'
                                                            fontWeight='600'
                                                            pt='5px'
                                                            pl='15px'
                                                            bg='transparent'
                                                            color={activeLink}
                                                            _hover={{
                                                                borderBottomColor: 'transparent',
                                                                color: `${activeLink}`,
                                                                opacity: '0.5'
                                                            }}
                                                            _focus={{
                                                                boxShadow: false
                                                            }}
                                                        >
                                                            {children.name}
                                                        </Text>
                                                    </Link>
                                                </Flex>
                                            </ListItem>
                                        )
                                    }) }
                                </List>
                            </AccordionPanel>
                        </AccordionItem>
                    )
                }) }
            </Accordion>
        </Box>
    )
}

export default SellerNavbar
