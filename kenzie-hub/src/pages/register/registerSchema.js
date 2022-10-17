import * as yup from "yup";

export const registerSchema = yup.object().shape({
     name: yup.string().required("Informe seu nome"),
     email: yup.string().required("E-mail obrigatório").email("Informe um E-mail valido"),
     password: yup.string()
          .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
          .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
          .matches(/(\d)/, "Deve conter ao menos um número")
          .matches(/(\W)|_/, "Deve conter um caracter especial")
          .matches(/.{8,}/, "Deve ter no minimo 8 digitos")
          .required('Senha é obrigatória'),
     confirmPassword: yup.string().oneOf([yup.ref('password')], 'Confirmação de senha deve ser igual a senha'),
     bio: yup.string().required("Bio é necessário"),
     contact: yup.string().required("Informe um número para contato via whatsapp"),
     course_module: yup.string().required("Escolha um módulo"),
});

