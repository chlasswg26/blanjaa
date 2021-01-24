import { SearchIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, Image, Input, InputGroup, InputLeftElement, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { Fragment, useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import NoOrders from '../../../../../assets/images/empty_orders.png'
import DataTableWithHook from '../../../../DataTableWithHook'

const mappingTabs = [
    'All items',
    'Get paid',
    'Processed',
    'Sent',
    'Completed',
    'Order cancel'
]

const SellerContentOrder = () => {
    const location = useLocation()
    const [selectedIndex, setSelectedIndex] = useState(0)

    const data = useMemo(
        () => [
            {
                fromUnit: 'inches',
                toUnit: 'millimetres (mm)',
                factor: 25.4,
            },
            {
                fromUnit: 'feet',
                toUnit: 'centimetres (cm)',
                factor: 30.48,
            },
            {
                fromUnit: 'yards',
                toUnit: 'metres (m)',
                factor: 0.91444,
            },
        ],
        [],
    )

    const columns = useMemo(
        () => [
            {
                Header: 'To convert',
                accessor: 'fromUnit',
            },
            {
                Header: 'Into',
                accessor: 'toUnit',
            },
            {
                Header: 'Multiply by',
                accessor: 'factor',
                isNumeric: true,
            },
        ],
        [],
    )
    
    useEffect(() => {
        switch (location.pathname){
            case '/seller/order/cancel':
                setSelectedIndex(5)
                break
            default:
                setSelectedIndex(0)
                break
        }
    }, [location])

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
                            My order
                        </Heading>
                    </Flex>
                    <Tabs
                        align='center'
                        colorScheme='red'
                        boxShadow='0px'
                        borderColor='transparent'
                        isFitted
                        isLazy
                        defaultIndex={location.pathname === '/seller/order/cancel' ? 5 : 0}
                        index={selectedIndex}
                        onChange={(index) => setSelectedIndex(index)}
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
                                        <DataTableWithHook
                                            columns={columns}
                                            data={data}
                                        />
                                        {/* <Image
                                            srcSet={NoOrders}
                                            fit='cover'
                                            mt='50px'
                                        /> */}
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

export default SellerContentOrder
