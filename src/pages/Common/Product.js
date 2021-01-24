import { Fragment } from 'react'
import GuestNavbar from '../../components/Navbar/GuestNavbar'
import MetaElement from '../../components/MetaElement'
import Breadcrumbs from '../../components/Breadcrumbs'
import { Box, Button, Divider, Flex, IconButton, Image, Stack, Text } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import UserNavbar from '../../components/Navbar/UserNavbar'

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
const mapping = [1, 2, 3, 4]

const Product = () => {
    const storage = JSON.parse(localStorage.getItem('storage'))

    return (
        <Fragment>
            <MetaElement
                {...element}
                subtitle='Category'
            />
            { storage?.accessToken ? (
                <UserNavbar />
            ) : (
                <GuestNavbar />
            ) }
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
                    mb='45px'
                >
                    <Image
                        srcSet='https://bit.ly/sage-adebayo'
                        w={275}
                        h={325}
                        crossOrigin='use-credentials'
                        fit='cover'
                        rounded='10px'
                    />
                    <Stack pl='30px'>
                        <Text
                            fontStyle='normal'
                            fontWeight='700'
                            fontSize='30px'
                        >
                            Baju muslim pria
                        </Text>
                        <Box
                            as='span'
                            color='gray.500'
                            fontSize='md'
                            fontWeight='700'
                        >
                            Zalora Cloth
                        </Box>
                        <Box
                            as='span'
                            color='gray.500'
                            fontSize='lg'
                            fontWeight='500'
                            pt='40px'
                        >
                            Price
                            <Text
                                fontWeight='800'
                                fontSize='35px'
                                textColor='black'
                            >
                                Rp 55,000
                            </Text>
                        </Box>
                        <Box
                            as='span'
                            fontSize='lg'
                            fontWeight='700'
                            pt='40px'
                        >
                            Quantity
                            <Flex
                                flexDirection='row'
                                flexWrap='wrap'
                                pt='10px'
                            >
                                <IconButton
                                    variant='outline'
                                    aria-label='Decrement'
                                    color='white'
                                    bg='gray.400'
                                    rounded='20px'
                                    _hover={{
                                        bg: 'transparent',
                                        color: '#DB3022',
                                        borderColor: '#DB3022'
                                    }}
                                    _active={{
                                        bg: 'transparent',
                                        color: '#DB3022',
                                        borderColor: '#DB3022'
                                    }}
                                    _focus={{
                                        boxShadow: 'none'
                                    }}
                                    icon={
                                        <MinusIcon />
                                    }
                                />
                                <Text
                                    pl='15px'
                                    pr='15px'
                                    pt='7px'
                                    fontWeight='700'
                                    fontSize='15px'
                                >
                                    1
                                </Text>
                                <IconButton
                                    variant='outline'
                                    aria-label='Increment'
                                    color='black'
                                    bg='white'
                                    rounded='20px'
                                    _hover={{
                                        bg: 'transparent',
                                        color: '#DB3022',
                                        borderColor: '#DB3022'
                                    }}
                                    _active={{
                                        bg: 'transparent',
                                        color: '#DB3022',
                                        borderColor: '#DB3022'
                                    }}
                                    _focus={{
                                        boxShadow: 'none'
                                    }}
                                    icon={
                                        <AddIcon />
                                    }
                                />
                            </Flex>
                        </Box>
                        <Stack
                            direction='row'
                            spacing={3}
                            pt='50px'
                        >
                            <Button
                                variant='outline'
                                rounded='40px'
                                w='155px'
                                bg='transparent'
                                borderColor='black'
                                _hover={{
                                    bg: 'transparent',
                                    color: '#DB3022',
                                    borderColor: '#DB3022'
                                }}
                                _active={{
                                    bg: 'transparent',
                                    color: '#DB3022',
                                    borderColor: '#DB3022'
                                }}
                                _focus={{
                                    boxShadow: false
                                }}
                            >
                                Add bag
                            </Button>
                            <Button
                                variant='outline'
                                rounded='40px'
                                w='355px'
                                bg='#DB3022'
                                textColor='white'
                                borderColor='#DB3022'
                                _hover={{
                                    bg: 'transparent',
                                    color: '#DB3022',
                                    borderColor: '#DB3022'
                                }}
                                _active={{
                                    bg: 'transparent',
                                    color: '#DB3022',
                                    borderColor: '#DB3022'
                                }}
                                _focus={{
                                    boxShadow: false
                                }}
                            >
                                Buy Now
                            </Button>
                        </Stack>
                    </Stack>
                </Flex>
                <Stack
                    spacing={10}
                    pb='60px'
                >
                    <Text
                        fontStyle='normal'
                        fontWeight='700'
                        fontSize='25px'
                    >
                        Informasi Produk
                    </Text>
                    <Text
                        fontStyle='normal'
                        fontWeight='700'
                        fontSize='20px'
                    >
                        Condition
                        <Text
                            fontStyle='normal'
                            fontWeight='600'
                            fontSize='18.5px'
                            textColor='#DB3022'
                            >
                                New
                        </Text>
                    </Text>
                    <Text
                        fontStyle='normal'
                        fontWeight='700'
                        fontSize='20px'
                    >
                        Description
                        <Text
                            fontStyle='normal'
                            fontWeight='600'
                            fontSize='13.5px'
                            textColor='gray.500'
                            pt='7.5px'
                        >
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
                        </Text>
                    </Text>
                </Stack>
                <Divider borderColor='gray.500'/>
                <Text
                    fontStyle='normal'
                    fontWeight='700'
                    fontSize='30px'
                    pt='50px'
                    pb='25px'
                >
                    You can also like this
                        <Text
                        fontStyle='normal'
                        fontWeight='600'
                        fontSize='15.5px'
                        textColor='gray.500'
                        pl='4px'
                    >
                        You've never seen it before!
                    </Text>
                </Text>
                <Flex
                    flexDirection='row'
                    flexWrap='wrap'
                >
                    {mapping.map((_, index) => (
                        <Box
                            key={index}
                            w='269.42px'
                            h='350px'
                            borderWidth='1px'
                            borderRadius='lg'
                            overflow='auto'
                            m='3'
                            boxShadow='lg'
                        >
                            <Image src='data:image/png;base64,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' />
                            <Box p='6'>
                                <Box
                                    as='h4'
                                    mt='100px'
                                    fontWeight='semibold'
                                    lineHeight='tight'
                                    paddingBottom='15px'
                                >
                                    Men's formal suit - Black & White
                                </Box>
                                <Box
                                    color='#DB3022'
                                    paddingBottom='5'
                                >
                                    <Box
                                        as='span'
                                        fontSize='sm'
                                        paddingRight='1'
                                    >
                                        Rp
                                    </Box>

                                    55,000
                                </Box>
                                <Box
                                    as='span'
                                    color='gray.600'
                                    fontSize='sm'
                                >
                                    Zalora Cloth
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Flex>
            </Box>
        </Fragment>
    )
}

export default Product
