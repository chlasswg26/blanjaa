import { SearchIcon } from '@chakra-ui/icons'
import { Avatar, Button, Center, chakra, CloseButton, Flex, HStack, IconButton, Image, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { FiFilter, FiBell } from 'react-icons/fi'
import { BiCart } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'
import Logo from '../../assets/images/logo.png'
import { inputStyles, iconButtonFirstStyles, iconButtonSecondStyles, iconButtonThirdStyles, stackStyles, horizontalStackStyles, modalStyles, flexFirstStyles, closeButtonStyles, textFirstStyles, textSecondStyles, buttonFirstStyles, buttonSecondStyles, buttonThirdStyles, buttonFourthStyles } from '../../assets/styles/Navbar/UserNavbar'
import { Fragment, useRef } from 'react'
import { useSelector } from 'react-redux'

const UserNavbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const buttonModalRef = useRef()
    const auth = useSelector(state => state.Auth)
    const storage = auth.login.response

    return (
        <Fragment>
            <HStack {...horizontalStackStyles}>
                <Center
                    align='flex-start'
                    ml='77px'
                >
                    <Image
                        src={Logo}
                        alt={process.env.REACT_APP_SITE_NAME}
                        fallbackSrc='https://via.placeholder.com/160x70'
                    />
                    <InputGroup ml='32px'>
                        <Input
                            {...inputStyles}
                            type='text'
                            name='search'
                            placeholder='Search'
                        />
                        <InputRightElement w='64px'>
                            <IconButton
                                {...iconButtonFirstStyles}
                                aria-label='Search'
                                icon={<SearchIcon />}
                            />
                        </InputRightElement>
                    </InputGroup>
                    <IconButton
                        {...iconButtonSecondStyles}
                        onClick={onOpen}
                        ref={buttonModalRef}
                        aria-label='Filter'
                        icon={<FiFilter />}
                    />
                    <Stack {...stackStyles}>
                        <chakra.a href='/cart'>
                            <IconButton
                                {...iconButtonThirdStyles}
                                aria-label='Cart'
                                icon={
                                    <BiCart size='27.2px' />
                                }
                            />
                        </chakra.a>
                        <IconButton
                            {...iconButtonThirdStyles}
                            aria-label='Notification'
                            icon={
                                <FiBell size='27.2px' />
                            }
                        />
                        <IconButton
                            {...iconButtonThirdStyles}
                            aria-label='Inbox'
                            icon={
                                <HiOutlineMail size='27.2px' />
                            }
                        />
                        <chakra.a href={`/${storage?.role === '1' ? 'customer' : 'seller'}`}>
                            <IconButton
                                {...iconButtonThirdStyles}
                                aria-label='Avatar'
                                icon={
                                    <Avatar
                                        name={storage?.name}
                                        srcSet={`${process.env.REACT_APP_API_URL_IMAGE}${storage?.image}`}
                                        size='sm'
                                    />
                                }
                            />
                        </chakra.a>
                    </Stack>
                </Center>
            </HStack>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                finalFocusRef={buttonModalRef}
                {...modalStyles}
            >
                <ModalOverlay />
                <ModalContent>
                    <Flex {...flexFirstStyles}>
                        <CloseButton
                            onClick={onClose}
                            {...closeButtonStyles}
                        />
                        <Text {...textFirstStyles}>
                            Filter
                        </Text>
                    </Flex>
                    <ModalBody>
                        <HStack
                            d='block'
                            pb='50px'
                        >
                            <Text {...textSecondStyles}>
                                Category
                            </Text>
                            <Flex
                                flexDirection='row'
                                flexWrap='wrap'
                            >
                                <Button {...buttonFirstStyles}>
                                    All
                                </Button>
                                <Button {...buttonSecondStyles}>
                                    Women
                                </Button>
                            </Flex>
                        </HStack>
                    </ModalBody>
                    <ModalFooter
                        boxShadow='0 -10px 15px 3px rgba(0, 0, 0, 0.1), 0 -4px 6px 2px rgba(0, 0, 0, 0.05)'
                        justifyContent='center'
                    >
                        <Stack
                            direction='row'
                            spacing={5}
                        >
                            <Button
                                onClick={onClose}
                                {...buttonThirdStyles}
                            >
                                Discard
                            </Button>
                            <Button {...buttonFourthStyles}>
                                Apply
                            </Button>
                        </Stack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Fragment>
    )
}

export default UserNavbar
