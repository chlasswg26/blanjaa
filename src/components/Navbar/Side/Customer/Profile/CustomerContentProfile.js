import { Avatar, Box, Button, Divider, Flex, Heading, HStack, Input, Stack, Text } from '@chakra-ui/react'
import { useFileUpload } from 'use-file-upload'

const CustomerContentProfile = () => {
    const [file, selectFile] = useFileUpload()

    return (
        <Box
            shadow='md'
            overflow='auto'
            overflowWrap='anywhere'
            w='78%'
            h='2xl'
            bg='#F2F2F2'
            p='35.5px'
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
                        My Profile
                    </Heading>
                    <Text
                        ml='3.5px'
                        color='gray.500'
                        fontSize='sm'
                    >
                        Manage your profile information
                    </Text>
                </Flex>
                <Divider />
                <HStack
                    mt='35.5px'
                    align='center'
                >
                    <Stack spacing={5}>
                        <Stack
                            direction='row'
                            w='lg'
                            align='baseline'
                        >
                            <Text
                                ml='3.5px'
                                mr='112.5px'
                                color='gray.500'
                                fontSize='sm'
                                textAlign='center'
                            >
                                Name
                            </Text>
                            <Input
                                type='text'
                                w='58.5%'
                                focusBorderColor='#DB3022'
                            />
                        </Stack>
                        <Stack
                            direction='row'
                            w='lg'
                            align='baseline'
                        >
                            <Text
                                ml='3.5px'
                                mr='115.5px'
                                color='gray.500'
                                fontSize='sm'
                                textAlign='center'
                            >
                                Email
                            </Text>
                            <Input
                                type='email'
                                w='58.5%'
                                focusBorderColor='#DB3022'
                            />
                        </Stack>
                        <Stack
                            direction='row'
                            w='lg'
                            align='baseline'
                        >
                            <Text
                                ml='3.5px'
                                mr='53.5px'
                                color='gray.500'
                                fontSize='sm'
                                textAlign='center'
                            >
                                Phone number
                            </Text>
                            <Input
                                type='phone'
                                w='58.5%'
                                focusBorderColor='#DB3022'
                            />
                        </Stack>

                        <Button
                            type='submit'
                            variant='outline'
                            rounded='32px'
                            bg='#DB3022'
                            textColor='white'
                            borderColor='#A0AEC0'
                            w='100px'
                            left='155.5px'
                            top='35.5px'
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
                    <Divider
                        zIndex={4}
                        float='inline-start'
                        orientation='vertical'
                        height='208.5px'
                        pr='395.5px'
                        mr='-290px'
                        borderColor='#CBCBCB'
                    />
                    <Avatar
                        zIndex={4}
                        name='Avatar'
                        src={file?.source}
                        srcSet={file?.source}
                        size='2xl'
                        mb='105px'
                    />
                    <Button
                        zIndex={4}
                        variant='outline'
                        rounded='32px'
                        size='lg'
                        top='60px'
                        right={ file ? '126.5px' : '135.5px' }
                        bg={ file ? '#DB3022' : 'transparent' }
                        textColor={ file ? 'white' : '#A0AEC0' }
                        borderColor='#A0AEC0'
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
                        onClick={() => selectFile({ accept: 'image/*' })}
                    >
                        { file ? 'Change' : 'Select image' }
                    </Button>
                </HStack>
            </Box>
        </Box>
    )
}

export default CustomerContentProfile
