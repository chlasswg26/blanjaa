import { Fragment, useState } from 'react'
import { Box, Button, Image, Input, InputGroup, InputRightElement, Select, Stack, Text } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import Lightbox from 'react-awesome-lightbox'
import { useFileUpload } from 'use-file-upload'
import 'react-awesome-lightbox/build/style.css'

import Panel from '../../../../Panel'
import TextareaWithSunEditor from '../../../../TextareaWithSunEditor'

const SellerContentNewProduct = () => {
    const [file, selectFile] = useFileUpload()
    const { register } = useForm({
        mode: 'onChange'
    })
    const [showLightbox, setShowLightbox] = useState(false)

    return (
        <Fragment>
            <Box
                shadow='md'
                w='78%'
                h='2xl'
                bg='#F2F2F2'
                p='35.5px'
                overflow='auto'
                overflowWrap='anywhere'
            >
                <Panel
                    panelHead={
                        <Text
                            fontSize='2xl'
                            fontStyle='normal'
                            fontWeight='700'
                        >
                            Inventory
                        </Text>
                    }
                    panelBody={
                        <Stack
                            direction='row'
                            shouldWrapChildren={true}
                            spacing='31.8%'
                            overflow='auto'
                            overflowWrap='anywhere'
                        >
                            <Box>
                                <Text
                                    mb='8px'
                                    color='gray.500'
                                    fontSize='sm'
                                >
                                    Name of goods
                                </Text>
                                <Input
                                    type='text'
                                    focusBorderColor='#DB3022'
                                    borderColor='darkgrey'
                                    w='305.5px'
                                />
                            </Box>
                            <Box>
                                <Text
                                    mb='8px'
                                    color='gray.500'
                                    fontSize='sm'
                                >
                                    Category
                                </Text>
                                <Select
                                    placeholder='Select one'
                                    w='305.5px'
                                    borderColor='darkgrey'
                                    focusBorderColor='#DB3022'
                                >
                                    <option value='option1'>Option 1</option>
                                    <option value='option2'>Option 2</option>
                                    <option value='option3'>Option 3</option>
                                </Select>
                            </Box>
                        </Stack>
                    }
                />
                <Panel
                    panelHead={
                        <Text
                            fontSize='2xl'
                            fontStyle='normal'
                            fontWeight='700'
                        >
                            Item details
                        </Text>
                    }
                    panelBody={
                        <Stack
                            direction='row'
                            spacing='33.3%'
                            overflow='auto'
                            overflowWrap='anywhere'
                        >
                            <Stack
                                shouldWrapChildren={true}
                                spacing={6}
                                overflow='auto'
                                overflowWrap='anywhere'
                            >
                                <Box>
                                    <Text
                                        mb='8px'
                                        color='gray.500'
                                        fontSize='sm'
                                    >
                                        Unit price
                                    </Text>
                                    <Input
                                        type='text'
                                        focusBorderColor='#DB3022'
                                        borderColor='darkgrey'
                                        w='305.5px'
                                    />
                                </Box>
                                <Box>
                                    <Text
                                        mb='8px'
                                        color='gray.500'
                                        fontSize='sm'
                                    >
                                        Stock
                                    </Text>
                                    <InputGroup w='305.5px'>
                                        <Input
                                            type='text'
                                            focusBorderColor='#DB3022'
                                            borderColor='darkgrey'
                                        />
                                        <InputRightElement w='72px'>
                                            <Text
                                                color='gray.500'
                                                fontSize='sm'
                                            >
                                                Buah
                                            </Text>
                                        </InputRightElement>
                                    </InputGroup>
                                </Box>
                            </Stack>
                            <Stack
                                shouldWrapChildren={true}
                                align='center'
                                spacing={8}
                                overflow='auto'
                                overflowWrap='anywhere'
                            >
                                { showLightbox && (
                                    <Lightbox
                                        image={file?.source || 'https://bit.ly/sage-adebayo'}
                                        title='Preview Images'
                                        keyboardInteraction={true}
                                        doubleClickZoom={2}
                                        zoomStep={0.2}
                                        onClose={() => setShowLightbox(false)}
                                    />
                                ) }

                                <Box
                                    as='button'
                                    onClick={() => setShowLightbox(true)}
                                >
                                    <Image
                                        srcSet={file?.source || 'https://bit.ly/sage-adebayo'}
                                        w={220}
                                        h={245}
                                        crossOrigin='use-credentials'
                                        fit='fill'
                                        rounded='7.5px'
                                    />
                                </Box>
                                <Button
                                    variant='outline'
                                    rounded='32px'
                                    size='lg'
                                    bg={file ? '#DB3022' : 'transparent'}
                                    textColor={file ? 'white' : '#A0AEC0'}
                                    borderColor='darkgrey'
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
                                    overflow='auto'
                                    overflowWrap='anywhere'
                                    onClick={() => selectFile({ accept: 'image/*' })}
                                >
                                    {file ? 'Change' : 'Select image of product'}
                                </Button>
                            </Stack>
                        </Stack>
                    }
                />
                <Panel
                    panelHead={
                        <Text
                            fontSize='2xl'
                            fontStyle='normal'
                            fontWeight='700'
                        >
                            Description
                        </Text>
                    }
                    panelBody={
                        <TextareaWithSunEditor
                            restOfStyles={{
                                width: '100%',
                                height: 251.3
                            }}
                            refFormHook={register}
                        />
                    }
                />
                <Button
                    variant='outline'
                    rounded='32px'
                    size='lg'
                    minW='15%'
                    mt='10px'
                    bg='#DB3022'
                    textColor='white'
                    borderColor='darkgrey'
                    borderColor='#DB3022'
                    float='right'
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
                    Jual
                </Button>
            </Box>
        </Fragment>
    )
}

export default SellerContentNewProduct
