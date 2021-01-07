import { Box, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { Fragment } from 'react'

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
                        colorScheme='red'
                        boxShadow='0px'
                        borderColor='transparent'
                        isFitted={true}
                        isLazy={true}
                    >
                        <TabList>
                            <Tab fontWeight='500'>All items</Tab>
                            <Tab fontWeight='500'>Not yet paid</Tab>
                            <Tab fontWeight='500'>Packed</Tab>
                            <Tab fontWeight='500'>Sent</Tab>
                            <Tab fontWeight='500'>Completed</Tab>
                            <Tab fontWeight='500'>Order cancel</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>Table 1</TabPanel>
                            <TabPanel>Table 2</TabPanel>
                            <TabPanel>Table 3</TabPanel>
                            <TabPanel>Table 4</TabPanel>
                            <TabPanel>Table 5</TabPanel>
                            <TabPanel>Table 6</TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Box>
        </Fragment>
    )
}

export default CustomerContentOrder
