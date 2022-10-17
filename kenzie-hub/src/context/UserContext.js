import { toast, Flip } from "react-toastify";
import {LoginUserApi, RegisterUserApi, UserProfile } from "../services/api.js";
import { useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({})


const UserProvider = ({ children }) => {
     const [loading, setLoading] = useState(false)
     const [user, setUser] = useState(null)
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
                         localStorage.clear("")
                         navigate("/")
                    } 
               }
          })()
     },[loadingDelete])

     const userLogin = async (data) => {
         
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

   

     const userRegister = async (data) => {
          
          const loadingToast = toast.loading("Carregando...")
          setLoading(true)

          try {
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
          <UserContext.Provider value={{ userLogin , userRegister , loading , user , technologysUser , setTechnologysUser , setLoadingDelete }}>
               {children}
          </UserContext.Provider>
     )
}

export default UserProvider


