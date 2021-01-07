import { SearchIcon } from '@chakra-ui/icons'
import { Button, Center, CloseButton, Flex, HStack, IconButton, Image, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { FiFilter} from 'react-icons/fi'
import { BiCart } from 'react-icons/bi'
import Logo from '../../assets/images/logo.png'
import { inputStyles, iconButtonFirstStyles, iconButtonSecondStyles, iconButtonThirdStyles, stackStyles, buttonFirstStyles, buttonSecondStyles, horizontalStackStyles, modalStyles, flexFirstStyles, closeButtonStyles, textFirstStyles, textSecondStyles, buttonThirdStyles, buttonFourthStyles, buttonFifthStyles, buttonSixthStyles } from '../../assets/styles/Navbar/GuestNavbar'
import { Link } from 'react-router-dom'
import { Fragment, useRef } from 'react'

const GuestNavbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const buttonModalRef = useRef()

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
                    <IconButton
                        {...iconButtonThirdStyles}
                        aria-label='Cart'
                        icon={
                            <BiCart size='27.2px' />
                        }
                    />
                    <Stack {...stackStyles}>
                        <Link
                            to='/auth/signin'
                            children={
                                <Button {...buttonFirstStyles}>
                                    Login
                                </Button>
                            }
                        />
                        <Link
                            to='/auth/signup'
                            children={
                                <Button {...buttonSecondStyles}>
                                    Signup
                                </Button>
                            }
                        />
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
                                <Button {...buttonThirdStyles}>
                                    All
                                </Button>
                                <Button {...buttonFourthStyles}>
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
                                {...buttonFifthStyles}
                            >
                                Discard
                            </Button>
                            <Button {...buttonSixthStyles}>
                                Apply
                            </Button>
                        </Stack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Fragment>
    )
}

export default GuestNavbar
