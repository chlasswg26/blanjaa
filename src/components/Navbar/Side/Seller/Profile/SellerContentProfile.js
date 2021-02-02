import { Avatar, Box, Button, Divider, Flex, Heading, HStack, Input, Stack, Text, useToast } from '@chakra-ui/react'
import { useFileUpload } from 'use-file-upload'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch, useSelector } from 'react-redux'
import { SellerProfileModel } from '../../../../../utils/Schema'
import { GetUserByIdActionCreator, PutUserActionCreator } from '../../../../../redux/actions/user'
import { useEffect } from 'react'

const SellerContentProfile = () => {
    const [file, selectFile] = useFileUpload()
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(SellerProfileModel)
    })
    const dispatch = useDispatch()
    const user = useSelector(state => state.User)
    const toast = useToast()
    const auth = useSelector(state => state.Auth)
    const storage = auth.login.response
    const { id, accessToken } = storage

    const onSubmit = (value) => {
        const data = new FormData()
        file?.source && data.append('image', file.file)
        data.append('name', value.name)
        data.append('phone', value.phone)
        data.append('store', value.store)

        dispatch(
            PutUserActionCreator(
                id,
                data,
                accessToken
            )
        )
    }

    useEffect(() => {
        const getUserInformationById = () => {
            dispatch(
                GetUserByIdActionCreator(
                    id,
                    accessToken
                )
            )
        }

        getUserInformationById()
    }, [
        id,
        accessToken
    ])

    useEffect(() => {
        (user.isFulfilled && formState.isSubmitSuccessful) && (toast({
            title: 'Success',
            description: `You're account has been updated.`,
            status: 'success',
            duration: null,
            isClosable: true
        }))
        user.isRejected && (toast({
            title: 'Error',
            description: `${user.errorMessage}!`,
            status: 'error',
            duration: null,
            isClosable: true
        }))
    }, [
        user
    ])

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
                        My profile store
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <HStack
                        mt='33.5px'
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
                                    name='name'
                                    defaultValue={user.resultById?.name}
                                    w='58.5%'
                                    focusBorderColor='#DB3022'
                                    borderColor='black'
                                    ref={register}
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
                                    placeholder={user.resultById?.email}
                                    w='58.5%'
                                    focusBorderColor='#DB3022'
                                    borderColor='black'
                                    isReadOnly={true}
                                />
                            </Stack>
                            <Stack
                                direction='row'
                                w='lg'
                                align='baseline'
                            >
                                <Text
                                    ml='3.5px'
                                    mr='58.5px'
                                    color='gray.500'
                                    fontSize='sm'
                                    textAlign='center'
                                >
                                    Phone number
                                </Text>
                                <Input
                                    type='phone'
                                    name='phone'
                                    defaultValue={user.resultById?.phone}
                                    w='58.5%'
                                    focusBorderColor='#DB3022'
                                    borderColor='black'
                                    ref={register}
                                />
                            </Stack>
                            <Stack
                                direction='row'
                                w='lg'
                                align='baseline'
                            >
                                <Text
                                    ml='3.5px'
                                    mr='78.5px'
                                    color='gray.500'
                                    fontSize='sm'
                                    textAlign='center'
                                >
                                    Store name
                                </Text>
                                <Input
                                    type='text'
                                    name='store'
                                    defaultValue={user.resultById?.store}
                                    w='58.5%'
                                    focusBorderColor='#DB3022'
                                    borderColor='black'
                                    ref={register}
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
                                _loading={{
                                    w: '200px'
                                }}
                                loadingText={
                                    (user.isLoading && formState.isSubmitSuccessful) ? 'Saving changes' : 'Fetching information'
                                }
                                isLoading={user.isLoading}
                            >
                                Save
                            </Button>
                        </Stack>
                        <Divider
                            zIndex={4}
                            orientation='vertical'
                            height='200px'
                            pr='395.5px'
                            mb='75px'
                            mr='-290px'
                            borderColor='#CBCBCB'
                        />
                        <Avatar
                            zIndex={4}
                            name={user.resultById?.name}
                            src={
                                !file?.source ?
                                user.isFulfilled ?
                                    `${process.env.REACT_APP_API_URL_IMAGE}${user.resultById?.image}`
                                        :
                                    `${process.env.REACT_APP_API_URL_IMAGE}${auth.login?.response?.image}`
                                    :
                                file?.source
                            }
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
                                boxShadow: false,
                                borderColor: '#DB3022'
                            }}
                            onClick={() => selectFile({ accept: 'image/*' })}
                        >
                            { file ? 'Change' : 'Select image' }
                        </Button>
                    </HStack>
                </form>
            </Box>
        </Box>
    )
}

export default SellerContentProfile
