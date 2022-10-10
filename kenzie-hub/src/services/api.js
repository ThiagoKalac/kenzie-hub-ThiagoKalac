import axios from "axios";

const apiRequest = axios.create({
     baseURL: "https://kenziehub.herokuapp.com",
     timeout: 5000,
     headers: {"Content-Type": "application/json"},
})


const RegisterUserApi = async (data) => {
return await apiRequest.post("/users", data)
     .then(response => response)
     .catch(err => err)
}

const LoginUserApi = async (data) => {
     return await apiRequest.post("/sessions", data)
     .then(response => response)
     .catch(err => err)
}



export { RegisterUserApi, LoginUserApi }