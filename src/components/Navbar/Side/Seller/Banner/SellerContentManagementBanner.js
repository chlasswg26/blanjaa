import { Fragment, useState } from 'react'
import { Box, Button, ButtonGroup, Divider, Image, Input, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Select, Stack, Text } from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { useForm } from 'react-hook-form'
import Lightbox from 'react-awesome-lightbox'
import { useFileUpload } from 'use-file-upload'
import 'react-awesome-lightbox/build/style.css'

import Panel from '../../../../Panel'
import TextareaWithSunEditor from '../../../../TextareaWithSunEditor'

const SellerContentManagementBanner = () => {
    const [file, selectFile] = useFileUpload()
    const { register } = useForm({
        mode: 'onChange'
    })
    const [showLightbox, setShowLightbox] = useState(false)
    
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
                    mb='20px'
                >
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
                                Manage banner
                            </Text>
                        }
                        panelBody={
                            <Fragment>
                                <Box
                                    overflow='auto'
                                    overflowWrap='anywhere'
                                >
                                    <Text
                                        mb='8px'
                                        color='gray.500'
                                        fontSize='sm'
                                    >
                                        Select banner
                                        </Text>
                                    <Select
                                        placeholder='Select one'
                                        w='100%'
                                        borderColor='darkgrey'
                                        focusBorderColor='#DB3022'
                                    >
                                        <option value='option1'>Option 1</option>
                                        <option value='option2'>Option 2</option>
                                        <option value='option3'>Option 3</option>
                                    </Select>
                                </Box>
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
                                    Show action
                                </Button>
                            </Fragment>
                        }
                    />
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
                                Action's
                            </Text>
                        }
                        panelBody={
                            <Fragment>
                                <Stack
                                    shouldWrapChildren={true}
                                    spacing={10}
                                    overflow='auto'
                                    overflowWrap='anywhere'
                                >
                                    <Button
                                        leftIcon={<EditIcon />}
                                        w='100%'
                                        bg='blue.500'
                                        color='white'
                                        borderWidth={1}
                                        borderRadius={1}
                                        borderColor='blue.500'
                                        rounded='full'
                                        _hover={{
                                            bg: 'transparent',
                                            color: 'blue.500',
                                            borderColor: 'blue.500'
                                        }}
                                        _active={{
                                            bg: 'transparent',
                                            color: 'blue.500',
                                            borderColor: 'blue.500',
                                            opacity: '0.6'
                                        }}
                                        _focus={{
                                            boxShadow: false
                                        }}
                                    >
                                        Edit banner
                                    </Button>
                                    <Popover isLazy>
                                        <PopoverTrigger>
                                            <Button
                                                leftIcon={<DeleteIcon />}
                                                w='100%'
                                                bg='#FF0000'
                                                color='white'
                                                borderWidth={1}
                                                borderRadius={1}
                                                borderColor='#FF0000'
                                                rounded='full'
                                                _hover={{
                                                    bg: 'transparent',
                                                    color: '#FF0000',
                                                    borderColor: '#FF0000'
                                                }}
                                                _active={{
                                                    bg: 'transparent',
                                                    color: '#FF0000',
                                                    borderColor: '#FF0000',
                                                    opacity: '0.6'
                                                }}
                                                _focus={{
                                                    boxShadow: false
                                                }}
                                            >
                                                Delete banner
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <PopoverHeader fontWeight='semibold'>
                                                Confirmation!
                                            </PopoverHeader>
                                            <PopoverArrow />
                                            <PopoverCloseButton />
                                            <PopoverBody>
                                                Are you sure you want to continue with your action?
                                            </PopoverBody>
                                            <PopoverFooter
                                                d='flex'
                                                justifyContent='flex-end'
                                            >
                                                <ButtonGroup size='sm'>
                                                    <Button variant='outline'>Cancel</Button>
                                                    <Button colorScheme='red'>Apply</Button>
                                                </ButtonGroup>
                                            </PopoverFooter>
                                        </PopoverContent>
                                    </Popover>
                                </Stack>
                            </Fragment>
                        }
                    />
                </Stack>
                <Box>
                    <Text
                        fontStyle='normal'
                        fontWeight='bold'
                        fontSize='40px'
                        textColor='blue.500'
                    >
                        Edit banner's
                    </Text>
                    <Divider
                        mb='20px'
                        borderWidth={5}
                        w='15%'
                        borderColor='blue.600'
                        borderRightRadius={10}
                    />
                    <Panel
                        panelHead={
                            <Text
                                fontSize='2xl'
                                fontStyle='normal'
                                fontWeight='700'
                            >
                                Change banner
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
                                                Current name of banner
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
                                                Current reference
                                        </Text>
                                            <Input
                                                type='text'
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
                                        Current description
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
                        Save changes
                    </Button>
                </Box>
            </Stack>
        </Fragment>
    )
}

export default SellerContentManagementBanner
