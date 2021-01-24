import { Box, Button, HStack, IconButton, Stack, Text } from '@chakra-ui/react'
import CarouselCategoryItem from './Items/CarouselCategoryItem'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { horizontalStackStyles, textFirstStyles, textSecondStyles, iconButtonFirstStyles, iconButtonSecondStyles, buttonFirstStyles, buttonSecondStyles } from '../assets/styles/CarouselCategory'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { useState } from 'react'

const responsive = {
    0: { items: 2 },
    568: { items: 3 },
    1024: { items: 4 }
}

const carouselItem = [
    <CarouselCategoryItem />,
    <CarouselCategoryItem />,
    <CarouselCategoryItem />,
    <CarouselCategoryItem />,
    <CarouselCategoryItem />,
    <CarouselCategoryItem />,
    <CarouselCategoryItem />,
    <CarouselCategoryItem />,
]

const renderDotsItem = ({ isActive }) => {
    return isActive ? <Button {...buttonFirstStyles} /> : <Button {...buttonSecondStyles} />
}

const CarouselCategory = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [slideInfo, setSlideInfo] = useState()

    const slidePrev = () => setActiveIndex(activeIndex - 1)
    const slideNext = () => setActiveIndex(activeIndex + 1)
    const onSlideChanged = props => setSlideInfo(props)
    
    return (
        <HStack {...horizontalStackStyles}>
            <Stack
                direction='column'
                mb='120px'
            >
                <Text {...textFirstStyles}>
                    Category
                </Text>
                <Text {...textSecondStyles}>
                    What are you currently looking for
                </Text>

                <Stack
                    direction='row'
                    spacing={4}
                >
                    <IconButton
                        {...iconButtonFirstStyles}
                        icon={
                            <MdKeyboardArrowLeft size='27.2px' />
                        }
                        isDisabled={slideInfo?.isPrevSlideDisabled ? true : false}
                        onClick={slidePrev}
                    />
                    <IconButton
                        {...iconButtonSecondStyles}
                        icon={
                            <MdKeyboardArrowRight size='27.2px' />
                        }
                        isDisabled={slideInfo?.isNextSlideDisabled ? true : false}
                        onClick={slideNext}
                    />
                </Stack>
            </Stack>
            <Box w='65%'>
                <AliceCarousel
                    responsive={responsive}
                    mouseTracking
                    items={carouselItem}
                    renderDotsItem={renderDotsItem}
                    activeIndex={activeIndex}
                    onSlideChanged={onSlideChanged}
                    disableButtonsControls
                    animationType='fadeout'
                    paddingRight={60}
                />
            </Box>
        </HStack>
    )
}

export default CarouselCategory
