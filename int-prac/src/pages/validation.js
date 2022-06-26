import * as yup from 'yup'

export const usrVAlidation = yup.object({
    name: yup.string().required('name is required'),
    email:yup.string().email().required('emial is required'),
    password:yup.string().required('none shall pass without password')
    .min(5,' at least 5 :/')
    // .matches()
})