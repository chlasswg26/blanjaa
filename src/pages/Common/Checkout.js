import { Box, Button, Checkbox, CloseButton, Divider, Flex, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useBreakpointValue, useDisclosure } from '@chakra-ui/react'
import { Fragment, useState } from 'react'
import { useSelector } from 'react-redux'
import GuestNavbar from '../../components/Navbar/GuestNavbar'
import UserNavbar from '../../components/Navbar/UserNavbar'

const Checkout = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [show, setShow] = useState()
    const variant = useBreakpointValue({
        base: 0,
        xs: 0,
        sm: 0,
        md: 0,
        lg: '-110',
        xl: '-120'
    })
    const auth = useSelector(state => state.Auth)
    const storage = auth.login.response

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
                        Checkout
                    </Text>
                    <Box
                        as='h6'
                        size='sm'
                        fontWeight='700'
                        pt='20px'
                        overflow='auto'
                        overflowWrap='anywhere'
                    >
                        Shipping Address
                    </Box>
                    <Flex
                        flexDirection='row'
                        flexWrap='wrap'
                        justify='space-between'
                        overflow='auto'
                        overflowWrap='anywhere'
                    >

                        <Stack
                            align='center'
                            spacing={4}
                            overflow='auto'
                            overflowWrap='anywhere'
                        >
                            <Box
                                w='760px'
                                h='195.5px'
                                bg='transparent'
                                borderWidth='2px'
                                borderStyle='solid'
                                rounded='3px'
                                p='20px'
                                mb='10px'
                                overflow='auto'
                                overflowWrap='anywhere'
                            >
                                <Heading
                                    as='h5'
                                    size='md'
                                    pb='10.5px'
                                    pl='4.5px'
                                >
                                    Andreas Jane
                                </Heading>
                                <Text
                                    ml='3.5px'
                                    color='darkslategrey'
                                    fontSize='sm'
                                >
                                    Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181
                                </Text>
                                <Button
                                    variant='outline'
                                    rounded='32px'
                                    w='215px'
                                    bg='transparent'
                                    textColor='gray.500'
                                    borderColor='gray.500'
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
                                    onClick={() => setShow(true)}
                                >
                                    Choose another address
                                </Button>
                            </Box>
                        </Stack>
                        <Stack
                            w='32.5%'
                            h='325.5px'
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
                                    Order
                                </Text>
                                <Text
                                    pl='7px'
                                    fontWeight='700'
                                >
                                    Rp 55,000
                                </Text>
                            </Flex>
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
                                    Delivery
                                </Text>
                                <Text
                                    pl='7px'
                                    fontWeight='700'
                                >
                                    Rp 5,000
                                </Text>
                            </Flex>
                            <Divider
                                pt='17.5px'
                                borderColor='black'
                            />
                            <Flex
                                flexDirection='row'
                                flexWrap='wrap'
                                justify='space-between'
                                align='stretch'
                                pt='17.5px'
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
                                <Box
                                    as='span'
                                    color='#DB3022'
                                    paddingBottom='1'
                                >
                                    Rp 55,000
                                </Box>
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
                                onClick={onOpen}
                            >
                                Select payment
                            </Button>
                        </Stack>
                        <Stack
                            zIndex={1}
                            shouldWrapChildren={true}
                            spacing={3}
                            w='65%'
                            h='lg'
                            pr='5px'
                            mt={variant}
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
                                justify='space-between'
                                align='center'
                                overflow='auto'
                                overflowWrap='anywhere'
                            >
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
                                    pr='285px'
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
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size='md'
                blockScrollOnMount={false}
                closeOnOverlayClick={false}
                motionPreset='slideInBottom'
                scrollBehavior='inside'
                isCentered={true}
            >
                <ModalOverlay />
                <ModalContent>
                    <Flex
                        flexWrap='wrap'
                        flexDirection='row'
                        boxShadow='md'
                    >
                        <CloseButton
                            onClick={onClose}
                            size='lg'
                            p='30px'
                            color='gray.500'
                            _active={{
                                bg: 'transparent',
                                color: '#DB3022',
                                borderColor: '#DB3022'
                            }}
                            _focus={{
                                boxShadow: false
                            }}
                        />
                        <Text
                            fontSize='lg'
                            fontStyle='normal'
                            fontWeight='500'
                            m='15px'
                            ml='5px'
                        >
                            Payment
                        </Text>
                    </Flex>
                    <ModalBody p='0'>
                        <Stack
                            spacing={3}
                            p='20px'
                            pb='120px'
                            overflow='auto'
                            overflowWrap='anywhere'
                        >
                            <Box
                                as='h6'
                                size='sm'
                                fontWeight='700'
                            >
                                Payment method
                            </Box>
                            <Stack
                                spacing={5}
                                overflow='auto'
                                overflowWrap='anywhere'
                            >
                                <Stack
                                    direction='row'
                                    align='center'
                                    justify='space-between'
                                    overflow='auto'
                                    overflowWrap='anywhere'
                                >
                                    <Image
                                        srcSet='https://bit.ly/sage-adebayo'
                                        alt='thumbnail'
                                        objectFit='fill'
                                        boxSize='65px'
                                        w='150px'
                                        rounded='12px'
                                    />
                                    <Box
                                        as='span'
                                        size='sm'
                                        fontWeight='700'
                                        overflow='auto'
                                        overflowWrap='anywhere'
                                    >
                                        Gopay
                                    </Box>
                                    <Checkbox
                                        colorScheme='red'
                                        color='black'
                                        fontWeight='600'
                                        borderColor='darkgrey'
                                        _hover={{
                                            bg: 'transparent',
                                            color: '#DB3022'
                                        }}
                                    />
                                </Stack>
                                <Stack
                                    direction='row'
                                    align='center'
                                    justify='space-between'
                                    overflow='auto'
                                    overflowWrap='anywhere'
                                >
                                    <Image
                                        srcSet='https://bit.ly/sage-adebayo'
                                        alt='thumbnail'
                                        objectFit='fill'
                                        boxSize='65px'
                                        w='150px'
                                        rounded='12px'
                                    />
                                    <Box
                                        as='span'
                                        size='sm'
                                        fontWeight='700'
                                        overflow='auto'
                                        overflowWrap='anywhere'
                                    >
                                        Gopay
                                    </Box>
                                    <Checkbox
                                        colorScheme='red'
                                        color='black'
                                        fontWeight='600'
                                        borderColor='darkgrey'
                                        _hover={{
                                            bg: 'transparent',
                                            color: '#DB3022'
                                        }}
                                    />
                                </Stack>
                                <Stack
                                    direction='row'
                                    align='center'
                                    justify='space-between'
                                    overflow='auto'
                                    overflowWrap='anywhere'
                                >
                                    <Image
                                        srcSet='https://bit.ly/sage-adebayo'
                                        alt='thumbnail'
                                        objectFit='fill'
                                        boxSize='65px'
                                        w='150px'
                                        rounded='12px'
                                    />
                                    <Box
                                        as='span'
                                        size='sm'
                                        fontWeight='700'
                                        overflow='auto'
                                        overflowWrap='anywhere'
                                    >
                                        Gopay
                                    </Box>
                                    <Checkbox
                                        colorScheme='red'
                                        color='black'
                                        fontWeight='600'
                                        borderColor='darkgrey'
                                        _hover={{
                                            bg: 'transparent',
                                            color: '#DB3022'
                                        }}
                                    />
                                </Stack>
                                <Box
                                    as='span'
                                    size='sm'
                                    fontWeight='700'
                                    pt='17px'
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
                                        Order
                                    </Text>
                                    <Text
                                        pl='7px'
                                        fontWeight='700'
                                    >
                                        Rp 55,000
                                    </Text>
                                </Flex>
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
                                        Delivery
                                    </Text>
                                    <Text
                                        pl='7px'
                                        fontWeight='700'
                                    >
                                        Rp 5,000
                                    </Text>
                                </Flex>
                            </Stack>
                        </Stack>
                    </ModalBody>
                    <ModalFooter
                        boxShadow='0 -10px 15px 3px rgba(0, 0, 0, 0.1), 0 -4px 6px 2px rgba(0, 0, 0, 0.05)'
                        overflow='auto'
                        overflowWrap='anywhere'
                    >
                        <Flex
                            flexDirection='row'
                            flexWrap='wrap'
                            align='center'
                            overflow='auto'
                            overflowWrap='anywhere'
                        >
                            <Stack
                                mr='37.5px'
                                overflow='auto'
                                overflowWrap='anywhere'
                            >
                                <Box
                                    as='span'
                                    size='sm'
                                    fontWeight='700'
                                    overflow='auto'
                                    overflowWrap='anywhere'
                                >
                                    Shopping summary
                                </Box>
                                <Box
                                    as='span'
                                    color='#DB3022'
                                    paddingBottom='1'
                                >
                                    Rp 55,000
                                </Box>
                            </Stack>
                            <Button
                                variant='outline'
                                rounded='93.5px'
                                w='155px'
                                bg='#DB3022'
                                textColor='white'
                                borderColor='#DB3022'
                                ml='37.5px'
                                overflow='auto'
                                overflowWrap='anywhere'
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
                        </Flex>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Modal
                isOpen={show && true}
                onClose={() => setShow(false)}
                blockScrollOnMount={false}
                closeOnOverlayClick={false}
                motionPreset='slideInBottom'
                scrollBehavior='inside'
                isCentered={true}
                size='lg'
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign='center'>
                        Choose address
                    </ModalHeader>
                    <ModalCloseButton
                        _hover={{
                            bg: 'transparent',
                            color: '#DB3022'
                        }}
                        _active={{
                            bg: 'transparent',
                            color: '#DB3022'
                        }}
                        _focus={{
                            boxShadow: false
                        }}
                    />
                    <ModalBody>
                        <Stack
                            shouldWrapChildren={true}
                            justify='space-between'
                            align='center'
                            display='inline-block'
                            overflow='auto'
                            overflowWrap='anywhere'
                        >
                            <Checkbox mx='20px'>
                                <Box as='label'>
                                    <Box
                                        cursor='pointer'
                                        borderWidth='1px'
                                        borderRadius='md'
                                        boxShadow='md'
                                        _checked={{
                                            bg: 'teal.600',
                                            color: 'white',
                                            borderColor: 'teal.600',
                                        }}
                                        _focus={{
                                            boxShadow: 'outline',
                                        }}
                                        px={5}
                                        py={3}
                                    >
                                        Office address
                                    </Box>
                                </Box>
                            </Checkbox>
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <Stack
                            direction='row'
                            spacing={3}
                        >
                            <Button
                                variant='outline'
                                rounded='40px'
                                w='155px'
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
                                Save
                            </Button>
                        </Stack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Fragment>
    )
}

export default Checkout
