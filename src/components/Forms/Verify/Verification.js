import { Flex, HStack, PinInput, PinInputField, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { pinInputStyles } from '../../../assets/styles/Forms/Components/Verify/Verification'

const Verification = () => {
    const [error, setError] = useState(false)

    const handleChangePin = value => {
        if (!value) {
            setError('This field is required.')
        } else {
            setError(false)
        }
    }

    const handleCompletePin = value => {
        if (value.length === 6) {
            console.log('value is:', value)
        } else {
            setError('This field value must be equal 6.')
        }
    }

    return (
        <Flex
            justify='center'
            display='block'
            direction='column'
        >
            <HStack>
                <PinInput
                    {...pinInputStyles}
                    isInvalid={error && true}
                    onChange={value => handleChangePin(value)}
                    onComplete={value => handleCompletePin(value)}
                >
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                </PinInput>
            </HStack>
            
            <Text
                color='crimson'
                mt='1rem'
            >
                { error && error }
            </Text>
        </Flex>
    )
}

export default Verification
