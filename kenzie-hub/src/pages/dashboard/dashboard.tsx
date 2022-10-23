import { Header, Main, Nav } from "./dashboardStyle"
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import Card from "./card/card";
import Modal from "../../components/modal/modal";



const Dashboard = () => {
     const { user, technologysUser } = useContext(UserContext)
     // const { name, course_module } = user
     const [ showModal , setShowModal ] = useState(false)
     
     const callModal = () => {
          setShowModal(true)
     }
     
     return (
          <>
               <div className="divBorderBottomDashboard">
                    <Nav className="container">
                         <h1>Kenzie Hub</h1>
                         <Link to={"/"} onClick={()=> localStorage.clear()}>Sair</Link>
                    </Nav>  
               </div>
               <div className="divBorderBottomDashboard">
                    <Header className="container">
                         <p className="textWelcomeUser">Olá, {user?.name}</p> 
                         <p className="textModule">{user?.course_module}</p>
                    </Header>
               </div>
               <Main className="container">
                    <div className="divAddTechnology">
                         <p>Teclogias</p>
                         <button type="button" onClick={()=> callModal()}>+</button>
                    </div>
                    <ul>
                         {
                              technologysUser.length > 0 ?
                                   (technologysUser.map(elt => <Card key={elt.id} title={elt.title} status={elt.status} idTech={elt.id}/>))
                                   :
                                   (<h3>Não há tecnologias cadastradas ☹️</h3>)
                         }
                    </ul>
                    {
                        showModal ? (<Modal setShowModal={setShowModal} />) : (false) 
                    }
               
               </Main>
          </>
     )
}



export default Dashboard