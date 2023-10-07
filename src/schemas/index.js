import * as yup from "yup"
export const loginSchema=yup.object().shape({
    email:yup.string().email("please enter valid email").required("field is required"),
    password: yup.string().min(5).required()
})
export const registerSchema=yup.object().shape({
    name: yup.string().min(4).required("name is required"),
    email:yup.string().email("please enter valid email").required("field is required"),
    password:yup.string().min(5).required()
})