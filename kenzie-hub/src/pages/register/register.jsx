import { Section, RegisterForm } from "./registerStyle"
import { Link, useNavigate } from "react-router-dom";
import Input from "../../styles/Input";
import { BtnMain } from "../../styles/Button.js";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterUserApi } from "../../services/api";
import { useState, useEffect } from "react";
import { ToastContainer,toast, Flip} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
     const [loading , setLoading] = useState(false)
     const navigate = useNavigate()
     const token = localStorage.getItem("@KenzieHubToken")

     useEffect(() => {
          if (token) {
               navigate("/dashboard")
          }
     })
     const registerSchema = yup.object().shape({
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

     
     const { register, handleSubmit, formState: { errors } } = useForm({
          resolver: yupResolver(registerSchema),
     })

     const subimitRegisterUser = async (data) => {
          if (data) {
               setLoading(true)
               const loadingToast = toast.loading("Carregando...")
               const responseApi = await RegisterUserApi(data)
               
               if (responseApi.status === 201) {

                    setLoading(false)
                    
                    toast.update(loadingToast, { render: "Cadastrado com sucesso", type: "success", isLoading: false, autoClose: 2000, theme:"dark",position: "top-center",  transition: Flip});
                    navigate("/")

               } else {
                    console.log(responseApi)
                    toast.update(loadingToast, { render: "Ops, esse e-mail já existe", type: "error", isLoading: false, autoClose: 2000, theme:"dark",position: "top-center",transition: Flip});
                    setTimeout(() => { 
                         setLoading(false)
                    },2000)
               }
          }
     }


     return (
          <Section>
               <div className="containerLogo">
                    <h1>Kenzie Hub</h1>
                    <Link onClick={()=> navigate(-1)}>Voltar</Link>
               </div>
               <RegisterForm onSubmit={handleSubmit(subimitRegisterUser)}>
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
                    
                    <label htmlFor="course_module">Selecionar módulo</label>
                    <select {...register("course_module")}>
                         <option value="">Escolha seu módulo</option>
                         <option value="m1">M1: Introdução ao HTML/CSS</option>
                         <option value="m2">M2: JavaScript</option>
                         <option value="m3">M3: React</option>
                         <option value="m4">M4: Introdução ao BackEnd</option>
                         <option value="m5">M5: Python/Node.js</option>
                         <option value="m6">M6: Empregabilidade</option>
                    </select>
                    <p className="textError">{errors.module?.message}</p>
                    <BtnMain type="submit" disabled={loading}>
                         {loading ?
                              <>
                                   <div className="animationLoadign"></div>
                                   "Cadastrando..."
                              </>
                              : 
                              "Cadastrar"
                         }
                    </BtnMain>
               </RegisterForm>
               <ToastContainer/>
          </Section>
     )
}


export default Register



