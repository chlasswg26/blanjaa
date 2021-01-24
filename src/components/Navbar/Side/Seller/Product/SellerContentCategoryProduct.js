import { Fragment } from 'react'
import { Box, Button, Flex, Input, Select, Stack, Tag, TagCloseButton, TagLabel, Text } from '@chakra-ui/react'
import Panel from '../../../../Panel'

const SellerContentCategoryProduct = () => {
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
                            <Fragment>
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
                                            focusBorderColor='#DB3022'
                                            borderColor='darkgrey'
                                            w='305px'
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
                                    Add
                                </Button>
                            </Fragment>
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
                        h: '700px'
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
                        <Flex
                            flexDirection='row'
                            flexWrap='wrap'
                            justify='stretch'
                        >
                            {['lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg'].map((size) => (
                                <Tag
                                    size={size}
                                    key={size}
                                    borderRadius='full'
                                    variant='solid'
                                    colorScheme='green'
                                    m='5px'
                                >
                                    <TagLabel>Green</TagLabel>
                                    <TagCloseButton />
                                </Tag>
                            ))}
                        </Flex>
                    }
                />
            </Stack>
        </Fragment>
    )
}

export default SellerContentCategoryProduct
