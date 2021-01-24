import { Box } from '@chakra-ui/react'

const PanelItem = ({
    mainStyles,
    headStyles,
    bodyStyles,
    panelHead,
    panelBody
}) => {
    return (
        <Box
            w='100%'
            boxShadow='md'
            bg='white'
            rounded='7.5px'
            mb='17.5px'
            {...mainStyles}
        >
            <Box
                p={5}
                maxWidth='100%'
                borderBottomWidth={1}
                borderBottomColor='gray.300'
                boxShadow='initial'
                {...headStyles}
            >
                { panelHead }
            </Box>
            <Box
                p={8}
                maxWidth='100%'
                {...bodyStyles}
            >
                { panelBody }
            </Box>
        </Box>
    )
}

export default PanelItem
