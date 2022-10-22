import axios from "axios";
import { iCreateTechnology } from "../components/modal/modal";
import { iUserLogin } from "../pages/login/Login";
import { iUserRegister } from "../pages/register/register";

const apiRequest = axios.create({
     baseURL: "https://kenziehub.herokuapp.com",
     timeout: 5000,
     headers: {"Content-Type": "application/json"},
})


const RegisterUserApi = async (data:iUserRegister) => {
     return await apiRequest.post("/users", data)
}

const LoginUserApi = async (data:iUserLogin) => {
     return await apiRequest.post("/sessions", data)
    
}

const UserProfile = async (token:string) => { 
     return await apiRequest.get("/profile", {
          headers: {
               Authorization: `Bearer ${token}`
          }
     })
         
}

const CreateTechnologyApi = async (data:iCreateTechnology, token:string) => { 
     return await apiRequest.post("/users/techs", data, {
          headers: {
               Authorization: `Bearer ${token}`
          }        
     })
}

const DeleteTechnologyApi = async (id:string, token:string) => { 
     return await apiRequest.delete(`/users/techs/${id}`, {
          headers: {
               Authorization: `Bearer ${token}`
          }        
     })
}

export { RegisterUserApi, LoginUserApi, UserProfile, CreateTechnologyApi, DeleteTechnologyApi}