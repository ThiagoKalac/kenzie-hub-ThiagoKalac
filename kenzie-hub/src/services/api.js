import axios from 'axios';

const apiRequest = axios.create({
     baseURL: "https://kenziehub.herokuapp.com",
     timeout: 5000,
     headers: {'Content-Type': 'application/json'},
})


const RegisterApi = async (data) => {
return await apiRequest.post("/users", data)
     .then(response => response)
     .catch(err => err)
}





export { RegisterApi }