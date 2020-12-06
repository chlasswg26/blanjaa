import { Button, Center, CircularProgress, FormControl, FormErrorMessage, Input, InputGroup, InputRightElement, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SignUpModel } from '../../../utils/Schema'
import { buttonFirstStyles, circularProgress } from '../../../assets/styles/Forms/Components/SignUp/Seller'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'

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
        type: 'number',
        name: 'phone',
        placeholder: 'Phone'
    },
    {
        type: 'text',
        name: 'store',
        placeholder: 'Store'
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

const Seller = () => {
    const { register, errors, handleSubmit, formState } = useForm({
        resolver: yupResolver(SignUpModel)
    })
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [phone, setPhone] = useState()
    const [store, setStore] = useState()
    const [repeatPassword, setRepeatPassword] = useState()
    const {
        dirtyFields,
        touched,
        isSubmitSuccessful
    } = formState

    console.log(name, email, password, repeatPassword, phone, store)

    const handleChange = event => {
        event.preventDefault()
        const { name, value } = event.target

        switch (name) {
            case 'name':
                setName(value)
                break
            case 'email':
                setEmail(value)
                break
            case 'phone':
                setPhone(value)
                break
            case 'store':
                setStore(value)
                break
            case 'password':
                setPassword(value)
                break
            case 'repeatPassword':
                setRepeatPassword(value)
                break
            default:
                break
        }
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

    const onSubmit = () => console.log('test')

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
                                type={field.type}
                                name={field.name}
                                placeholder={field.placeholder}
                                onChange={(event) => handleChange(event)}
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
                                ) }
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

export default Seller
