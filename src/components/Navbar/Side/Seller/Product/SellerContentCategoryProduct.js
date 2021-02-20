import { Fragment, useEffect, useLayoutEffect, useState } from 'react'
import { Box, Button, Input, Select, Stack, Tag, TagCloseButton, TagLabel, Text, useToast, Wrap, WrapItem } from '@chakra-ui/react'
import Panel from '../../../../Panel'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { GetCategoryActionCreator, GetCategoryByIdActionCreator, PostCategoryActionCreator, PutCategoryActionCreator } from '../../../../../redux/actions/category'

const ToastDescription = ({ category, isAdded, isUpdate, oldCategory }) => {
    return (
        <Fragment>
            <Box display='inline-block'>
                {isAdded && (
                    <Fragment>
                        New category <Text fontWeight='700' display='inline-block'>{category}</Text> added.
                    </Fragment>
                )}
                {isUpdate && (
                    <Fragment>
                        Updated category <Text textColor='whitesmoke' fontWeight='700' display='inline-block'>{oldCategory}</Text> to <Text textColor='whitesmoke' fontWeight='700' display='inline-block'>{category}</Text> success.
                    </Fragment>
                )}
            </Box>
        </Fragment>
    )
}

const SellerContentCategoryProduct = () => {
    const { register, handleSubmit, formState } = useForm()
    const dispatch = useDispatch()
    const auth = useSelector(state => state.Auth)
    const category = useSelector(state => state.Category)
    const toast = useToast()
    const storage = auth.login.response
    const [isAdded, setIsAdded] = useState(false)
    const [showInputEditor, setShowInputEditor] = useState(false)
    const [currentValue, setCurrentValue] = useState({})
    const [isUpdate, setIsUpdate] = useState(false)

    const onSubmit = data => {
        dispatch(
            PostCategoryActionCreator(data, storage?.accessToken)
        )
        setIsAdded(true)
    }
    const onChange = event => {
        event.preventDefault()
        const id = event.target.value

        if (id) {
            dispatch(
                GetCategoryByIdActionCreator(id)
            )
            setShowInputEditor(true)
        } else {
            setShowInputEditor(false)
            setCurrentValue({})
        }
    }
    const onChangeInputEditor = event => {
        event.preventDefault()
        setCurrentValue({
            ...currentValue,
            name: event.target.value
        })
    }
    const onUpdate = data => {
        dispatch(
            PutCategoryActionCreator(data?.id, {
                name: data?.name
            }, storage?.accessToken)
        )
        setIsUpdate(true)
    }

    useEffect(() => {
        const getCategoryData = () => {
            dispatch(GetCategoryActionCreator())
        }
        
        getCategoryData()
    }, [])

    useEffect(() => {
        const getCategoryData = () => {
            dispatch(GetCategoryActionCreator())
        }

        if (isAdded && category.isFulfilled) {
            setIsAdded(false)
            getCategoryData()
            toast({
                title: 'Success',
                description: <ToastDescription isAdded={true} category={category.response?.name} />,
                status: 'success',
                duration: null,
                isClosable: true
            })
        }

        if (isAdded && category.isRejected || showInputEditor && category.isRejected || isUpdate && category.isRejected) {
            setShowInputEditor(false)
            setIsAdded(false)
            setIsUpdate(false)
            setCurrentValue({})
            toast({
                title: 'Error',
                description: `${category.errorMessage}!`,
                status: 'error',
                duration: null,
                isClosable: true
            })
        }

        if (isUpdate && category.isFulfilled) {
            setIsUpdate(false)
            toast({
                title: 'Success',
                description: <ToastDescription isUpdate={true} category={currentValue?.name} oldCategory={category.result[currentValue?.id - 1]?.name} />,
                status: 'success',
                duration: null,
                isClosable: true
            })
            getCategoryData()
        }
    }, [isAdded, category, showInputEditor, isUpdate])

    useLayoutEffect(() => {
        setCurrentValue({
            ...currentValue,
            ...category.resultById
        })
    }, [category.resultById])

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
                                            isDisabled={category.isLoading}
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
                                    isDisabled={category.isLoading}
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
                                            w={showInputEditor ? '305px' : '530px'}
                                            borderColor='darkgrey'
                                            focusBorderColor='#DB3022'
                                            onChange={(event) => onChange(event)}
                                        >
                                            {category.result.map((optionValue, optionIndex) => (
                                                <option key={optionIndex} value={optionValue.id}>{optionValue.name}</option>
                                            ))}
                                        </Select>
                                    </Box>
                                    {(showInputEditor && currentValue.id) && (
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
                                                name='category'
                                                isDisabled={category.isLoading}
                                                value={currentValue?.name}
                                                onChange={(event) => onChangeInputEditor(event)}
                                                ref={register({
                                                    required: true
                                                })}
                                                focusBorderColor='#DB3022'
                                                borderColor='darkgrey'
                                                w='220px'
                                            />
                                        </Box>
                                    )}
                                </Stack>
                                {(showInputEditor && currentValue?.id) && (
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
                                        onClick={() => onUpdate(currentValue)}
                                        isLoading={(isUpdate && category.isLoading) && true}
                                        isDisabled={category.isLoading}
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
                                )}
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
                            justify='stretch'
                            direction='row'
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
