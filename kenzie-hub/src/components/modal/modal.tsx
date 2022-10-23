import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { BtnMain } from "../../styles/Button"
import Input from "../../styles/Input"
import { modalCreateTechnologySchema } from "./modalSchema"
import ModalDialog from "./modalStyle"
import { TechContext } from "../../context/TechContext";
import { useContext } from "react"

export interface iCreateTechnology{
     title: string;
     status: string;
}

interface iModalProps{
     setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}


const Modal = ({setShowModal}:iModalProps) => { 
     const { createTechnology, loading } = useContext(TechContext)

     const { register, handleSubmit , formState:{errors}, reset } = useForm<iCreateTechnology>({
          resolver: yupResolver(modalCreateTechnologySchema),
     })
     
     const closeModal = () => { 
          setShowModal(false)
          
     }
     
     const onSubimit = (data:iCreateTechnology) => {
          createTechnology(data)
          reset({
               title: "",
               status:""
          })
     }

     
     
     return (
          <ModalDialog>
               <div className="divHeaderModal">
                    <h3>Cadastrar Tecnologia</h3>
                    <button type="button" onClick={()=> closeModal()}>X</button>
               </div>
               <form onSubmit={handleSubmit(onSubimit)}>

                    <label htmlFor="title">Nome</label>
                    <Input placeholder="Ex: HTML5" {...register("title")} />
                    <p className="textError">{errors.title?.message}</p>

                    <label htmlFor="status">Selecionar Status</label>
                    <select {...register("status")}>
                         <option value="">Escolha seu nivel</option>
                         <option value="Iniciante">Iniciante</option>
                         <option value="Intermediário">Intermediário</option>
                         <option value="Avançado">Avançado</option>
                    </select>
                    <p className="textError">{errors.status?.message}</p>

                    <BtnMain type="submit" disabled={loading}>
                         {loading ? 
                              <>
                                   <div className="animationLoadign"></div>
                                   "Cadastrando..."
                              </>
                              : 
                              "Cadastrar Tecnlogia"
                         }
                    </BtnMain>
               </form>
          </ModalDialog>
     )
}


export default Modal