import { Fragment, useEffect } from 'react'
import { Box, Button, Input, Select, Stack, Tag, TagCloseButton, TagLabel, Text, useToast, Wrap, WrapItem } from '@chakra-ui/react'
import Panel from '../../../../Panel'
import { useForm } from 'react-hook-form'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { GetCategoryActionCreator, PostCategoryActionCreator } from '../../../../../redux/actions/category'

const SellerContentCategoryProduct = () => {
    const { register, handleSubmit, formState } = useForm()
    const dispatch = useDispatch()
    const { auth, category } = useSelector(state => ({
        auth: state.Auth,
        category: state.Category
    }), shallowEqual)
    const toast = useToast()
    const storage = auth.login.response

    const onSubmit = data => {
        dispatch(
            PostCategoryActionCreator(data, storage?.accessToken)
        )
    }

    useEffect(() => {
        const getCategoryData = () => {
            dispatch(GetCategoryActionCreator())
        }

        getCategoryData()
    }, [])

    useEffect(() => {
        (category.isFulfilled && formState.isSubmitSuccessful) && (toast({
            title: 'Success',
            description: `New category <b>${category.response?.name}</b> added.`,
            status: 'success',
            duration: null,
            isClosable: true
        }))
        category.isRejected && (toast({
            title: 'Error',
            description: `${category.errorMessage}!`,
            status: 'error',
            duration: null,
            isClosable: true
        }))
    }, [category])

    useEffect(() => {
        const getCategoryData = () => {
            dispatch(GetCategoryActionCreator())
        }

        category.response && (getCategoryData())
    }, [])

    return (
        <Fragment>
            <Stack
                spacing={5}
                shadow='md'
                w='78%'
                h='2xl'
                bg='#F2F2F2'
                p='35.5px'
                overflow='auto'
                overflowWrap='anywhere'
            >
                <Stack
                    direction='row'
                    shouldWrapChildren={true}
                    w='100%'
                >
                    <Panel
                        mainStyles={{
                            w: '370px',
                            h: '300px',
                            overflow: 'auto',
                            overflowWrap: 'anywhere'
                        }}
                        panelHead={
                            <Text
                                fontSize='2xl'
                                fontStyle='normal'
                                fontWeight='700'
                            >
                                New category
                            </Text>
                        }
                        panelBody={
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Stack
                                    shouldWrapChildren={true}
                                    spacing={10}
                                    overflow='auto'
                                    overflowWrap='anywhere'
                                >
                                    <Box
                                        overflow='auto'
                                        overflowWrap='anywhere'
                                    >
                                        <Text
                                            mb='8px'
                                            color='gray.500'
                                            fontSize='sm'
                                        >
                                            Name of category
                                        </Text>
                                        <Input
                                            type='text'
                                            name='name'
                                            ref={register({
                                                required: true
                                            })}
                                            focusBorderColor='#DB3022'
                                            borderColor='darkgrey'
                                            w='305px'
                                        />
                                    </Box>
                                </Stack>
                                <Button
                                    type='submit'
                                    variant='outline'
                                    bg='#DB3022'
                                    textColor='white'
                                    borderColor='darkgrey'
                                    borderColor='#DB3022'
                                    float='right'
                                    mt='50px'
                                    rounded='full'
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
                                    overflow='auto'
                                    overflowWrap='anywhere'
                                    _loading={{
                                        w: '200px'
                                    }}
                                    loadingText='Adding'
                                    isLoading={
                                        (category.isLoading && formState.isSubmitSuccessful) && true
                                    }
                                >
                                    Add
                                </Button>
                            </form>
                        }
                    />
                    <Panel
                        mainStyles={{
                            w: '600px',
                            h: '300px',
                            overflow: 'auto',
                            overflowWrap: 'anywhere'
                        }}
                        panelHead={
                            <Text
                                fontSize='2xl'
                                fontStyle='normal'
                                fontWeight='700'
                            >
                                Edit category
                            </Text>
                        }
                        panelBody={
                            <Fragment>
                                <Stack
                                    direction='row'
                                    shouldWrapChildren={true}
                                    overflow='auto'
                                    overflowWrap='anywhere'
                                >
                                    <Box
                                        overflow='auto'
                                        overflowWrap='anywhere'
                                    >
                                        <Text
                                            mb='8px'
                                            color='gray.500'
                                            fontSize='sm'
                                        >
                                            Select category
                                        </Text>
                                        <Select
                                            placeholder='Select one'
                                            w='305px'
                                            borderColor='darkgrey'
                                            focusBorderColor='#DB3022'
                                        >
                                            <option value='option1'>Option 1</option>
                                            <option value='option2'>Option 2</option>
                                            <option value='option3'>Option 3</option>
                                        </Select>
                                    </Box>
                                    <Box
                                        overflow='auto'
                                        overflowWrap='anywhere'
                                    >
                                        <Text
                                            mb='8px'
                                            color='gray.500'
                                            fontSize='sm'
                                        >
                                            Current name of category
                                        </Text>
                                        <Input
                                            type='text'
                                            focusBorderColor='#DB3022'
                                            borderColor='darkgrey'
                                            w='220px'
                                        />
                                    </Box>
                                </Stack>
                                <Button
                                    variant='outline'
                                    bg='#DB3022'
                                    textColor='white'
                                    borderColor='darkgrey'
                                    borderColor='#DB3022'
                                    float='right'
                                    mt='50px'
                                    rounded='full'
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
                                    overflow='auto'
                                    overflowWrap='anywhere'
                                >
                                    Save
                                </Button>
                            </Fragment>
                        }
                    />
                </Stack>
                <Panel
                    mainStyles={{
                        w: '980px',
                        h: '800px'
                    }}
                    panelHead={
                        <Text
                            fontSize='2xl'
                            fontStyle='normal'
                            fontWeight='700'
                        >
                            Category list
                        </Text>
                    }
                    panelBody={
                        <Wrap
                            justify='space-between'
                            direction='row-reverse'
                            h='600px'
                            overflow='auto'
                            overflowWrap='anywhere'
                        >
                            {category.result.map((category, categoryIndex) => (
                                <WrapItem key={categoryIndex}>
                                    <Tag
                                        size='lg'
                                        borderRadius='full'
                                        variant='solid'
                                        colorScheme='green'
                                        m='5px'
                                    >
                                        <TagLabel>{category.name}</TagLabel>
                                        <TagCloseButton />
                                    </Tag>
                                </WrapItem>
                            ))}
                        </Wrap>
                    }
                />
            </Stack>
        </Fragment>
    )
}

export default SellerContentCategoryProduct
