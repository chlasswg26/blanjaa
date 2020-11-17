import { Schema } from 'rsuite'

const { StringType, NumberType } = Schema.Types

const SignUpModel = Schema.Model({
    name: StringType()
        .isRequired('This field is required.'),
    email: StringType()
        .isRequired('This field is required.')
        .isEmail('Please enter a valid email address.'),
    password: StringType()
        .isRequired('This field is required.')
        .minLength(8, 'Password must be at least 8 characters long.'),
    repeatPassword: StringType()
        .isRequired('This field is required.')
        .minLength(8, 'Password must be at least 8 characters long.')
        .addRule((value, data) => {
            if (value !== data.password) {
                return false
            }
            return true
        }, 'Passwords do not match.')
})
const VerifyCodeModel = Schema.Model({
    code: NumberType()
        .isRequired('This field is required.')
        .max(6, 'The maximum character length is 6.')
        .min(6, 'The minimum character length is 6.')
})
const SignInModel = Schema.Model({
    email: StringType()
        .isRequired('This field is required.')
        .isEmail('Email address format is incorrect.'),
    password: StringType()
        .isRequired('This field is required.')
        .minLength(8, 'Password must be at least 8 characters long.')
})

export {
    SignUpModel,
    VerifyCodeModel,
    SignInModel
}
