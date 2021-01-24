import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Box, Button, Checkbox, Flex, IconButton, Image, Stack, Text } from '@chakra-ui/react'
import { Fragment } from 'react'
import GuestNavbar from '../../components/Navbar/GuestNavbar'
import UserNavbar from '../../components/Navbar/UserNavbar'

const Cart = () => {
    const storage = JSON.parse(localStorage.getItem('storage'))
    
    return (
        <Fragment>
            { storage?.accessToken ? (
                <UserNavbar />
            ) : (
                <GuestNavbar />
            ) }
            <Box
                py='3%'
                px='6.5%'
                overflow='auto'
                overflowWrap='anywhere'
            >
                <Stack
                    spacing={4}
                    overflow='auto'
                    overflowWrap='anywhere'
                >
                    <Text
                        fontStyle='normal'
                        fontWeight='1000'
                        fontSize='30px'
                    >
                        My bag
                    </Text>
                    <Flex
                        flexDirection='row'
                        flexWrap='wrap'
                        justify='space-between'
                        overflow='auto'
                        overflowWrap='anywhere'
                    >
                        <Stack
                            direction='row'
                            shouldWrapChildren={true}
                            w='63.5%'
                            h='58.5px'
                            p='15px'
                            borderWidth='1px'
                            borderRadius='4px'
                            boxShadow='md'
                            justify='space-between'
                            overflow='auto'
                            overflowWrap='anywhere'
                        >
                            <Checkbox
                                colorScheme='red'
                                color='black'
                                fontWeight='600'
                                borderColor='darkgrey'
                                _hover={{
                                    bg: 'transparent',
                                    color: '#DB3022'
                                }}
                            >
                                Select all items
                                <Text
                                    pl='7px'
                                    color='gray.500'
                                    display='inline-block'
                                >
                                    (2 items selected)
                                </Text>
                            </Checkbox>
                            <Button
                                fontSize='15.5px'
                                fontWeight='700'
                                color='#DB3022'
                                bg='transparent'
                                size='xs'
                                _hover={{
                                    bg: 'transparent',
                                    color: '#DB3022',
                                    opacity: '0.5'
                                }}
                                _active={{
                                    bg: 'transparent',
                                    color: '#DB3022',
                                    opacity: '0.5'
                                }}
                                _focus={{
                                    boxShadow: false
                                }}
                            >
                                Delete
                            </Button>
                        </Stack>
                        <Stack
                            w='32.5%'
                            h='200.5px'
                            p='15px'
                            borderWidth='1px'
                            borderRadius='4px'
                            boxShadow='md'
                            overflow='auto'
                            overflowWrap='anywhere'
                        >
                            <Box
                                as='h6'
                                size='sm'
                                fontWeight='700'
                                pl='7px'
                                pb='20px'
                                overflow='auto'
                                overflowWrap='anywhere'
                            >
                                Shopping summary
                            </Box>
                            <Flex
                                flexDirection='row'
                                flexWrap='wrap'
                                justify='space-between'
                                align='stretch'
                                overflow='auto'
                                overflowWrap='anywhere'
                            >
                                <Text
                                    pl='7px'
                                    color='gray.500'
                                >
                                    Total price
                                </Text>
                                <Text
                                    pl='7px'
                                    fontWeight='700'
                                >
                                    Rp 55,000
                                </Text>
                            </Flex>
                            <Button
                                variant='outline'
                                rounded='40px'
                                w='336.5px'
                                bg='#DB3022'
                                textColor='white'
                                borderColor='#DB3022'
                                alignSelf='center'
                                top='35px'
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
                                Buy
                            </Button>
                        </Stack>
                        <Stack
                            zIndex={1}
                            shouldWrapChildren={true}
                            spacing={3}
                            w='65%'
                            h='lg'
                            mt='-90'
                            pr='5px'
                            overflow='auto'
                            overflowWrap='anywhere'
                        >
                            <Stack
                                direction='row'
                                shouldWrapChildren={true}
                                w='100%'
                                h='148.5px'
                                p='15px'
                                borderWidth='1px'
                                borderRadius='4px'
                                boxShadow='md'
                                align='center'
                                overflow='auto'
                                overflowWrap='anywhere'
                            >
                                <Checkbox
                                    onChange={() => console.log('clicked')}
                                    colorScheme='red'
                                    color='black'
                                    fontWeight='600'
                                    borderColor='darkgrey'
                                    _hover={{
                                        bg: 'transparent',
                                        color: '#DB3022'
                                    }}
                                    overflow='auto'
                                    overflowWrap='anywhere'
                                />
                                <Image
                                    ml='20px'
                                    srcSet='https://bit.ly/sage-adebayo'
                                    alt='thumbnail'
                                    objectFit='fill'
                                    boxSize='80px'
                                    rounded='12px'
                                    display='inline-block'
                                />
                                <Stack
                                    pl='15px'
                                    display='inline-block'
                                >
                                    <Text fontWeight='600'>
                                        Men's formal suit - Black
                                    </Text>
                                    <Box
                                        as='span'
                                        color='gray.600'
                                        fontSize='sm'
                                    >
                                        Zalora Cloth
                                    </Box>
                                </Stack>
                                <Flex
                                    flexDirection='row'
                                    flexWrap='wrap'
                                    pl='130px'
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
                                <Text
                                    ml='18px'
                                    fontWeight='700'
                                    w='100px'
                                    overflow='hidden'
                                    display='-webkit-flex'
                                    orientation='vertical'
                                >
                                    Rp 55,000
                                </Text>
                            </Stack>
                        </Stack>
                    </Flex>
                </Stack>
            </Box>
        </Fragment>
    )
}

export default Cart
