import { Center, Image, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { CenterBoxStyles } from '../../assets/styles/Items/CarouselCategoryItem'
import { useState } from 'react'
import { Fragment } from 'react'
import { authenticate } from 'pixabay-api'

const CarouselCategoryItem = () => {
    const [image, setImage] = useState()
    const { searchImages } = authenticate(process.env.REACT_APP_PIXABAYKEY)
    searchImages('pakaian')
        .then((r) => setImage(r.hits[0].webformatURL))

    return (
        <Link
            to='/'
            children={
                <Center
                    {...CenterBoxStyles}
                    children={
                        <Fragment>
                            <Stack
                                direction='column'
                                align='center'
                            >
                                <Image
                                    srcSet={image}
                                    boxSize='140px'
                                    rounded='10px'
                                />
                                <Text fontSize='lg'>
                                    Elektronik
                                </Text>
                            </Stack>
                        </Fragment>
                    }
                />
            }
        />
    )
}

export default CarouselCategoryItem
