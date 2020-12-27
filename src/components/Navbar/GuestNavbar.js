import { SearchIcon } from '@chakra-ui/icons'
import { Button, Center, HStack, IconButton, Image, Input, InputGroup, InputRightElement, Stack } from '@chakra-ui/react'
import { FiFilter} from 'react-icons/fi'
import { BiCart } from 'react-icons/bi'
import Logo from '../../assets/images/logo.png'
import { inputStyles, iconButtonFirstStyles, iconButtonSecondStyles, iconButtonThirdStyles, stackStyles, buttonFirstStyles, buttonSecondStyles, horizontalStackStyles } from '../../assets/styles/Navbar/GuestNavbar'
import { Link } from 'react-router-dom'

const GuestNavbar = ({ functionOpenDisclosure }) => {
    return (
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
                    onClick={functionOpenDisclosure}
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
    )
}

export default GuestNavbar
