import { Section, RegisterForm } from "./registerStyle"
import { Link, useNavigate } from "react-router-dom";
import Input from "../../styles/Input";
import { BtnMain } from "../../styles/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { registerSchema } from "./registerSchema";
import { UserContext } from "../../context/UserContext";

export interface iUserRegister{
     name: string;
     email: string;
     password: string;
     confirmPassword: string;
     bio: string;
     contact: string;
     course_module: string;
}


const Register = () => {
     const {userRegister,loading} = useContext(UserContext)
     const navigate = useNavigate()
   
     
     
     const { register, handleSubmit, formState: { errors } } = useForm<iUserRegister>({
          resolver: yupResolver(registerSchema),
     })

     const subimitRegisterUser = async (data:iUserRegister) => {

          userRegister(data)
         
     }


     return (
          <Section>
               <div className="containerLogo">
                    <h1>Kenzie Hub</h1>
                    <Link to="" onClick={()=> navigate(-1)}>Voltar</Link>
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
                    <p className="textError">{errors.bio?.message}</p>

                    <label htmlFor="contact">Contato</label>
                    <Input type="tel" placeholder=" Linkedin ou WhatsApp" {...register("contact")} />
                    <p className="textError">{errors.contact?.message}</p>
                    
                    <label htmlFor="course_module">Selecionar módulo</label>
                    <select {...register("course_module")}>
                         <option value="">Escolha seu módulo</option>
                         <option value="M1: Introdução ao HTML/CSS">M1: Introdução ao HTML/CSS</option>
                         <option value="M2: JavaScript">M2: JavaScript</option>
                         <option value="M3: React">M3: React</option>
                         <option value="M4: Introdução ao BackEnd">M4: Introdução ao BackEnd</option>
                         <option value="M5: Python/Node.js">M5: Python/Node.js</option>
                         <option value="M6: Empregabilidade">M6: Empregabilidade</option>
                    </select>
                    <p className="textError">{errors.course_module?.message}</p>
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
          </Section>
     )
}


export default Register



