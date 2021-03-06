import { Avatar, Box, Flex, Heading, List, ListItem, Stack, Text } from '@chakra-ui/react'
import { FiUser } from 'react-icons/fi'
import { IoClipboardOutline, IoLocationOutline } from 'react-icons/io5'
import { MdModeEdit } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

const fieldListOfLink = [
    {
        name: 'My account',
        icon: <FiUser size='18px' />,
        iconBackground: 'blue.500',
        pathTo: '/customer/profile'
    },
    {
        name: 'Shipping Address',
        icon: <IoLocationOutline size='18px' />,
        iconBackground: '#F36F45',
        pathTo: '/customer/address'
    },
    {
        name: 'My order',
        icon: <IoClipboardOutline size='18px' />,
        iconBackground: '#F3456F',
        pathTo: '/customer/orders'
    }
]

const CustomerNavbar = () => {
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
                pl='85.5px'
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
            <List
                spacing={3}
                pt='70px'
                pl='85.5px'
            >
                { fieldListOfLink.map((field, fieldIndex) => {
                    const activeLink = location.pathname === field.pathTo ? 'black' : 'gray.500'

                    return (
                        <ListItem key={fieldIndex}>
                            <Flex
                                flexWrap='wrap'
                                flexDir='row'
                                align='self-start'
                            >
                                <Box
                                    bgColor={field.iconBackground}
                                    color='white'
                                    rounded='17px'
                                    p='7px'
                                >
                                    { field.icon }
                                </Box>
                                <Link to={field.pathTo}>
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
                                        { field.name }
                                    </Text>
                                </Link>
                            </Flex>
                        </ListItem>
                    )
                }) }
            </List>
        </Box>
    )
}

export default CustomerNavbar
