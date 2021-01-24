import { Box, Button, Image, Input, Stack, Text } from '@chakra-ui/react'
import { Fragment, useState } from 'react'
import Lightbox from 'react-awesome-lightbox'
import { useFileUpload } from 'use-file-upload'
import { useForm } from 'react-hook-form'
import 'react-awesome-lightbox/build/style.css'

import Panel from '../../../../Panel'
import TextareaWithSunEditor from '../../../../TextareaWithSunEditor'

const SellerContentNewBanner = () => {
    const [file, selectFile] = useFileUpload()
    const [showLightbox, setShowLightbox] = useState(false)
    const { register } = useForm({
        mode: 'onChange'
    })

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
                            New banner
                        </Text>
                    }
                    panelBody={
                        <Fragment>
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
                                            Name
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
                                            Reference
                                        </Text>
                                        <Input
                                            type='text'
                                            name='fee'
                                            focusBorderColor='#DB3022'
                                            borderColor='darkgrey'
                                            w='305.5px'
                                        />
                                    </Box>
                                </Stack>
                                <Stack
                                    shouldWrapChildren={true}
                                    align='center'
                                    spacing={8}
                                    overflow='auto'
                                    overflowWrap='anywhere'
                                >
                                    {showLightbox && (
                                        <Lightbox
                                            image={file?.source || 'https://bit.ly/sage-adebayo'}
                                            title='Preview Images'
                                            keyboardInteraction={true}
                                            doubleClickZoom={2}
                                            zoomStep={0.2}
                                            onClose={() => setShowLightbox(false)}
                                        />
                                    )}

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
                                        {file ? 'Change' : 'Select image of banner'}
                                    </Button>
                                </Stack>
                            </Stack>
                            <Box>
                                <Text
                                    mb='8px'
                                    color='gray.500'
                                    fontSize='sm'
                                >
                                    Description
                                    </Text>
                                <TextareaWithSunEditor
                                    restOfStyles={{
                                        width: '100%',
                                        height: 251.3
                                    }}
                                    refFormHook={register}
                                />
                            </Box>
                        </Fragment>
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
                    Publish
                </Button>
            </Box>
        </Fragment>
    )
}

export default SellerContentNewBanner
