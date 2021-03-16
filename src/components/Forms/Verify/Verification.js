import { Flex, HStack, PinInput, PinInputField, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pinInputStyles } from '../../../assets/styles/Forms/Components/Verify/Verification'
import qs from 'querystring'
import { VerifyActionCreator } from '../../../redux/actions/auth'
import { useHistory } from 'react-router-dom'
import { persistor } from '../../../redux/store'

const Verification = () => {
    const [error, setError] = useState(false)
    const dispatch = useDispatch()
    const auth = useSelector(state => state.Auth)
    const verify = useSelector(state => state.Verify)
    const history = useHistory()

    const handleChangePin = value => {
        if (!value) {
            setError('This field is required.')
        } else {
            setError(false)
        }
    }

    const handleCompletePin = value => {
        if (value.length === 6) {
            dispatch(
                VerifyActionCreator(
                    qs.stringify(
                        {
                            email: verify.register.response?.email,
                            otp_code: value
                        }
                    )
                )
            )
        } else {
            setError('This field value must be equal 6.')
        }
    }

    useEffect(() => {
        if (auth.verify.isFulfilled) {
            persistor.purge(['Verify'])
            history.push('/auth/signin', {
                type: 'success',
                message: auth.verify.response?.message
            })
        }
    }, [
        auth,
        history
    ])

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
                mt='16px'
            >
                { error && error }
            </Text>
        </Flex>
    )
}

export default Verification
