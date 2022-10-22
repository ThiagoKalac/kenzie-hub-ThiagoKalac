import * as yup from 'yup';

export const loginSchema = yup.object().shape({
     email: yup.string().required("Informa um e-mail cadastrado").email("E-mail invalido"),
     password: yup.string().required("senha ou e-mail invalido")
})