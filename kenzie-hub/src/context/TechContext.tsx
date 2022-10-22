import { createContext, ReactNode, useContext, useState} from "react";
import { CreateTechnologyApi, DeleteTechnologyApi } from "../services/api";
import { UserContext } from "./UserContext";
import { toast, Flip } from "react-toastify";
import { iCreateTechnology } from "../components/modal/modal";

interface iTechContextProps{
     children: ReactNode;
}

interface iTechContext{
     createTechnology:(data:iCreateTechnology) => void;
     deleteTechnology:(id:string) => void;
     loading: boolean;

}


export const TechContext = createContext<iTechContext>({} as iTechContext)

const TechProvider = ({children}:iTechContextProps) => {
     const { technologysUser , setTechnologysUser , setLoadingDelete } = useContext(UserContext)
     const [loading, setLoading] = useState(false)

     const createTechnology = async (data:iCreateTechnology) => { 

          const token = localStorage.getItem("@KenzieHubToken")
          const loadingToast = toast.loading("Carregando...")
          setLoading(true)
          try {
               const responseApi = await CreateTechnologyApi(data, token)

               toast.update(loadingToast, {
                    render: `Criado com sucesso`,
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

               setTechnologysUser([...technologysUser, responseApi.data])

          } catch (error) { 
               toast.update(loadingToast, {
                    render: `Tecnologia já cadastrada!`,
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
          }  finally {
               setTimeout(() => {
                    setLoading(false)
               }, 2500);
          }
     }
     
     const deleteTechnology = async (id:string) => { 
          
          const token = localStorage.getItem("@KenzieHubToken")
         
          try {
               const responseApi = await DeleteTechnologyApi(id, token)
               if (responseApi.status === 204) {
                    toast.success('Deletado com sucesso', {
                         position: "top-center",
                         autoClose: 1500,
                         hideProgressBar: false,
                         closeOnClick: true,
                         pauseOnHover: true,
                         draggable: true,
                         progress: undefined,
                         theme: "dark",
                         transition: Flip
                    });
                    
                    setLoadingDelete(true)
               }
          
          } catch (error) {
              toast.error('Algo deu errado', {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Flip
               });
          } finally {
               setTimeout(() => {
                    setLoadingDelete(false)
                    
               },1000)
               
          }

     }
 
     
     

     return(
          <TechContext.Provider value={{createTechnology,deleteTechnology , loading}}>
               {children}
          </TechContext.Provider>
     )
}

export default TechProvider