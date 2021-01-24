import { Box, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { Fragment } from 'react'

const mappingTabs = [
    'All items',
    'Not yet paid',
    'Packed',
    'Sent',
    'Completed',
    'Order cancel'
]

const CustomerContentOrder = () => {
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
                    >
                        <TabList>
                            { mappingTabs.map((tab, tabIndex) => {
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
                            }) }
                        </TabList>
                        <TabPanels>
                            {mappingTabs.map((tab, tabPanelIndex) => {
                                return (
                                    <TabPanel key={tabPanelIndex}>
                                        Tab {tab}
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

export default CustomerContentOrder
