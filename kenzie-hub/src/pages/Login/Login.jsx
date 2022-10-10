import { MdOutlineVisibility as Visible, MdOutlineVisibilityOff as VisibleOff} from "react-icons/md"; 
import { Section, LoginForm } from "./loginStyle";
import { BtnMain } from "../../styles/Button.js";
import Input from "../../styles/Input.js";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { LoginUserApi } from "../../services/api";
import { ToastContainer,toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
     const [typeInput, setTypeInput] = useState("password")
     const [loading, setLoading] = useState(false)
     const navigate = useNavigate()
     const token = localStorage.getItem("@KenzieHubToken")

     useEffect(() => {
          if (token) {
               navigate("/dashboard")
          }
     })

     const formSchema = yup.object().shape({
          email: yup.string().required("Informa um e-mail cadastrado").email("E-mail invalido"),
          password: yup.string().required("senha ou e-mail invalido")
     })

     const { register, handleSubmit , formState:{errors} } = useForm({
          resolver: yupResolver(formSchema),
     })

     const seePassword = (boolean) => {
          return boolean? setTypeInput("text") : setTypeInput("password")
     }

     const subimitLoginUser = async (data) => {

          if(data){

               const responseApi = await LoginUserApi(data)
               const loadingToast = toast.loading("Carregando...")
               setLoading(true)

               if (responseApi.status === 200) {

                    toast.update(loadingToast, { render: `Seja bem vindo ${responseApi.data.user.name}`, type: "success", isLoading: false, autoClose:2000, theme: "dark", position: "top-center", closeOnClick: true, pauseOnHover: true, draggable: true,            progress: undefined, transition: Flip });
                    

                    setLoading(false)

                    
                    localStorage.clear()
                    localStorage.setItem("@KenzieHubToken", responseApi.data.token)
                    localStorage.setItem("@KenzieHubIdUser", responseApi.data.user.id)
                    localStorage.setItem("@NameUser", responseApi.data.user.name)
                    localStorage.setItem("@ModuleUser", responseApi.data.user.course_module)

                    navigate("/dashboard")

               } else {
                    toast.update(loadingToast, { render:`Senha ou e-mail invalido`, type: "error", isLoading:false, autoClose:2000, theme: "dark", position: "top-center", closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined,  transition: Flip});
                    
                    setTimeout(() => {
                    setLoading(false)
                    }, 2000);
               }
          }
     }

     return (
     
     <Section>
               <h1>Kenzie Hub</h1>

               <LoginForm onSubmit={handleSubmit(subimitLoginUser)}>
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
               <ToastContainer/>
     </Section>

)};

export default Login;
