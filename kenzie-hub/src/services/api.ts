import axios from "axios";
import { iCreateTechnology } from "../components/modal/modal";
import { iUser } from "../context/UserContext";
import { iUserLogin } from "../pages/login/Login";
import { iUserRegister } from "../pages/register/register";

const apiRequest = axios.create({
     baseURL: "https://kenziehub.herokuapp.com",
     timeout: 5000,
     headers: {"Content-Type": "application/json"},
})


interface iRegisterUserApiResponse{
     id: string;
     name: string;
     email: string;
     course_module: string;
     bio: string;
     contact: string;
     created_at: string;
     updated_at: string;
     avatar_url: string | null;
}

interface iLoginUserApiResponse{
     data:{user: iUser; token: string; };
     
}

interface iUserProfileResponse{
     data: iUser;
}

interface iCreateTechnologyApiResponse { 
     data: {
          id: string;
          title: string;
          status: string;
          user: { id: string; };
          created_at: string;
          updated_at: string;
     }
}


const RegisterUserApi = async (data:iUserRegister):Promise<iRegisterUserApiResponse> => {
     return await apiRequest.post("/users", data)
}

const LoginUserApi = async (data:iUserLogin):Promise<iLoginUserApiResponse>=> {
     return await apiRequest.post("/sessions", data)
    
}

const UserProfile = async (token:string):Promise<iUserProfileResponse> => { 
     return await apiRequest.get("/profile", {
          headers: {
               Authorization: `Bearer ${token}`
          }
     })
         
}

const CreateTechnologyApi = async (data:iCreateTechnology,token:string | null):Promise<iCreateTechnologyApiResponse> => { 
     return await apiRequest.post("/users/techs", data, {
          headers: {
               Authorization: `Bearer ${token}`
          }        
     })
}

const DeleteTechnologyApi = async (id:string, token:string | null) => { 
     return await apiRequest.delete(`/users/techs/${id}`, {
          headers: {
               Authorization: `Bearer ${token}`
          }        
     })
}

export { RegisterUserApi, LoginUserApi, UserProfile, CreateTechnologyApi, DeleteTechnologyApi}