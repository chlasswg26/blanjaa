import { SearchIcon } from '@chakra-ui/icons'
import { Avatar, Center, HStack, IconButton, Image, Input, InputGroup, InputRightElement, Stack } from '@chakra-ui/react'
import { FiFilter, FiBell } from 'react-icons/fi'
import { BiCart } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'
import Logo from '../../assets/images/logo.png'
import { inputStyles, iconButtonFirstStyles, iconButtonSecondStyles, iconButtonThirdStyles, stackStyles, horizontalStackStyles } from '../../assets/styles/Navbar/UserNavbar'

const UserNavbar = () => {
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
                    aria-label='Filter'
                    icon={<FiFilter />}
                />
                <Stack {...stackStyles}>
                    <IconButton
                        {...iconButtonThirdStyles}
                        aria-label='Cart'
                        icon={
                            <BiCart size='27.2px' />
                        }
                    />
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
                    <IconButton
                        {...iconButtonThirdStyles}
                        aria-label='Avatar'
                        icon={
                            <Avatar
                                name='Avatar'
                                src='https://google.com/'
                                size='sm'
                            />
                        }
                    />
                </Stack>
            </Center>
        </HStack>
    )
}

export default UserNavbar
