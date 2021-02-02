import { Box, Flex, HStack, Image, Stack, Text } from '@chakra-ui/react'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { horizontalStackStyles, textFirstStyles, textSecondStyles, boxFirstStyles, boxSecondStyles, boxThirdStyles, boxFourthStyles } from '../assets/styles/Dashboard'
import CarouselCategory from '../components/CarouselCategory'
import GuestNavbar from '../components/Navbar/GuestNavbar'
import UserNavbar from '../components/Navbar/UserNavbar'

const mapping = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const Dashboard = () => {
    const auth = useSelector(state => state.Auth)
    const storage = auth.login.response

    return (
        <Fragment>
            { storage?.accessToken ? (
                <UserNavbar />
            ) : (
                <GuestNavbar />
            ) }
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
                    { mapping.map((_, index) => (
                        <Box {...boxFirstStyles} key={index}>
                            <Image src='data:image/png;base64,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' />

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
                    )) }
                </Flex>
            </HStack>
        </Fragment>
    )
}

export default Dashboard
