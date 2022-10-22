import { toast, Flip } from "react-toastify";
import {LoginUserApi, RegisterUserApi, UserProfile } from "../services/api";
import { useNavigate } from "react-router-dom";
import { createContext, ReactNode, useEffect, useState } from "react";
import { iUserLogin } from "../pages/login/Login";
import { iUserRegister } from "../pages/register/register";

interface iUserContextProps{
     children: ReactNode;
    
} 

interface iUser{
     id: string;
     name: string;
     email: string;
     course_module: string;
     bio: string;
     contact: string;
     techs: [];
     works: [];
     created_at: string;
     updated_at: string;
     avatar_url: null;
}

export interface iUserContext{
     userLogin: (data:iUserLogin) => void;
     userRegister:(data:iUserRegister) => void;
     loading: boolean;
     user: iUser | null;
     technologysUser: any;
     setTechnologysUser: any ;
     setLoadingDelete: any ;
}




export const UserContext = createContext<iUserContext>({} as iUserContext)

const UserProvider = ({ children }: iUserContextProps) => {
     const [loading, setLoading] = useState(false)
     const [user, setUser] = useState<iUser | null>(null)
     const [technologysUser, setTechnologysUser] = useState()
     const [loadingDelete, setLoadingDelete] = useState(false)
     const navigate = useNavigate()
     
     useEffect(() => {
          (async () => {
               const token = localStorage.getItem("@KenzieHubToken")
               
               if (token) {
                    
                    try {
                         const responseApi = await UserProfile(token)
                         setUser(responseApi.data)
                         setTechnologysUser(responseApi.data.techs)
                         navigate("/dashboard")
                         
                    } catch (error) {
                         localStorage.clear()
                         navigate("/")
                    } 
               }
          })()
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[loadingDelete])

     const userLogin = async (data:iUserLogin) => {
         
          const loadingToast = toast.loading("Carregando...")
          setLoading(true)

          try {
               const responseApi = await LoginUserApi(data)
               toast.update(loadingToast, {
                    render: `Seja bem vindo ${responseApi.data.user.name}`,
                    type: "success",
                    isLoading: false,
                    autoClose: 2000,
                    theme: "dark",
                    position: "top-center",
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    transition: Flip
               });
              
               localStorage.setItem("@KenzieHubToken",responseApi.data.token)
               setUser(responseApi.data.user)
               setTechnologysUser(responseApi.data.user.techs)
               navigate("/dashboard")

          } catch (error) {
               toast.update(loadingToast, {
                    render: `Senha ou e-mail invalido`,
                    type: "error",
                    isLoading: false,
                    autoClose: 2000,
                    theme: "dark",
                    position: "top-center",
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    transition: Flip
               });
          }
          finally {
               setTimeout(() => {
                    setLoading(false)
               }, 2500);
          }
     }

   

     const userRegister = async (data:iUserRegister) => {
          
          const loadingToast = toast.loading("Carregando...")
          setLoading(true)

          try {
               // eslint-disable-next-line no-unused-vars
               const responseApi = await RegisterUserApi(data)
                              
               toast.update(loadingToast, {
                    render: `Cadastrado com sucesso`,
                    type: "success",
                    isLoading: false,
                    autoClose: 2000,
                    theme: "dark",
                    position: "top-center",
                    transition: Flip
               });
               navigate("/")

          } catch (error) {
               toast.update(loadingToast, {
                    render: "Ops, esse e-mail já existe", 
                    type: "error",
                    isLoading: false,
                    autoClose: 2000,
                    theme: "dark",
                    position: "top-center",
                    transition: Flip
               });
               
          } finally {
               setTimeout(() => { 
                    setLoading(false)
               },2000)
                         
          }
     }

     return (
          <UserContext.Provider value={{ userLogin , userRegister , loading , user , technologysUser , setTechnologysUser , setLoadingDelete}}>
               {children}
          </UserContext.Provider>
     )
}

export default UserProvider


