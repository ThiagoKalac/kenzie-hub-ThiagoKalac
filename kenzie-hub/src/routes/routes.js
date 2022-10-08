import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/login/Login';
import Register from '../pages/register/register';


const RoutesMain = () => (


     <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="*" element={<Navigate to="/" />}/>
     </Routes>

)



export default RoutesMain