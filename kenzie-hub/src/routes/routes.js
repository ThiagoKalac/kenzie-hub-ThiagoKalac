import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from "../components/protectedRoutes/protectedRoutes";
import Dashboard from "../pages/dashboard/dashboard";
import Login from "../pages/login/login";
import Register from "../pages/register/register";


const RoutesMain = () => {
     
     return (
          

          <Routes>
               <Route path="/" element={<Login/>}></Route>
               <Route path="/register" element={<Register />} />
               <Route path="/dashboard" element={<ProtectedRoutes/>}>
                    <Route path="/dashboard" element={<Dashboard />} />     
               </Route>
               <Route path="*" element={<Navigate to="/" />} />
               
          </Routes>
     )

}



export default RoutesMain