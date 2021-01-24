import { Box, Button, Checkbox, Divider, Flex, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { Fragment, useRef, useState } from 'react'

const CustomerContentAddress = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [show, setShow] = useState(false)
    const buttonModalRef = useRef()

    return (
        <Fragment>
            <Box
                shadow='md'
                w='78%'
                h='2xl'
                bg='#F2F2F2'
                p='35.5px'
                overflow='auto'
                overflowWrap='anywhere'
            >
                <Box
                    mt='15.5px'
                    w='96.5%'
                    h='90%'
                    bg='white'
                    borderWidth='1px'
                    borderRadius='2.5px'
                    borderColor='darkgrey'
                    p='20px'
                    overflow='auto'
                    overflowWrap='anywhere'
                >
                    <Flex
                        flexDirection='column'
                        flexWrap='wrap'
                        pb='20px'
                        overflow='auto'
                        overflowWrap='anywhere'
                    >
                        <Heading
                            as='h5'
                            size='md'
                            pb='4.5px'
                            pl='4.5px'
                        >
                            Choose another address
                        </Heading>
                        <Text
                            ml='3.5px'
                            color='gray.500'
                            fontSize='sm'
                        >
                            Manage your shipping address
                        </Text>
                    </Flex>
                    <Divider />
                    <Stack
                        mt='35.5px'
                        align='center'
                        spacing={10}
                        overflow='auto'
                        overflowWrap='anywhere'
                    >
                        <Button
                            w='85%'
                            h='110px'
                            textAlign='center'
                            textColor='gray.500'
                            bg='transparent'
                            borderWidth='2px'
                            borderColor='gray.500'
                            borderStyle='dashed'
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
                            ref={buttonModalRef}
                        >
                            Add new address
                        </Button>
                        <Stack
                            align='center'
                            spacing={4}
                            overflow='auto'
                            overflowWrap='anywhere'
                        >
                            <Box
                                w='770px'
                                h='195.5px'
                                bg='transparent'
                                borderWidth='2px'
                                borderColor='#DB3022'
                                borderStyle='solid'
                                rounded='3px'
                                p='20px'
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
                                    fontSize='15.5px'
                                    fontWeight='700'
                                    color='#DB3022'
                                    bg='transparent'
                                    size='xs'
                                    mt='45px'
                                    ml='4.5px'
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
                                    onClick={() => setShow(true)}
                                >
                                    Change address
                                </Button>
                            </Box>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                finalFocusRef={buttonModalRef}
                blockScrollOnMount={false}
                closeOnOverlayClick={false}
                motionPreset='slideInBottom'
                scrollBehavior='inside'
                isCentered={true}
                size='2xl'
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign='center'>
                        Add new address
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
                    <ModalBody pb='120px'>
                        <Stack
                            spacing={4}
                        >
                            <Text
                                mb='8px'
                                color='gray.500'
                                fontSize='sm'
                            >
                                Save address as (ex : home address, office address)
                            </Text>
                            <Input
                                type='text'
                                focusBorderColor='#DB3022'
                                borderColor='darkgrey'
                            />
                            <Stack
                                direction='row'
                                shouldWrapChildren={true}
                                spacing={3}
                            >
                                <Box>
                                    <Text
                                        mb='8px'
                                        color='gray.500'
                                        fontSize='sm'
                                    >
                                        Recipient's name
                                    </Text>
                                    <Input
                                        type='text'
                                        focusBorderColor='#DB3022'
                                        borderColor='darkgrey'
                                        w='305.5px'
                                    />
                                </Box>
                                <Box>
                                    <Text
                                        mb='8px'
                                        color='gray.500'
                                        fontSize='sm'
                                    >
                                        Recipient's telephone number
                                    </Text>
                                    <Input
                                        type='text'
                                        focusBorderColor='#DB3022'
                                        borderColor='darkgrey'
                                        w='305.5px'
                                    />
                                </Box>
                            </Stack>
                            <Stack
                                direction='row'
                                shouldWrapChildren={true}
                                spacing={3}
                            >
                                <Box>
                                    <Text
                                        mb='8px'
                                        color='gray.500'
                                        fontSize='sm'
                                    >
                                        Address
                                    </Text>
                                    <Input
                                        type='text'
                                        focusBorderColor='#DB3022'
                                        borderColor='darkgrey'
                                        w='305.5px'
                                    />
                                </Box>
                                <Box>
                                    <Text
                                        mb='8px'
                                        color='gray.500'
                                        fontSize='sm'
                                        w='305.5px'
                                    >
                                        Postal code
                                    </Text>
                                    <Input
                                        type='text'
                                        focusBorderColor='#DB3022'
                                        borderColor='darkgrey'
                                    />
                                </Box>
                            </Stack>
                            <Stack
                                direction='row'
                                shouldWrapChildren={true}
                                spacing={3}
                            >
                                <Box>
                                    <Text
                                        mb='8px'
                                        color='gray.500'
                                        fontSize='sm'
                                    >
                                        City or Subdistrict
                                    </Text>
                                    <Input
                                        type='text'
                                        focusBorderColor='#DB3022'
                                        borderColor='darkgrey'
                                        w='305.5px'
                                    />
                                </Box>
                            </Stack>
                            <Checkbox
                                colorScheme='red'
                                top='20px'
                                color='gray.500'
                                fontWeight='300'
                                borderColor='darkgrey'
                                _hover={{
                                    bg: 'transparent',
                                    color: '#DB3022'
                                }}
                            >
                                Make it the primary address
                            </Checkbox>
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <Stack
                            direction='row'
                            spacing={3}
                        >
                            <Button
                                onClick={onClose}
                                variant='outline'
                                rounded='40px'
                                w='155px'
                                bg='transparent'
                                textColor='gray.400'
                                borderColor='gray.400'
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
                                Cancel
                            </Button>
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
            <Modal
                isOpen={show && true}
                onClose={() => setShow(false)}
                blockScrollOnMount={false}
                closeOnOverlayClick={false}
                motionPreset='slideInBottom'
                scrollBehavior='inside'
                isCentered={true}
                size='2xl'
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign='center'>
                        Edit this address
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
                    <ModalBody pb='120px'>
                        <Stack
                            spacing={4}
                        >
                            <Text
                                mb='8px'
                                color='gray.500'
                                fontSize='sm'
                            >
                                Save address as (ex : home address, office address)
                            </Text>
                            <Input
                                type='text'
                                focusBorderColor='#DB3022'
                                borderColor='darkgrey'
                            />
                            <Stack
                                direction='row'
                                shouldWrapChildren={true}
                                spacing={3}
                            >
                                <Box>
                                    <Text
                                        mb='8px'
                                        color='gray.500'
                                        fontSize='sm'
                                    >
                                        Recipient's name
                                    </Text>
                                    <Input
                                        type='text'
                                        focusBorderColor='#DB3022'
                                        borderColor='darkgrey'
                                        w='305.5px'
                                    />
                                </Box>
                                <Box>
                                    <Text
                                        mb='8px'
                                        color='gray.500'
                                        fontSize='sm'
                                    >
                                        Recipient's telephone number
                                    </Text>
                                    <Input
                                        type='text'
                                        focusBorderColor='#DB3022'
                                        borderColor='darkgrey'
                                        w='305.5px'
                                    />
                                </Box>
                            </Stack>
                            <Stack
                                direction='row'
                                shouldWrapChildren={true}
                                spacing={3}
                            >
                                <Box>
                                    <Text
                                        mb='8px'
                                        color='gray.500'
                                        fontSize='sm'
                                    >
                                        Address
                                    </Text>
                                    <Input
                                        type='text'
                                        focusBorderColor='#DB3022'
                                        borderColor='darkgrey'
                                        w='305.5px'
                                    />
                                </Box>
                                <Box>
                                    <Text
                                        mb='8px'
                                        color='gray.500'
                                        fontSize='sm'
                                        w='305.5px'
                                    >
                                        Postal code
                                    </Text>
                                    <Input
                                        type='text'
                                        focusBorderColor='#DB3022'
                                        borderColor='darkgrey'
                                    />
                                </Box>
                            </Stack>
                            <Stack
                                direction='row'
                                shouldWrapChildren={true}
                                spacing={3}
                            >
                                <Box>
                                    <Text
                                        mb='8px'
                                        color='gray.500'
                                        fontSize='sm'
                                    >
                                        City or Subdistrict
                                    </Text>
                                    <Input
                                        type='text'
                                        focusBorderColor='#DB3022'
                                        borderColor='darkgrey'
                                        w='305.5px'
                                    />
                                </Box>
                            </Stack>
                            <Checkbox
                                colorScheme='red'
                                top='20px'
                                color='gray.500'
                                fontWeight='300'
                                borderColor='darkgrey'
                                _hover={{
                                    bg: 'transparent',
                                    color: '#DB3022'
                                }}
                            >
                                Make it the primary address
                            </Checkbox>
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <Stack
                            direction='row'
                            spacing={3}
                        >
                            <Button
                                onClick={onClose}
                                variant='outline'
                                rounded='40px'
                                w='155px'
                                bg='transparent'
                                textColor='gray.400'
                                borderColor='gray.400'
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
                                onClick={() => setShow(false)}
                            >
                                Cancel
                            </Button>
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

export default CustomerContentAddress
