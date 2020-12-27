import { Button, HStack, IconButton, Stack, Text } from '@chakra-ui/react'
import CarouselCategoryItem from './Items/CarouselCategoryItem'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { horizontalStackStyles, textFirstStyles, textSecondStyles, iconButtonFirstStyles, iconButtonSecondStyles, buttonFirstStyles } from '../assets/styles/CarouselCategory'

const CarouselCategory = () => {
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
                    />
                    <IconButton
                        {...iconButtonSecondStyles}
                        icon={
                            <MdKeyboardArrowRight size='27.2px' />
                        }
                    />
                </Stack>
            </Stack>
            <CarouselCategoryItem />
            <Button {...buttonFirstStyles} />
        </HStack>
    )
}

export default CarouselCategory
