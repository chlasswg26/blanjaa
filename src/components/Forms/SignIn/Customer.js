import { Button, Center, CircularProgress, FormControl, FormErrorMessage, Input, InputGroup, InputRightElement, Stack, useDisclosure } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SignInModel } from '../../../utils/Schema'
import { buttonFirstStyles, circularProgress } from '../../../assets/styles/Forms/Components/SignIn/Customer'
import { CheckIcon, CloseIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

const fields = [
    {
        type: 'email',
        name: 'email',
        placeholder: 'Email'
    },
    {
        type: 'password',
        name: 'password',
        placeholder: 'Password',
        control: true
    }
]

const Customer = () => {
    const { register, errors, handleSubmit, formState } = useForm({
        resolver: yupResolver(SignInModel)
    })
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {
        dirtyFields,
        touched,
        isSubmitSuccessful
    } = formState


    const checkType = (type, show) => {
        switch (type) {
            case 'password':
                if (show) {
                    return 'text'
                } else {
                    return 'password'
                }
            default:
                return type
        }
    }

    const checkMarginButton = (error, state, id) => {
        const {
            isSubmitted,
            dirtyFields,
            touched,
            isSubmitSuccessful
        } = state

        if (isSubmitted) {
            if (
                (dirtyFields[id] && touched[id] && error[id])
                ||
                (dirtyFields[id] && touched[id] && isSubmitSuccessful)
            ) {
                return '4rem'
            }
        }
    }

    const checkFirstIcon = show => {
        if (show) {
            return <ViewOffIcon color='#DB3022' />
        }

        return <ViewIcon color='#DB3022' />
    }

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
        console.log('test:', value)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            { fields.map((field, fieldIndex) => {
                return (
                    <FormControl
                        id={field.name}
                        key={fieldIndex}
                        isInvalid={errors[field.name]}
                    >
                        <InputGroup mb='0.8rem'>
                            <Input
                                type={checkType(field.type, isOpen)}
                                name={field.name}
                                placeholder={field.placeholder}
                                focusBorderColor='#DB3022'
                                ref={register}
                            />
                            { (field.type === 'password' && field.control) && (
                                <InputRightElement width='2.7rem'>
                                    <Button
                                        h='1.8rem'
                                        size='sm'
                                        onClick={isOpen ? onClose : onOpen}
                                        marginRight={checkMarginButton(errors, formState, field.name)}
                                    >
                                        { checkFirstIcon(isOpen) }
                                    </Button>
                                </InputRightElement>
                            )}
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
                            mt='-0.8rem'
                            mb='2rem'
                        >
                            { errors[field.name]?.message }
                        </FormErrorMessage>
                    </FormControl>
                )
            }) }

            <Center>
                <Button {...buttonFirstStyles}>
                    Submit
                </Button>
            </Center>
        </form>
    )
}

export default Customer
