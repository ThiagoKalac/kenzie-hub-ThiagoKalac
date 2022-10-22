import { MdOutlineVisibility as Visible, MdOutlineVisibilityOff as VisibleOff} from "react-icons/md"; 
import { Section, LoginForm } from "./loginStyle";
import { BtnMain } from "../../styles/Button";
import Input from "../../styles/Input";
import { useState, useContext} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { loginSchema } from "./loginSchema";
import { UserContext } from "../../context/UserContext";

export interface iUserLogin{
     email: string;
     password: string;
}



const Login = () => {
     const {userLogin, loading } = useContext(UserContext)
     const [typeInput, setTypeInput] = useState("password")
    
     

     const { register, handleSubmit , formState:{errors} } = useForm<iUserLogin>({
          resolver: yupResolver(loginSchema),
     })

     const seePassword = (boolean:boolean) => {
          return boolean? setTypeInput("text") : setTypeInput("password")
     }

     const subimitLogin = (data:iUserLogin) => {

          userLogin(data)
         
     }

     return (
     
     <Section>
               <h1>Kenzie Hub</h1>

               <LoginForm onSubmit={handleSubmit(subimitLogin)}>
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
                         typeInput === "text"?
                              <Visible className="iconVisiblePassaword" onClick={()=>seePassword(false)} />
                              :
                              <VisibleOff className="iconVisiblePassaword" onClick={()=>seePassword(true)} />
                         }
                    </div>
                    <BtnMain type="submit" disabled={loading}>
                         {loading ? 
                              <>
                                   <div className="animationLoadign"></div>
                                   "Carregando..."
                              </>
                              : 
                              "Entrar"
                         }
                    </BtnMain>

                    <span>Ainda não possui uma conta?</span>

                    <Link to={"../register"}>Cadastre-se</Link>
               </LoginForm>
              
     </Section>

)};

export default Login;
