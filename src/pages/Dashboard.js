import { Box, Button, CloseButton, Flex, HStack, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { Fragment, useRef } from 'react'
import { horizontalStackStyles, textFirstStyles, textSecondStyles, boxFirstStyles, boxSecondStyles, boxThirdStyles, boxFourthStyles, modalStyles, flexFirstStyles, closeButtonStyles, textThirdStyles, textFourthStyles, buttonFirstStyles, buttonSecondStyles, buttonThirdStyles, buttonFourthStyles } from '../assets/styles/Dashboard'
import CarouselCategory from '../components/CarouselCategory'
import GuestNavbar from '../components/Navbar/GuestNavbar'
// import UserNavbar from '../components/Navbar/UserNavbar'

const Dashboard = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const buttonModalRef = useRef()

    return (
        <Fragment>
            <GuestNavbar functionOpenDisclosure={onOpen} />
            {/* <UserNavbar /> */}
            <CarouselCategory />
            <HStack {...horizontalStackStyles}>
                <Stack
                    direction='column'
                    pb='20px'
                >
                    <Text {...textFirstStyles}>
                        New
                    </Text>
                    <Text {...textSecondStyles}>
                        You've never seen it before!
                    </Text>
                </Stack>
                <Flex
                    flexDirection='row'
                    flexWrap='wrap'
                >
                    <Box {...boxFirstStyles}>
                        <Image src='https://pixabay.com/get/5ee4d040494faa0df7c5d57cce2e32761c3ed6f852577140752a7cdc9349_640.jpg' />

                        <Box p='6'>
                            <Box {...boxSecondStyles}>
                                Men's formal suit - Black & White
                            </Box>
                            <Box
                                color='#DB3022'
                                paddingBottom='1'
                            >
                                <Box {...boxThirdStyles}>
                                    Rp
                                </Box>

                                55,000
                            </Box>
                            <Box {...boxFourthStyles}>
                                Zalora Cloth
                            </Box>
                        </Box>
                    </Box>
                </Flex>
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
                        <Text {...textThirdStyles}>
                            Filter
                        </Text>
                    </Flex>
                    <ModalBody>
                        <HStack
                            d='block'
                            pb='50px'
                        >
                            <Text {...textFourthStyles}>
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

export default Dashboard
