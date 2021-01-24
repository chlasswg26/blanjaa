import { Button, Center, CircularProgress, FormControl, FormErrorMessage, Input, InputGroup, InputRightElement, Stack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SignUpModel } from '../../../utils/Schema'
import { buttonFirstStyles, circularProgress } from '../../../assets/styles/Forms/Components/SignUp/Customer'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { RegisterActionCreator } from '../../../redux/actions/auth'
import qs from 'querystring'
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'

const fields = [
    {
        type: 'text',
        name: 'name',
        placeholder: 'Name'
    },
    {
        type: 'email',
        name: 'email',
        placeholder: 'Email'
    },
    {
        type: 'password',
        name: 'password',
        placeholder: 'Password'
    },
    {
        type: 'password',
        name: 'repeatPassword',
        placeholder: 'Repeat Password'
    }
]

const Customer = () => {
    const { register, errors, handleSubmit, formState } = useForm({
        resolver: yupResolver(SignUpModel)
    })
    const {
        dirtyFields,
        touched,
        isSubmitSuccessful
    } = formState
    const dispatch = useDispatch()
    const history = useHistory()
    const auth = useSelector(state => state.Auth)
    const [emailOnSubmit, setEmailOnSubmit] = useState()

    const checkSecondIcon = (error, state, id) => {
        const {
            isSubmitting,
            isSubmitted,
            isSubmitSuccessful
        } = state

        if (isSubmitting) {
            return (
                <CircularProgress {...circularProgress} />
            )
        } else {
            if (isSubmitted) {
                if (error[id] && !isSubmitSuccessful) {
                    return <CloseIcon color='crimson' />
                } else {
                    if (isSubmitSuccessful) {
                        return <CheckIcon color='lime' />
                    }
                }
            }
        }
    }

    const onSubmit = value => {
        delete value.repeatPassword
        dispatch(
            RegisterActionCreator(
                qs.stringify(value)
            )
        )
        setEmailOnSubmit(value.email)
    }

    useEffect(() => {
        if (auth?.register?.isFulfilled) {
            history.push(
                '/auth/verify',
                {
                    guestEmail: emailOnSubmit
                }
            )
        }
    }, [
        auth,
        emailOnSubmit,
        history
    ])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            { fields.map((field, fieldIndex) => {
                return (
                    <FormControl
                        id={field.name}
                        key={fieldIndex}
                        isInvalid={errors[field.name]}
                    >
                        <InputGroup mb='12.8px'>
                            <Input
                                type={field.type}
                                name={field.name}
                                placeholder={field.placeholder}
                                focusBorderColor='#DB3022'
                                ref={register}
                            />
                            { (
                                (dirtyFields[field.name] && touched[field.name] && errors[field.name])
                                ||
                                (dirtyFields[field.name] && touched[field.name] && isSubmitSuccessful)
                            ) && (
                                    <Stack>
                                        <InputRightElement children={checkSecondIcon(errors, formState, field.name)} />
                                    </Stack>
                                )}
                        </InputGroup>
                        <FormErrorMessage
                            mt='-12.8px'
                            mb='32px'
                        >
                            { errors[field.name]?.message }
                        </FormErrorMessage>
                    </FormControl>
                )
            }) }

            <Center>
                <Button
                    {...buttonFirstStyles}
                    loadingText='Submitting'
                    isLoading={auth?.register?.isLoading}
                >
                    Submit
                </Button>
            </Center>
        </form>
    )
}

export default Customer
