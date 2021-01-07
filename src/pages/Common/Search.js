import { Box } from '@chakra-ui/react'
import { Fragment } from 'react'
import GuestNavbar from '../../components/Navbar/GuestNavbar'

const Search = () => {
    return (
        <Fragment>
            <GuestNavbar />
            <Box
                py='3.5%'
                px='6.5%'
                overflow='auto'
                overflowWrap='anywhere'
            >
                test
            </Box>
        </Fragment>
    )
}

export default Search
