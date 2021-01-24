import { SearchIcon } from '@chakra-ui/icons'
import { Box, Center, Flex, Heading, IconButton, Image, Input, InputGroup, InputLeftElement, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { Td, Th, Tr } from '@chakra-ui/table'
import { Fragment } from 'react'
import { FaSort } from 'react-icons/fa'

import EmptyData from '../../../../../assets/images/empty_data.png'
import DataTable from '../../../../DataTable'

const mappingTabs = [
    'All items',
    'Sold out'
]

const SellerContentProduct = () => {
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
                        pb='15px'
                        overflow='auto'
                        overflowWrap='anywhere'
                    >
                        <Heading
                            as='h5'
                            size='md'
                            pb='4.5px'
                            pl='4.5px'
                        >
                            My product
                        </Heading>
                    </Flex>
                    <Tabs
                        align='start'
                        colorScheme='red'
                        boxShadow='0px'
                        borderColor='transparent'
                        isFitted={false}
                        isLazy
                    >
                        <TabList>
                            {mappingTabs.map((tab, tabIndex) => {
                                return (
                                    <Tab
                                        key={tabIndex}
                                        fontWeight='500'
                                        color='gray.400'
                                        borderColor='gray.400'
                                        borderBottomWidth='1px'
                                        _selected={{
                                            color: '#DB3022',
                                            bg: 'transparent',
                                            borderColor: '#DB3022',
                                            borderBottomWidth: '3.5px',
                                            boxShadow: 'none'
                                        }}
                                        _active={{
                                            color: '#DB3022',
                                            bg: 'transparent',
                                            borderColor: '#DB3022',
                                            borderBottomWidth: '3.5px',
                                            boxShadow: 'none'
                                        }}
                                    >
                                        { tab }
                                    </Tab>
                                )
                            })}
                        </TabList>
                        <InputGroup mt='37.8px'>
                            <Input
                                type='text'
                                name='search'
                                placeholder='Search'
                                focusBorderColor='#DB3022'
                                w='360px'
                                rounded='32px'
                                borderColor='#A0AEC0'
                            />
                            <InputLeftElement>
                                <Box
                                    as='label'
                                    variant='none'
                                    h='28.8px'
                                    size='sm'
                                    rounded='32px'
                                    bgColor='transparent'
                                    color='#A0AEC0'
                                    _focus={{
                                        boxShadow: false
                                    }}
                                    aria-label='Search'
                                    children={<SearchIcon />}
                                />
                            </InputLeftElement>
                        </InputGroup>
                        <TabPanels>
                            {mappingTabs.map((_, tabPanelIndex) => {
                                return (
                                    <TabPanel key={tabPanelIndex}>
                                        <DataTable
                                            tableStyles={{
                                                borderWidth: 1,
                                                borderRadius: '17.5px',
                                                borderColor: 'gray.300',
                                                w: '100%'
                                            }}
                                            headStyles={{
                                                bg: '#EDF0F3',
                                                p: '20px',
                                                overflow: 'auto',
                                                overflowWrap: 'anywhere'
                                            }}
                                            headItem={
                                                <Tr h='50px'>
                                                    <Th
                                                        pl='25px'
                                                        pr='330px'
                                                        textAlign='left'
                                                        color='gray.500'
                                                        fontWeight='500'
                                                    >
                                                        Product name
                                                        <IconButton
                                                            aria-label='Sort Indicator'
                                                            color='gray.500'
                                                            icon={
                                                                <FaSort />
                                                            }
                                                            _hover={{
                                                                opacity: '0.3'
                                                            }}
                                                            _focus={false}
                                                            _active={{
                                                                opacity: '1'
                                                            }}
                                                        />
                                                    </Th>
                                                    <Th
                                                        textAlign='left'
                                                        color='gray.500'
                                                        fontWeight='500'
                                                    >
                                                        Price
                                                        <IconButton
                                                            aria-label='Sort Indicator'
                                                            color='gray.500'
                                                            icon={
                                                                <FaSort />
                                                            }
                                                            _hover={{
                                                                opacity: '0.3'
                                                            }}
                                                            _focus={false}
                                                            _active={{
                                                                opacity: '1'
                                                            }}
                                                        />
                                                    </Th>
                                                    <Th
                                                        textAlign='left'
                                                        color='gray.500'
                                                        fontWeight='500'
                                                    >
                                                        Stock
                                                        <IconButton
                                                            aria-label='Sort Indicator'
                                                            color='gray.500'
                                                            icon={
                                                                <FaSort />
                                                            }
                                                            _hover={{
                                                                opacity: '0.3'
                                                            }}
                                                            _focus={false}
                                                            _active={{
                                                                opacity: '1'
                                                            }}
                                                        />
                                                    </Th>
                                                </Tr>
                                            }
                                            bodyItem={
                                                <Fragment>
                                                    {/* <Tr justifyItems='stretch'>
                                                        <Td
                                                            pl='25px'
                                                            pr='300px'
                                                            w='70%'
                                                        >
                                                            <Text
                                                                overflow='auto'
                                                                overflowWrap='anywhere'
                                                            >
                                                                Iphone 100 Pro
                                                            </Text>
                                                        </Td>
                                                        <Td>
                                                            <Text
                                                                overflow='auto'
                                                                overflowWrap='anywhere'
                                                            >
                                                                Rp 55,000,000
                                                            </Text>
                                                        </Td>
                                                        <Td>
                                                            <Text
                                                                overflow='auto'
                                                                overflowWrap='anywhere'
                                                            >
                                                                Rp 55,000,000
                                                            </Text>
                                                        </Td>
                                                    </Tr> */}
                                                    <Tr>
                                                        <Td>
                                                            <Center
                                                                p='20px'
                                                                ml='30%'
                                                            >
                                                                <Image
                                                                    srcSet={EmptyData}
                                                                    fit='cover'
                                                                />
                                                            </Center>
                                                        </Td>
                                                    </Tr>
                                                </Fragment>
                                            }
                                        />
                                    </TabPanel>
                                )
                            })}
                        </TabPanels>
                    </Tabs>
                </Box>
            </Box>
        </Fragment>
    )
}

export default SellerContentProduct
