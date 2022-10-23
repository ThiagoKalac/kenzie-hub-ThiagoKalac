import { useContext, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { UserContext } from "../../context/UserContext"


const ProtectedRoutes = () => {
     const { user } = useContext(UserContext)
     const navigate = useNavigate()
     
     useEffect(() => { 
          if (!user) {
               navigate("/")
          }
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])
     
     return (
          <>
               {user && <Outlet/>}
          </>
     )
}

export default ProtectedRoutes