import { Center, Image, Stack, Text, useToast } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { CenterBoxStyles } from '../../assets/styles/Items/CarouselCategoryItem'
import { Fragment, useEffect, useState } from 'react'
import { authenticate } from 'pixabay-api'

const CarouselCategoryItem = () => {
    const { searchImages } = authenticate(process.env.REACT_APP_PIXABAYKEY)
    const [image, setImage] = useState('')
    const toast = useToast()

    useEffect(() => {
        const loadImagesFromPixabay = () => {
            searchImages('pakaian', {
                per_page: 3,
                safesearch: true
            })
                .then(result => {
                    setImage(result.hits[0].webformatURL)
                })
                .catch(error => {
                    toast({
                        title: 'Warning',
                        description: `Failed to load picture of category.\n\r${error}`,
                        status: 'warning',
                        duration: 3600,
                        isClosable: true
                    })
                    setImage('')
                })
        }

        loadImagesFromPixabay()
    }, [])

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
                                    crossOrigin='use-credentials'
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
