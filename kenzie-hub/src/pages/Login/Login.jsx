import { MdOutlineVisibility as Visible, MdOutlineVisibilityOff as VisibleOff} from 'react-icons/md'; 
import { Section, LoginForm } from "./LoginStyle";
import { BtnMain } from "../../styles/Button.js";
import Input from "../../styles/Input.js";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';


const Login = () => {
     const [typeInput, setTypeInput] = useState('password')
     
     const formSchema = yup.object().shape({
          email: yup.string().required("Informa um e-mail cadastrado").email('E-mail invalido'),
          password: yup.string().required("senha ou e-mail invalido")
     })

     const { register, handleSubmit , formState:{errors} } = useForm({
          resolver: yupResolver(formSchema),
     })

     const seePassword = (boolean) => {
          return boolean? setTypeInput('text') : setTypeInput('password')
     }

     const loginUser = (data) => {
          return console.log(data)
     }

     return (
     
     <Section>
               <h1>Kenzie Hub</h1>

               <LoginForm onSubmit={handleSubmit(loginUser)}>
                    <h2>Login</h2>
                    <label htmlFor="email">Email</label>
                    <Input placeholder=" Digite seu e-mail"  {...register("email")} />
                    <p className="textError">{errors.email?.message}</p>

                    <label htmlFor="password">Senha</label>
                    <div className="boxInputVisiblePassword">
                         <Input
                              type={typeInput}
                              {...register("password")}
                              placeholder=" Digite sua senha"
                         />
                         <p className="textError">{errors.password?.message}</p>
                         {
                         typeInput === 'text'?
                              <Visible className="iconVisiblePassaword" onClick={()=>seePassword(false)} />
                              :
                              <VisibleOff className="iconVisiblePassaword" onClick={()=>seePassword(true)} />
                         }
                    </div>
                    <BtnMain type="submit">Entrar</BtnMain>

                    <span>Ainda não possui uma conta?</span>

                    <Link to={'../register'}>Cadastre-se</Link>
               </LoginForm>

     
     </Section>

)};

export default Login;
