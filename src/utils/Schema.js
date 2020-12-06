import * as Yup from 'yup'

const SignUpModel = Yup.object().shape({
    name: Yup
        .string()
        .label('Name')
        .required('This field is required.'),
    email: Yup
        .string()
        .label('Email')
        .required('This field is required.')
        .email('Please enter a valid email address.'),
    phone: Yup
        .string()
        .label('Phone number')
        .min(11, 'The minimum character length is 11')
        .max(13, 'The maximum character length is 13'),
    store: Yup
        .string()
        .label('Store name')
        .nullable(true),
    password: Yup
        .string()
        .label('Password')
        .required('This field is required.')
        .min(8, 'Password must be at least 8 characters long.'),
    repeatPassword: Yup
        .string()
        .label('Repeat password')
        .required('This field is required.')
        .min(8, 'Password must be at least 8 characters long.')
        .when('password', {
            is: value => (value && value.length > 0 ? true : false),
            then: Yup.string().oneOf(
                [Yup.ref('password')],
                'Passwords do not match.'
            )
        })
})
const VerifyCodeModel = Yup.object().shape({
    code: Yup
        .string()
        .label('Code')
        .required('This field is required.')
        .max(6, 'The maximum character length is 6.')
        .min(6, 'The minimum character length is 6.')
})
const SignInModel = Yup.object().shape({
    email: Yup
        .string()
        .label('Email')
        .required('This field is required.')
        .email('Email address format is incorrect.'),
    password: Yup
        .string()
        .label('Password')
        .required('This field is required.')
        .min(8, 'Password must be at least 8 characters long.')
})

export {
    SignUpModel,
    VerifyCodeModel,
    SignInModel
}
