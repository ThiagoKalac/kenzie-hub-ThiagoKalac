import { Header, Main, Nav } from "./dashboardStyle"
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Dashboard = () => {
     const navigate = useNavigate()
     const nameUser = localStorage.getItem("@NameUser")
     const moduleUser = localStorage.getItem("@ModuleUser")
     const token = localStorage.getItem("@KenzieHubToken")

     useEffect(() => {
          if (!token) {
               navigate("/")
             
          }
     })

  
     
     return (
          <section className="container">
               <Nav>
                    <h1>Kenzie Hub</h1>
                    <Link to={navigate("/")} onClick={()=> localStorage.clear()}>Sair</Link>
               </Nav>  
               <Header>
                    <p className="textWelcomeUser">Olá, {nameUser}</p> 
                    <p className="textModule">{moduleUser}</p>
               </Header>
               <Main>
                    <p>Que pena! Estamos em desenvolvimento :(</p>
                    <span>Nossa aplicação está em desenvolvimento, em breve teremos novidades</span>
               </Main>
          </section>
     )
}



export default Dashboard