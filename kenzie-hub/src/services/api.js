import axios from "axios";

const apiRequest = axios.create({
     baseURL: "https://kenziehub.herokuapp.com",
     timeout: 5000,
     headers: {"Content-Type": "application/json"},
})


const RegisterUserApi = async (data) => {
     return await apiRequest.post("/users", data)
}

const LoginUserApi = async (data) => {
     return await apiRequest.post("/sessions", data)
     .then(response => response)
     .catch(err => err)
}

const UserProfile = async (token) => { 
     return await apiRequest.get("/profile", {
          headers: {
               Authorization: `Bearer ${token}`
          }
     })
     .then(response => response)
     .catch(err => err)     
}

const CreateTechnologyApi = async (data, token) => { 
     return await apiRequest.post("/users/techs", data, {
          headers: {
               Authorization: `Bearer ${token}`
          }        
     })
}

const DeleteTechnologyApi = async (id, token) => { 
     return await apiRequest.delete(`/users/techs/${id}`, {
          headers: {
               Authorization: `Bearer ${token}`
          }        
     })
}

export { RegisterUserApi, LoginUserApi, UserProfile, CreateTechnologyApi, DeleteTechnologyApi}