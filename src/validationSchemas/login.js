import * as YUP from 'yup'

export const loginValidationSchema = YUP.object().shape({
  email: YUP
    .string()
    .email()
    .required('Email is required'),
  password: YUP
    .string()
    .min(5, 'Too shorlt!')
    .max(1000, 'Too long !')
    .required('Password is required')
})
