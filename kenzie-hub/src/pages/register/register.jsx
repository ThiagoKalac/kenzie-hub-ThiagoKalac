import { Section, RegisterForm } from "./registerStyle"
import { Link, useNavigate } from 'react-router-dom';
import Input from "../../styles/Input";
import { BtnMain } from "../../styles/Button.js";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const Register = () => {

     const navigate = useNavigate()

     const registerSchema = yup.object().shape({
          name: yup.string().required("Informe seu nome"),
          email: yup.string().required("Informa um e-mail cadastrado").email('E-mail invalido'),
          password: yup.string()
               .matches(/[A-Z]/, 'Deve conter ao menos 1 letra maiúscula')
               .matches(/[a-z]/, 'Deve conter ao menos 1 letra minuscula')
               .matches(/(\d)/, 'Deve conter ao menos um número')
               .matches(/(\W)|_/, 'Deve conter um caracter especial')
               .matches(/.{8,}/, 'Deve ter no minimo 8 digitos')
               .required('Senha é obrigatória'),
          confirmPassword: yup.string().oneOf([yup.ref('password')], 'Confirmação de senha deve ser igual a senha'),
          bio: yup.string(),
          contact: yup.string().required('Informe um número para contato via whatsapp'),
          module: yup.string().required('Escolha um módulo'),
     });

     
     const { register, handleSubmit, formState: { errors } } = useForm({
          resolver: yupResolver(registerSchema),
     })

     const registerUser = (data) => {
          return console.log(data)
          // redirecionar para login
     }

     return (
          <Section>
               <div className="containerLogo">
                    <h1>Kenzie Hub</h1>
                    <Link onClick={()=> navigate(-1)}>Voltar</Link>
               </div>
               <RegisterForm onSubmit={handleSubmit(registerUser)}>
                    <h2>Crie sua conta</h2>
                    <span>Rapido e grátis, vamos nessa</span>

                    <label htmlFor="name">Nome</label>
                    <Input type="text" placeholder=" Digite seu nome" {...register("name")} />
                    <p className="textError">{errors.name?.message}</p>

                    <label htmlFor="email">E-mail</label>
                    <Input placeholder=" Digite seu e-mail" {...register("email")} />
                    <p className="textError">{errors.email?.message}</p>

                    <label htmlFor="password">Senha</label>
                    <Input type="password" placeholder=" Digite sua senha" {...register("password")} />
                    <p className="textError">{errors.password?.message}</p>

                    <label htmlFor="confirmPassword">Confirma senha</label>
                    <Input type="password" placeholder=" Confirme sua senha" {...register("confirmPassword")} />
                    <p className="textError">{errors.confirmPassword?.message}</p>

                    <label htmlFor="bio">Bio</label>
                    <Input type="text" placeholder=" Fala sobre você" {...register("bio")} />

                    <label htmlFor="contact">Contato</label>
                    <Input type="tel" placeholder=" Qual seu whatsapp?" {...register("contact")} />
                    <p className="textError">{errors.contact?.message}</p>
                    
                    <label htmlFor="module">Selecionar módulo</label>
                    <select {...register('module')}>
                         <option value="">escolha seu módulo</option>
                         <option value="m1">módulo 1</option>
                         <option value="m2">módulo 2</option>
                         <option value="m3">módulo 3</option>
                         <option value="m4">módulo 4</option>
                         <option value="m5">módulo 5</option>
                         <option value="m6">módulo 6</option>
                    </select>
                    <p className="textError">{errors.module?.message}</p>
                    <BtnMain type="submit">Cadastrar</BtnMain>
               </RegisterForm>
          </Section>
     )
}


export default Register



