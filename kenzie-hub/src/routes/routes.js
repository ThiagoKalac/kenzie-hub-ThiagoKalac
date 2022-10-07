import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login/Login';


const RoutesMain = () => (


     <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="*" element={<Navigate to="/" />}/>
     </Routes>

)



export default RoutesMain