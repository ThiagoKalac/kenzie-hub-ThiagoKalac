import { useContext } from "react";
import {CgTrash as Trash} from "react-icons/cg"
import { TechContext } from "../../../context/TechContext";
import LiCard from "./cardStyle";

interface iCardProps{
     title: string;
     status: string;
     idTech: string;
}


const Card = ({title,status,idTech}:iCardProps) => {
     const {deleteTechnology} = useContext(TechContext)

   
     return (
          <LiCard id={idTech}>
               <p>{title}</p>
               <div>
                    <p>{status}</p>
                    <Trash onClick={()=>deleteTechnology(idTech)}>lixeira</Trash>
               </div>
          </LiCard>
     )
}

export default Card;